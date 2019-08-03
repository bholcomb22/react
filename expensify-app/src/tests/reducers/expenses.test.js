import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2132132331'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add expense', () => {
   const action = {
       type: 'ADD_EXPENSE',
       expense: {
           description: 'ayyy',
           createdAt: 0,
           amount: 0,
           note: ''
       }
   }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])
})

test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            note: 'boooo'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([{
        id: '1',
        description: 'Gum',
        note: 'boooo',
        amount: 195,
        createdAt: 0
    },expenses[1], expenses[2]])
})

test('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '13543',
        updates: {
            note: 'boooo'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})