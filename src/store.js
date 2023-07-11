import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunks";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
	account: accountReducer,
	customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
