import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './component/App'

import {
    Provider
} from 'react-redux'

import { createStore } from 'redux'

export interface InitialState {
    arr: any[]
}

export const initialState: InitialState = {
    arr: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return { arr: state.arr.concat({ nyan:  action.payload }) }
        case 'NO_ADD':
            // const temp = 
            // console.log(state.arr)
            return { arr: state.arr.concat()}
        default:
            return state
    }
}

const store = createStore(reducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.querySelector('#root'))
