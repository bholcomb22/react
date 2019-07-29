import {createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const addExpense = (
    {
        description = '',
         note = '', 
         amount = 0, 
         createdAt = 0 } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense =({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// filter actions

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

//expenses reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState , action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter((item) => item.id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((item) => {
                if(item.id === action.id){
                    return {
                        ...item,
                        ...action.updates

                    }
                } else {
                    return item
                }
            } )
        default:
            return state
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

//get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((item) => {
        const startDateMatch = typeof startDate !== 'number' || item.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number'|| item.createdAt <= endDate
        const textMatch = item.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}
//store creation

const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    )

    store.subscribe(() => {
        const state = store.getState()
        const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
        console.log(visibleExpenses)
    })

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 5000, createdAt: 42432423}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 5001, createdAt: 1293819283}))

// store.dispatch(removeExpense({id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 700 }))

// store.dispatch(setTextFilter('f'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(160))
// store.dispatch(setEndDate())
const demoState = {
    expenses: [{
        id: 'asfjksjfa',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}

