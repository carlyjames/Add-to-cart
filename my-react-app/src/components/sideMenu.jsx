import React, { Component } from "react";

class SideMenu extends Component {
  render() {
    return (
        <>
            <div className="card mx-3 mt-5" >
                    <div className="card-header bg-white">Cart Summary</div>
                    <ul className="list-group list-group-flush">
                        <div className="d-flex justify-content-between list-group-item subtotalHolder">
                            <span className="subtotal">Subtotal </span>
                            {/* should return total amount of products */}
                            <span className="price">$2,250</span>
                        </div>
                        <span className="list-group-item deliveryText text-muted"> Delivery fees not included yet.</span>
                        {/* should return total amount of products */}
                        <button className="checkOutBtn btn-primary">CHECKOUT ($2,250)</button>                
                    </ul>
            </div>
            <div className="card mx-3 mt-3">
                <div className="card-body">
                    <div className="card-text" >
                        <p className="mb-1" style={{fontWeight:'bold'}}>Returns are easy</p>
                        Free return within 15 days for Official Store items and 7 days for other eligible items See more
                    </div>
                </div>
            </div>
        </>
      
    );
  }
}

export default SideMenu;
