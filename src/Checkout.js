import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <img 
                className="checkout__ad" 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/primedeals/XCM_Manual_1186807_Prime_deals_Page_GW_1500x250_Prime_XCM_Manual_1186807_1500x200_Eng_1566899294_jpg.jpg"
                alt=""
            />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one or more items, click "Add to basket" next to the item you want to buy!
                    </p>
                </div>
            ) : (
                <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>
                
                {/* List out all the Checkout Products */}
                {basket?.map(item => (
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image = {item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
               
                </div>
            )} 
        </div>
    )
}

export default Checkout;
