export const initialState = {
    basket: [],
};

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
                //item exists in basket
                newBasket.splice(index, 1); //goto that index and cut it
            } else {
                console.warn (
                    `Can't remove product (id: ${action.id}) as its not in the basket`
                );
            }
            return { 
                ...state, 
                basket: newBasket 
            };

        default:
            return state;
    }
}

export default reducer;