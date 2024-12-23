export class user {
    //the user can be a buyer or a seller
    constructor(name,surname,email,password,phone,age,gender){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
        this.gender = gender
        this.id = Math.random().toString(36).substring(2,15);
    }
}
export class user_wallet{
    //both the buyer and seller have wallets
    user_id
    balance
}
export class transaction{
    //track transactions that will be displayed in the wallet
    user_id
    amount
    type
    description
}
export class product{
    //the product placed by the seller, bought by the buyer
    constructor(title,image,price,category){
        this.title = title;
        this.image =image;
        this.price = price;
        this.category = category;
    }
    id
    title
    image
    price
    seller_id
    datePlaced
    category
}
export class product_review{
    //a product review
    id
    product_id
    review
    user_id
}
export class seller{
    //the seller, must have ratings for trust
    user_id
    rating

}
export class order{
    //order made by the buyer
    id
    delivery_address
    total_amount
    buyer_id
    status/**Pending, Accepted, Rejected, Returned, In transit, Delivered */
}
export class ordered_product{
    id
    order_id
    product_id
}
export class cart{
    //array
    items
    total_amount
}

/**How the process is
 * Buyer places the order. status: Pending
 * The seller receives the order, accepts. status: Accepted
 * The seller receives the order rejects or does not respond after some days. status: Rejected
 * The order was accepted and not sent to the warehouse or sent but not okay. status: Returned, buyer gets full refund
 * The order was a success, it gets delivered to the buyer. status: In transit, seller gets the money
 * The order arrives at the buyer. status: Delivered
 * 
 * Stakeholders responsible for actions
 * Pending: System
 * Accepted: Seller
 * Rejected: Seller, System
 * Returned: Warehouse admin
 * In Transit: Warehouse admin
 * Delivered: Courier person
 * 
 */