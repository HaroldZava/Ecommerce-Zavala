import React from 'react'

import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Item from "../Item/Item";

function ItemListContainer() {
  const productoA = {
    title: "Collar",
    price: 450,
    detail: "El mejor collar para tu perrito",
    imgurl: "/Assets/img/collar.png"
  }

  return (
  <>
    <FlexWrapper>
        <Item 
            title={productoA.title}
            price={productoA.price} 
            detail={productoA.detail}
            imgurl={productoA.imgurl}
        />
        <Item 
            title="Pechera" 
            precio={800} 
            detail="La mejor pechera para tu perrito" 
            imgurl="/Assets/img/pechera.png"
        />
        <Item 
            title="Arnes" 
            precio={400} 
            detail="El mejor arnes para tu perrito" 
            imgurl="/Assets/img/arnes.png"
        />
    </FlexWrapper>
  </>
  );
}

export default ItemListContainer