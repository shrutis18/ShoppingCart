export const mapStateToProps = (state) => {
return {
        cartPrice: state.cartPrice,
        items: state.Items
      }
}

export const  mapDispatchToProps = (dispatch) => {
    return {
        addToCart : (price) => {
            dispatch({
              type: "ADD_TO_CART",
              price
            })
        }

      }
}