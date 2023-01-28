import React from 'react';
import Canvas from './Canvas';
import ReferenceImage from './ReferenceImage';

class Calibrate extends React.Component {
    state = {
        currPose:false,
        idx:0,
    }
    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this)
    }
    handler() {
        this.setState({currPose:true})
    }
    render() {
        return (
            <div className="calibrate">
                <Canvas handler={this.handler} currPose={this.state.currPose}/>
                <ReferenceImage idx={this.state.idx}/>
            </div>
        );
    }
}

export default Calibrate;