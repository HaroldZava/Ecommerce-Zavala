import React, { useState, useEffect } from 'react';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Item from "../Item/Item";
import getItems from "../../services/mockAsyncService";
import itemList from "../ItemList/ItemList";

function ItemListContainer() {
  const [product, setProduct]  = useState([]);

  console.log("Renderizamos el componente...");

  useEffect( () => {
    getItems().then((respuesta) => {
      console.log(respuesta)
      setProduct(respuesta)
    });
   }, [] )
  
  return (
  <>
    <itemList product={product} />
  </>
  );  
}

export default ItemListContainer;