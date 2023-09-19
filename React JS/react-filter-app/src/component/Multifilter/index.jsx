import React, { useEffect, useState } from "react";
import "./Multifilter.css";
import items from "../../Records.json";
const Multifilter = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  let filters = ["bag", "watch", "sports"];

  // [bag]
  const handleFilterButtonClick = (selectedCategory) => {
    console.log(selectedCategory);
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((ele) => ele !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedFilter) => {
        let temp = items.filter((item) => item.category === selectedFilter);
        return temp;
      });
      console.log("BEFORE", tempItems);
      console.log("AFTER", tempItems.flat());
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems(items);
    }
  };

  return (
    <div className="Multifilter">
      <h1>Filtering</h1>
      <div className="buttons-container">
        {filters.map((category, id) => (
          <>
            {console.log("ID-CATEGOREY", id, category)}
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`button ${
                selectedFilters?.includes(category) ? "active" : ""
              }`}
              key={id}
            >
              {category}
            </button>
          </>
        ))}
      </div>
      <div className="items-container">
        {filteredItems.map((item) => {
          return (
            <div className="item">
              <p>{item.name}</p>
              <p>{item.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Multifilter;
