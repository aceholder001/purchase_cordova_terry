namespace CDVPurchase2
{
    export class Transaction {

        /** Platform this transaction was created on */
        platform: Platform;

        /** Transaction identifier. */
        transactionId: string = '';

        /** Identifier for the purchase this transaction is a part of. */
        purchaseId?: string;

        /**
         * Time the purchase was made.
         *
         * For subscriptions this is equal to the date of the first transaction.
         * Note that it might be undefined for deleted transactions (google for instance don't provide any info in that case).
         */
        purchaseDate?: Date;

        /** Time a subscription was last renewed */
        lastRenewalDate?: Date;

        /** Time when the subscription is set to expire following this transaction */
        expirationDate?: Date;

        /** True when the transaction has been acknowledged to the platform. */
        isAcknowledged?: boolean;

        /** True when the transaction is still pending payment. */
        isPending?: boolean;

        /** True when the transaction was consumed. */
        isConsumed?: boolean;

        /** Is the subscription set to renew. */
        renewalIntent?: RenewalIntent;

        /** Time when the renewal intent was changed */
        renewalIntentChangeDate?: Date;

        /** State this transaction is in */
        state: TransactionState = TransactionState.UNKNOWN_STATE;

        /** Purchased products */
        products: {

            /** Product identifier */
            productId: string;

            /** Offer identifier, if known */
            offerId?: string;
        }[] = [];

        constructor(platform: Platform) { this.platform = platform; }
    }

    /** Whether or not the user intends to let the subscription auto-renew. */
    export enum RenewalIntent {
        /** The user intends to let the subscription expire without renewing. */
        LAPSE = "Lapse",
        /** The user intends to renew the subscription. */
        RENEW = "Renew",
    }
}
