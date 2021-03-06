import  {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('should setup remove expense action object', ()=> {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should remove an object', () => {
    const action = editExpense('132', {note: 'this is a new note'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '132',
        updates: {
            note: 'this is a new note'
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
} )

test('should setup add expense object with defualt values', () => {
    const action = addExpense({})
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)
        }
    })
})