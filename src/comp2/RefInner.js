import React, {Component} from 'react'

class RefInner extends Component{

    state = {
        title:'AAAAAAAAAAAAA'
    }

    render(){
        return(
            <div>
                <h3>안쪽 컴퍼넌트</h3>
                <div>{this.state.title}</div>
            </div>
        )
    }
}

export default RefInner