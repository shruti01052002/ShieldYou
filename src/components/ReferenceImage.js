import React from 'react';

let img1 = require('../images/move_part-1.png');
let img2 = require('../images/move_part-2.png');
let img3 = require('../images/move_part-3.png');

const move=[img1, img2, img3];

class ReferenceImage extends React.Component {
    render() {
        const i=this.props.idx;
        const s=move[i];
        return (
            <div className="reference">
                <img src={s} alt='steps'></img>
            </div>
        );

    }
}

export default ReferenceImage;