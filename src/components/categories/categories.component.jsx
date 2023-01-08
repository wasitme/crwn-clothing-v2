import "./categories.styles.scss";
import CategoryItem from "../category-item/category-item.component";

import React from "react";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {!!categories &&
        categories.map((category) => {
          return <CategoryItem category={category} key={category.id} />;
        })}
    </div>
  );
};

export default Categories;
