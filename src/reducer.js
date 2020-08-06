export const initialState = {
    basket: [
        {
            id:"17683456",
            title :"Sony Home Theater Projector VPL-VW295ES: Full 4K HDR Video Projector for TV, Movies and Gaming - Home Cinema Projector",
            price:699348,
            image:"https://m.media-amazon.com/images/I/71OHNxC8eQL._AC_SX960_SY720_.jpg",
            rating:4
        }
    ],
    // user: null
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0); //reduce fxn is so powerful| here, it's adding the prices of all items in basket array 


const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            //Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            //Logic for Removing item from basket

            //clone the existing basket
            let newBasket = [...state.basket];

            //check to see if product exists
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if(index >= 0) {
                //if item exists in basket, remove it...
                newBasket.splice(index, 1); //goto that index and cut it
            } else {
                console.warn (
                    `Can't remove product (id: ${action.id}) as its not in the basket`
                );
            }

            //return all the previous state but change the basket state to be the new basket
            return { 
                ...state, 
                basket: newBasket 
            };

        default:
            return state;
    }
}

export default reducer;