export const initialState = {
    basket: [
        {
            id: '2023001',
            title: "Sample Product which has a really long title",
            price: 200,
            rating: 4,
            image: 'https://pngimg.com/uploads/cooking_pot/cooking_pot_PNG14071.png'
        },
        {
            id: '2023002',
            title: "Sample Product which has a really long title",
            price: 200,
            rating: 4,
            image: 'https://pngimg.com/uploads/cooking_pot/cooking_pot_PNG14071.png'
        }
    ],
    user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index >= 0) {
                //item exists in basket, remove it...
                newBasket.splice(index,1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not in basket!`
                )
            }

            return {
                ...state, basket: newBasket
            };
        default:
            return state;
    }
} 


export default reducer;