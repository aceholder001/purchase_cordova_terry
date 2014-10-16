var assert = require("assert");
var store = require("../store-test");

describe('Off', function(){

    var product = {
        id: "p1"
    };
    before(function() {
        store.registerProducts([ product ]);
    });

    describe('#off()', function(){

        it('should exist', function() {
            assert.ok(store.off);
        });

        it('should allow to remove functions registered with when', function() {

            var called = 0;
            var f = function() {
                ++called;
            };

            store.when("p1").loaded(f);
            assert.equal(0, called);
            store.trigger("p1", "loaded");
            assert.equal(1, called, "callback executed " + called + " times instead of 1");

            store.when("p1").loaded(f);
            store.trigger("p1", "loaded");
            assert.equal(3, called);

            store.off(f);
            store.trigger("p1", "loaded");
            assert.equal(3, called);
        });

        it('should allow to remove functions registered with ready', function() {

            var called = 0;
            var f = function() {
                ++called;
            };

            store.ready(f);
            store.off(f);
            store.ready(true);
            assert.equal(0, called);
        });

        it('should allow to remove functions registered with ask', function() {

            var called = 0;
            var f = function() {
                ++called;
            };

            store.ask("p1").then(f);

            var product = store.get("p1");
            product.set("state", store.VALID);
            assert.equal(1, called, "ask should have been called once, not " + called + " times");

            store.ask("p1").then(f);
            assert.equal(2, called);

            product.loaded = false;
            store.ask("p1").then(f);
            assert.equal(2, called);

            store.off(f);
            store.trigger("p1", "loaded", product);
            assert.equal(2, called);
        });

        it('should allow to remove functions registered with error', function() {
            var called = 0;
            var f = function() {
                ++called;
            };
            store.error(f);
            store.error.callbacks.trigger();
            assert.equal(1, called);
            store.error.callbacks.trigger();
            assert.equal(2, called);
            store.off(f);
            store.error.callbacks.trigger();
            assert.equal(2, called);
        });

    });
});

