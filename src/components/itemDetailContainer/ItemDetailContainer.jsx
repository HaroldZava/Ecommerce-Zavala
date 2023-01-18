import React, { useState, useEffect } from "react";
import "./itemdetail.css";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/mockAsyncService";

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    let { itemid } = useParams();
    console.log(itemid);

    useEffect(() => {
        // 2. Pasamos por parametro al mockService el id
        getSingleItem(itemid)
          .then((respuesta) => {
            setProduct(respuesta);
          })
          .catch((error) => alert(`Error: ${error}`));
    }, []);

return (
    <div className="card-detail_main">
        <div className="card-detail_img">
            <img src={product.imgurl} alt={product.title} />
        </div>
        <div className="card-detail_detail">
            <h1>{product.title}</h1>
            <h2 className="priceTag">$ {product.price}</h2>
            <small>{product.detail}</small>
        </div>
    </div>
);

}

export default ItemDetailContainer;
