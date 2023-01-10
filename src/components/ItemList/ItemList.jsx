import React from 'react';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Item from '../Item/Item';

function ItemList(props) {
  return (
    <FlexWrapper>
      {props.products.map( (item) => (
        <Item 
          key={item.title}
          title={item.title} 
          price={item.price} 
          detail={item.detail} 
          imgurl={item.imgurl} 
        /> 
      ))}
    </FlexWrapper>
  );
}

export default ItemList;