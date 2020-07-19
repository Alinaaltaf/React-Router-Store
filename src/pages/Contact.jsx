import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';


class Contact extends Component {
  render() {
    const shoe = {
        "obsern-sneaker":{
          name:"Obsern Sneaker",
          img:"https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw68af2d70/images/2.1/mens-shoes/osborn-2346-bone-profile-web.jpg?sw=2000&sh=2000&sm=fit",
        }
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

export default Contact
