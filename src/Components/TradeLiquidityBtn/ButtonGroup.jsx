import React from 'react';
import './ButtonGroup.css'

function ButtonGroup() {
    return (
        <div className="title__btns">
        <button className="exc-btn">Exchange</button>
        <hr className="btn_border"></hr>
        <button className="liq-btn">Liquidity</button>
        <hr className="btn_border"></hr>
      </div>
    )
}

export default ButtonGroup
