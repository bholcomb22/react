import moment from 'moment'
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
}) 

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should return settextfilter object with new text', () => {
    const action = setTextFilter('new text')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'new text'
    })
})

test('Should return setTextFilter default object', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})


test('should return sortby date action', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should return sort by amount action', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})




