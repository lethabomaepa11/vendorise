## Vendorise E-commerce

This app is for informal business and self-employed people like influencers selling Iphones and all
How the process is

- Buyer places the order. **status: Pending**
- Buyer cancels an order. **status: Canceled**
- The seller receives the order, accepts. **status: Accepted**
- The seller receives the order rejects or does not respond after some days. **status: Rejected**
- The order was accepted and not sent to the warehouse or sent but not okay, buyer gets full refund **status: Returned**
- The order was a success, it gets delivered to the buyer, seller gets the money . **status: In transit**
- The order arrives at the buyer. **status: Delivered**

## Stakeholders responsible for actions

**System** : The application system itself, from the business logic
**Buyer** : The person responsible for placing orders
**Seller** : The person responsible for placing ads, products, accepting/rejecting and delivering products
**Warehouse admin** : The person in the exchange warehouse responsible for confirming products
**Courier person** : The person responsible for delivering a product to its final destination

- Pending: System
- Accepted: Seller
- Rejected: Seller, System
- Returned: Warehouse admin
- In Transit: Warehouse admin
- Delivered: Courier person
