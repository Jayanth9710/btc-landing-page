import React from "react";
import HelpIcon from "../HelpIcon/HelpIcon";
import ButtonGroup from "../TradeLiquidityBtn/ButtonGroup";
import "./LiquidityListing.css";

function LiquidityListing() {
  return (
    <div className="liq_page">
      <ButtonGroup />
      <div className="liquidity__list__page d-flex align-items-center justify-content-center">
        <div className="liquidity__list__box">
          <div className="liquidity__header row mt-4">
            <div className="title_div col-8">
              <h3 className="title">Your Liquidity</h3>
            </div>
            <div className=" icons col-4">
              <span className="nav__settings">
                <i class="fas fa-cog"></i>
              </span>
              <span className="nav__time">
                <i class="far fa-clock"></i>
              </span>
            </div>
          </div>
          <span className="tagline">Remove liquidity to receive tokens back</span>
          <button className="trade__wallet"><span className="add"><i class="fas fa-plus"></i></span>Add Liquidity</button>
        </div>
      </div>
      <HelpIcon />
    </div>
  );
}

export default LiquidityListing;
