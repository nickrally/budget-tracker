import { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
    //takes 2 args: global state passed by react, and action passed by dispatch func
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}
const initialState = {
    budget: 2000,
    expenses: [
        {id: 12, name: 'shopping', cost: 40},
        {id: 14, name: 'holiday', cost: 400}
    ]
}

//Context provides a way to pass data through the component tree without passing props down 
// manually at every level. Context is designed to share data that can be considered “global” 
// for a tree of components. Here we create context and assign to AppContext variable.
export const AppContext = createContext();

//Every Context object comes with a Provider React component that allows consuming components 
// to subscribe to context changes. Since our context is saved in AppContext variable, to access
//its Provider use AppContext.Provider syntax.
//The Provider component accepts a value prop to be passed to consuming components 
// that are descendants of this Provider (nested under provider) 
//Here we create a provider that will wrap the component to which we want to pass values to
//AppProvider holds the state and passes it to components.
//Those nested components are expressed by {props.children}
//In App.js where entire JSX of the return statement of App component is wrapped in AppProvider tag,
//so that Budget, Remaining, ExpenseTotal, ExpenseList, AddExpenseForm components 
// will have access to global state.

//To hold the state we will useReducer
//useReducer hook is similar to useState hook. It returns the state and a func
//to update the state (in this case a dispatch func that dispatches actions - it trigger the reducer).
//useReducer takes two params: a reducer function and initial state
//The reducer function is responsible for creating new state based on action.

export const AppProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch
    }}>
        {props.children}
    </AppContext.Provider>)
}
