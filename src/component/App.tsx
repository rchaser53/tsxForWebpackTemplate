import * as React from 'react'

export class Apps extends React.Component<{}, any> {
    constructor() {
        super()

        this.state = {
            poyo: ''
        }
        this.hoge = this.hoge.bind(this)
    }

    hoge() {

    }
  render() {
    return (
      <div>
          <div onClick={() => {
                    console.log('aaa')
                    this.setState({
                        poyo: Date.now()
                    })
                }}>234</div>
                <TestA poyo={this.hoge} />
			</div>
		)
	}
}
export default Apps


class TestA extends React.Component<any, any> {
    shouldComponentUpdate() {
        console.log(2143)
        return false
    }

    render() {
        console.log('testA')
        return  <div>
                    <div>testA</div>
                    <TestB />
                </div>
    }
}

class TestB extends React.PureComponent<any, any> {
    render() {
        console.log('testB')
        return  <div>
                    <div>testB</div>
                </div>
    }
}
