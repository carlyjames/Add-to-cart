import React, { Component } from "react";


class Counters extends Component {

  styles = {
    fontSize: 20,
    fontWeight: 600,
    margin:20,
  };


  //   getCategories() {
  //     let alert = (
  //       <p className="alert alert-warning m-2 ">Sorry,Nothing to see here...</p>
  //     );
  //     if (this.state.categories.length === 0) return alert;

  //     return (
  //       <ul className="mt-4">
  //         {" "}
  //         {this.state.categories.map((categories) => (
  //           <li key={categories}> {categories} </li>
  //         ))}{" "}
  //       </ul>
  //     );
  //   }




  render() {
    console.log('props',this.props);
    return (
      <div className="cart-holder  d-flex flex-column">
        {this.props.children}



        <div className="d-flex justify-content-between px-2  cart mt-2">
  
            <button onClick={() => this.props.onDelete(this.props.counting.id)} className="btn shadow-lg m-2  d-flex justify-content-around">
              <i className="fas fa-trash"></i>
              Remove 
            </button>


          <div className="buttons d-flex mb-2">
            {/* minus icon */}
            <button
              onClick={() => this.props.onDecrement(this.props.counting)}
              className="btns btn-primary   mt-2" 
            >
              <i className="fas fa-minus"></i>
            </button>

            {/* numbers */}
            <p className="mx-4 mt-3 productNumber">{this.formatCount()}</p>

            {/* plus iocn */}
            <button
              onClick={() => this.props.onIncrement(this.props.counting)}
              className="btns btn-primary  mt-2" 
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>

      </div>
    );
  }

  getBadgeClasses() {
    let classes = "";
    classes += this.props.counting.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counting;
    return value === 0 ? 0 : value;
  }
}

export default Counters;
