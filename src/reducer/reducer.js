const Items = [
               {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
               {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
               {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
             ];

const cartState = {
    cartPrice: 0,
    Items
}

export default (state = cartState, action) => {

    switch(action.type) {
         case "ADD_TO_CART" :{
            return {
                ...state,
               cartPrice : state.cartPrice += action.price
            }
         }
        default:
        return state;
    }
}