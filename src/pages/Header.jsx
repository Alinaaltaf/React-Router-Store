import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';


class Header extends Component {
  render() {
    const shoe = {
        "park-avenue":{
          name:"Park Avenue Shell Cordovan",
          img:"https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw1e9ec1eb/images/2.1/mens-shoes/parkave-5805-black-pair-web.jpg?sw=2000&sh=2000&sm=fit",
        },
      }
    return (
      <div>
       
        <div className="container">
          <ul>
            {Object.entries(shoe).map(([productID, {name, img}])=>(
              <li key={productID}>
              <Link to={productID}>
              <h2>{name}</h2>
              <img src={img} alt={name}/>
              </Link>
               </li>
               
            ))}
          </ul>
        </div>
       
      </div>
    );
  }
}

export default Header
