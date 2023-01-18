import React, { useState, useEffect } from 'react';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Item from "../Item/Item";
import getItems from "../../services/mockAsyncService";
import itemList from "../ItemList/ItemList";

function ItemListContainer() {
  const [product, setProduct]  = useState([]);



  let idcategory = "arnes";

  useEffect(() => {
    if (idcategory) {
      getItemsByCategory(idcategory).then((respuesta) => {
        console.log(respuesta);
        setProduct(respuesta);
      });
    } else {
      getItems().then((respuesta) => {
        console.log(respuesta);
        setProduct(respuesta);
      });
    }
  }, []);

  return (
    <>
      <itemList product={product} />
    </>
  );
}

export default ItemListContainer;