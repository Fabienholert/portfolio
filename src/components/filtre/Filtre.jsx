import React, { useEffect, useState } from "react";
import projetsFiltres from "../../assets/json/projets.json";

const CategoryFilter = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [categories, setCategories] = useState(["all"]);

  useEffect(() => {
    const uniqueCategories = [
      "all",
      ...new Set(projetsFiltres.map((projet) => projet.categorie)),
    ];
    setCategories(uniqueCategories);
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <div className="filtre-container">
      <div className="filtre-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`filtre-button ${
              activeCategory === category ? "active" : ""
            }`}
          >
            {category === "all" ? "Tout" : category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
