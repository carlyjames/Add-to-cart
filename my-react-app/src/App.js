import React, { Component } from 'react';
import NavBar from './components/navbar';
import CounterData from './components/counters';
import SideMenu from './components/sideMenu';
class App extends Component {
  state = {
    counts: [
      { id: 1, value: 1, product : 'Spice Bedsheets Beautiful Bed Sheets', seller: 'Carly James', variation : 'Double bed size',price: 500,discount: '$5',discountRate: '10%' ,image: 'https://images.pexels.com/photos/7765001/pexels-photo-7765001.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { id: 2, value: 1 ,product : 'Men fashion polo', seller: 'Abraham James', variation : 'Dripping men fashion polo',price: 100, discount: '$10',discountRate: '5%',image: 'https://images.pexels.com/photos/5434060/pexels-photo-5434060.jpeg?auto=compress&cs=tinysrgb&w=600'},
      { id: 3, value: 1 , product : '128gb Iphone Xr ', seller : 'John Doe', variation : 'Brand New Iphone Xr plus Cord',price: 1500,discount: '$15', discountRate: '10%',image: 'https://images.pexels.com/photos/5083491/pexels-photo-5083491.jpeg?auto=compress&cs=tinysrgb&w=600'},
      { id: 4, value: 1 , product : '3000mAH Oraimo Power Bank', seller : 'Oraimo', variation : '1 Power Bank lasts for 12yrs',price: 150,discount: '$5',discountRate: '10%',image: 'https://images.pexels.com/photos/4526425/pexels-photo-4526425.jpeg?auto=compress&cs=tinysrgb&w=600'},
    ],

  };

  handleDelete = (countesId) => {
    const counts = this.state.counts.filter((c) => c.id !== countesId);
    this.setState({ counts });
  };

  handleReset = () =>{
    const resetCounts = this.state.counts.map(c => {
        c.value = 0;
        return c
    })
    this.setState({resetCounts})
  }

  handleIncrement = counting =>{
    let counts = [...this.state.counts];
    const index = counts.indexOf(counting)
    counts[index] = {...counting};
    counts[index].value++;
    this.setState({counts})
  }
  handleDecrement = counting =>{
    let counts = [...this.state.counts];
    const index = counts.indexOf(counting)
    counts[index] = {...counting};
    counts[index].value--;
    this.setState({counts})
  }
  render() { 
    return (
      <React.Fragment>
        <NavBar 
          totalCounters = {this.state.counts.filter(c => c.value > 0 ).length} 
         
        />
        <div className='container mainContainer d-flex justify-content-between'>

          <div className="col-sm-9">
            <CounterData
              totalCounters = {this.state.counts.filter(c => c.value > 0 ).length}
              counts = {this.state.counts}
              onReset={this.handleReset} 
              onIncrement={this.handleIncrement} 
              onDecrement={this.handleDecrement} 
              onDelete={this.handleDelete} />
          </div>
          <div className="col-sm-3">

            <SideMenu />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;