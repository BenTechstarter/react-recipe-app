import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

const Main = () => {
  return (
    <main className="p-4">
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </main>
  );
};

export default Main;
