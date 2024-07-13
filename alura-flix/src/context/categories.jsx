import React, { createContext, useState, useEffect } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Carolina0709/alura-flix/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      });
  }, []);

  return (
    <CategoryContext.Provider value={categories}>
      {children}
    </CategoryContext.Provider>
  );
};
