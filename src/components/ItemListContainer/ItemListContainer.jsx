import React, { useState, useEffect } from 'react';

import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Item from "../Item/Item";
import getItems from "../../services/mockAsyncService";

import products from "../../data/_products";

function ItemListContainer() {
  const [product, setProduct]  = useState([]);

  console.log("Renderizamos el componente...");

  getItems().then((respuesta) => {
    console.log(respuesta)
    setProduct(respuesta)
  });
  return (
  <>
    <FlexWrapper>
      {products.map( (item) => (
        <Item 
          key={item.title}
          title={item.title} 
          price={item.price} 
          detail={item.detail} 
          imgurl={item.imgurl} 
        /> 
      ))}
    </FlexWrapper>
  </>
  );
}

export default ItemListContainer;