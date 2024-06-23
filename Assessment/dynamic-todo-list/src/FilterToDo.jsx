import React from "react";

const FilterToDo = ({ onFilterChange }) => {
  const handleFilterClick = (newFilter) => {
    onFilterChange(newFilter);
  };

  return (
    <div>
      Filter: {" "}
      <button
        style={{ marginRight: "16px" }}
        onClick={() => handleFilterClick("all")}
      >
        All
      </button>
      <button
        style={{ marginRight: "16px" }}
        onClick={() => handleFilterClick("completed")}
      >
        Completed
      </button>
      <button
        style={{ marginRight: "16px" }}
        onClick={() => handleFilterClick("pending")}
      >
        Pending
      </button>
    </div>
  );
};

export default FilterToDo;
