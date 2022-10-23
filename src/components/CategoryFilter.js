import React from "react";

function CategoryFilter({ categories, handleCatagory, selectedCatagory }) {



  return (
    <div className="categories">
      <h5>Category filters</h5>

      {
        categories.map((category) => {

          return (
            <button className={selectedCatagory === category ? 'selected' : " "} key={category} onClick={() => handleCatagory(category)}>{category}</button>
          )
        }
        )
      }

    </div>
  );
}

export default CategoryFilter;