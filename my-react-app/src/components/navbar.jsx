import React, { Component } from 'react';
import { Badge } from "react-bootstrap";

class NavBar extends Component {
    render() { 
        return (
            <div className='navbar navbar-light bg-light d-flex justify-content-around'>
                <a href="#" className="navbar-brand Subtotal">
                    <i className="fas fa-shop" aria-hidden="true"></i>
                    <span className='logo'>ShopMate</span>
                </a>
                
                <p  className='m-1 totalProducts'>
                <i class="fa-solid fa-cart-shopping"></i>
                {/* total number of products */}
                    <span className='badge'>{this.props.totalCounters} </span>
                    
                </p>
            </div>
        );
    }
}
 
export default NavBar;