const initialState = {
    amount: 0
}

export default (state = initialState, action) => {
    if(action.type === 'DEPOSIT'){
        return {
            ...state,
            amount: state.amount + action.payload
        }
    }
    if(action.type === 'DESCOUNT'){
        return {
            ...state,
            amount: state.amount - action.payload
        }
    }

    return state
 }

 export const selectCurrentAmount = (state) => {
     return state.amountReducer.amount
 } 