var assert = require("assert");
var store = require("../store-test");

describe('Utils', function(){

    describe('#ajax', function(){

        XMLHttpRequest = function() {
            this.open = function(method, url) {
                this.method = method;
                this.url = url;
            };
            this.setRequestHeader = function(key,value) {};
            this.onreadystatechange = function(event) {};
            this.send = function(data) {
                this.readyState = 1;
                this.onreadystatechange({});
                this.readyState = 2;
                this.onreadystatechange({});
                this.readyState = 3;
                this.onreadystatechange({});
                this.readyState = 4;
                if (this.url === 'error404') {
                    this.status = 404;
                    this.statusText = 'Not found';
                }
                else {
                    this.status = 200;
                    this.responseText = '\n{"success":true}\n';
                }
                setTimeout(this.onreadystatechange, 1);
            };
        };

        it('should allow simple requests', function(done) {
            assert.ok(store.utils.ajax);

            store.utils.ajax({
                url: 'dummy',
                method: 'POST',
                data: { a: 1, b: 2 },
                success: function(data) {
                    assert.ok(data.success, "request should send success status");
                    done();
                },
                error: function(status, message) {
                    assert.ok(false, "this request shouldn't fail");
                }
            });
        });

        it('should handle errors', function(done) {
            store.utils.ajax({
                url: 'error404',
                method: 'POST',
                data: { a: 1, b: 2 },
                success: function(data) {
                    assert.ok(false, "request should not send success status");
                },
                error: function(status, message) {
                    assert.equal(404, status, "this request should fail with status 404");
                    done();
                }
            });
        });

        it('should handle failing success callbacks', function(done) {
            store.utils.ajax({
                url: 'dummy',
                method: 'POST',
                data: { a: 1, b: 2 },
                success: function(data) {
                    a.b.c = 0;
                },
                error: function(status, message) {
                    assert.ok(false, "Error callback shoudn't be called");
                }
            }).done(function() {
                done();
            });
        });
    });
});

