import React, { Component } from "react";
import Counters from "./Counter";
import { Badge } from "react-bootstrap";
class CounterData extends Component {


  render() {
    return (
      <div className="">
        <button onClick={this.props.onReset} className="btns resetBtn btn-primary m-2">Reset</button>
        <div className=" totalCart">
          Cart : ({this.props.totalCounters})
        </div>
        {this.props.counts.map((counting) => (
          <Counters
            key={counting.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counting={counting}
          >
            <div className="d-flex  p-2 cartHeader ">
              <div className="img-holder col-sm-6">
                <img src={counting.image} alt={counting.product} />                  
              </div>


              <div className="info d-flex flex-column col-sm-6 mx-4 lg:gap-8">
                <span>{counting.product}</span>
                <p className="">
                  <span className="text-muted">Seller : </span>
                  <span className="text-grey-800"> {counting.seller}</span>               
                </p>
                <p className="d-flex">
                  <span className="text-muted " >Variation : </span>
                  <span className="text-grey-800 text-truncate d-inline-block">{counting.variation} </span>               
                </p>            
                

               

                <span className="text-muted">In Stock</span>

            
              </div>
              <div>
                <p className=" mt-2 mx-5 d-flex flex-column">
                    <span className="text-grey-800 price"> ${counting.price}</span>    
                    <div className="d-flex">
                      <del className="discountPrice text-muted">{counting.discount}</del>
                      <span className="discountRate mx-2">{counting.discountRate }</span>
                    </div>           
                  </p>
              </div>
            
            </div>
          
            
          </Counters>
        ))}
      </div>
    );
  }
}

export default CounterData;
