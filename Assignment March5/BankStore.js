import { legacy_createStore as createStore } from 'redux';
 
 
const initialState = {
    balance: 0
};
 
const bankReducer = (state = initialState, action) => {
    // Convert action type to upper case
    const type = action.type.toUpperCase();
 
    let updatedState = { ...state }; 
 
    switch (type) {
        case "CREATE":
            updatedState.balance = 0;
            break;
 
        case "DEPOSIT":
            updatedState.balance += parseFloat(action.amount);
            break;
 
        case "WITHDRAW":
            if (state.balance < parseFloat(action.amount)) {
                alert("Insufficient Fund");
           
            } else {
                if (state.balance < 500) {
                    alert("Minimum balance should be at least 500");
 
               
                } else {
                    updatedState.balance -= parseFloat(action.amount);
                }
            }
            break;
 
        default:
            break;
    }
 
    return updatedState;
};
 
// Step2: Create Store
const bankStore = createStore(bankReducer);
 
export default bankStore;