import React from 'react';
import Canvas from './Canvas';
// import ReferenceImage from './ReferenceImage';

class Calibrate extends React.Component {
    render() {
        return (
            // canvas (real-time video & reference image for user
            <>
                {/* loop for number of images for one move */}
                {/* condition: individual correct => i++ */}
                <Canvas />
                {/* <ReferenceImage /> */}
            </>
        );
    }
}

export default Calibrate;