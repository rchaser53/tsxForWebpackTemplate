import * as React from 'react'
import {
    createSelector,
    createSelectorCreator
} from 'reselect'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { InitialState } from '../index'

export interface Props {
    arr: any[],
    dispatch: Dispatch<InitialState>
}

export class Apps extends React.Component<Props, {}> {
    constructor() {
        super()
        this.hoge = this.hoge.bind(this)
        this.noHoge = this.noHoge.bind(this)
    }

    hoge() {
        this.props.dispatch({
            type: 'ADD',
            payload: Date.now()
        })
    }

    noHoge() {
        this.props.dispatch({
            type: 'NO_ADD'
        })
    }

	render() {
        // console.log(this.props)
		return (
			<div>
				<div onClick={this.hoge}>234</div>
                <div onClick={this.noHoge}>gya-n</div>
                {
                    this.props.arr.map((elem, index) => {
                        return <TestA key={elem.nyan} val={index} />
                    })
                }
			</div>
		)
	}
}
// export default connect((state) => {
//     console.log('a')
//     return state
// })(Apps)

export default connect((state) => {
    console.log('a')
    return createSelector<any, any, any>(
        (state) => {
            console.log('b')
            return state
        },
        (state) => {
            console.log('c')
            return state
        })
})(Apps)

// const customSelectorCreator = createSelectorCreator(
//     (func, equalityCheck) => {
//         let lastArgs = null
//         let lastResult = null

//         return () => {
//             if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
//                 lastResult = func.apply(null, arguments)
//             }
//             lastArgs = arguments
//             return lastResult
//         }
//     }
// )

class TestA extends React.Component<{val: number}, {}> {
    render() {
        console.log(this.props.val)
        return  <div>
                    <div>{this.props.val}</div>
                </div>
    }
}