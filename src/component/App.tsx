import * as React from 'react'
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

class TestA extends React.Component<{val: number}, {}> {
    render() {
        return  <div>
                    <div>{this.props.val}</div>
                </div>
    }
}

export default connect<{}, {}, any>(
    (state) => {
        return state
    }
)(Apps)