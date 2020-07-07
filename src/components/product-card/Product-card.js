import React, { useState } from "react";
import { Link } from "@reach/router";
import { Card } from "antd";
import Title from "./product-card-properties/card-title";
import "antd/dist/antd.css";
import "./product-card.scss";
import { HeartOutlined } from "@ant-design/icons";

function ProductCard(props) {
  const [saved, setSaved] = useState("rgb(190, 190, 190)");
  const { Meta } = Card;

  const addToWishList = () => {
    console.log("wishlist");
  };

  return (
    <div className="products-categories-container-item wow fadeInUp">
      <Link to={`/product/${props.id}`}>
        <Card className="product-card-style" hoverable style={{ width: 280 }}>
          <div className="product-card-image-container">
            <div className="wishlist-icon-heart-card" style={{ color: saved }}>
              <HeartOutlined onClick={addToWishList} />
            </div>
            <img alt="example" src={props.image} />
          </div>
          <Meta
            className="cardBodyStyle"
            description={<Title price={props.price} nameTitle={props.name} />}
          />
        </Card>
      </Link>
    </div>
  );
}

export default ProductCard;
