import React, { Component } from 'react';
import { useParams } from 'react-router';

class ProductDetails extends Component {
  render() {
    const shoe = {
      "dalton-shell":{
        name:"Dalton Shell Cordovan Dress Boots",
        img:"https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw8116ebe3/images/2.1/mens-shoes/dalton-0181-burgundy-angle-web.jpg?sw=736&sh=736&sm=fit",
      },
      "park-avenue":{
        name:"Park Avenue Shell Cordovan",
        img:"https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw1e9ec1eb/images/2.1/mens-shoes/parkave-5805-black-pair-web.jpg?sw=2000&sh=2000&sm=fit",
      },
      "obsern-sneaker":{
        name:"Obsern Sneaker",
        img:"https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw68af2d70/images/2.1/mens-shoes/osborn-2346-bone-profile-web.jpg?sw=2000&sh=2000&sm=fit",
      }
    }
    const { productID } = useParams();
    const product = shoe[productID];
    const {name, img} = product;
    console.log(this.productID)
    return (
      <div>
       
        <div className="container">
          <h2>{name}</h2>
          <img src={img} alt={img}/>
        </div>
        
      </div>
    );
  }
}

export default ProductDetails
