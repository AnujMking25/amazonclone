import React from "react";
import HomeProductCard from "./HomeProductCard";

const HomeProduct = () => {
  return (
    <div className="grid grid-cols-3 xl:grid-cols-4 -mt-60">
      <HomeProductCard
        title={"we have a surpise for you "}
        imageUrl={"../images/home_grid_1.jpg"}
        link={"See terms and condition"}
      />
      <HomeProductCard
        title={"Watch The Rings of Power "}
        imageUrl={"../images/home_grid_2.jpg"}
        link={"Start Streaming now"}
      />
      <HomeProductCard
        title={"Unlimited Streaming "}
        imageUrl={"../images/home_grid_3.jpg"}
        link={"Find out more"}
      />
      <HomeProductCard
        title={"More Title to explore "}
        imageUrl={"../images/home_grid_4.jpg"}
        link={"Browse kindle Unlimited"}
      />
      <HomeProductCard
        title={"Shop Pet Supplies "}
        imageUrl={"../images/home_grid_5.jpg"}
        link={"See more"}
      />
      <HomeProductCard
        title={"Spring Sale"}
        imageUrl={"../images/home_grid_6.jpg"}
        link={"See terms and condition"}
      />
      <HomeProductCard
        title={"Echo Buds"}
        imageUrl={"../images/home_grid_7.jpg"}
        link={"See more"}
      />
      <HomeProductCard
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

export default HomeProduct;
