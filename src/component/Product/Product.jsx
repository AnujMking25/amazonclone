import React from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <div className="grid grid-cols-3 xl:grid-cols-4 -mt-60">
      <ProductCard
        title={"we have a surpise for you "}
        imageUrl={"../images/home_grid_1.jpg"}
        link={"See terms and condition"}
      />
      <ProductCard
        title={"Watch The Rings of Power "}
        imageUrl={"../images/home_grid_2.jpg"}
        link={"Start Streaming now"}
      />
      <ProductCard
        title={"Unlimited Streaming "}
        imageUrl={"../images/home_grid_3.jpg"}
        link={"Find out more"}
      />
      <ProductCard
        title={"More Title to explore "}
        imageUrl={"../images/home_grid_4.jpg"}
        link={"Browse kindle Unlimited"}
      />
      <ProductCard
        title={"Shop Pet Supplies "}
        imageUrl={"../images/home_grid_5.jpg"}
        link={"See more"}
      />
      <ProductCard
        title={"Spring Sale"}
        imageUrl={"../images/home_grid_6.jpg"}
        link={"See terms and condition"}
      />
      <ProductCard
        title={"Echo Buds"}
        imageUrl={"../images/home_grid_7.jpg"}
        link={"See more"}
      />
      <ProductCard
        title={"Family Plan: 3 month free"}
        imageUrl={"../images/home_grid_8.jpg"}
        link={"Learn more"}
      />
      <div className="m-3 pt-10">
      <img
        className="xl:hidden"
        src={"../images/banner_image_2.jpg"}
        alt="banner.jpg"
      />
      </div>
    </div>
  );
};

export default Product;
