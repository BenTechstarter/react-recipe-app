import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/recipes/${id}`)
      .then(response => {
        setRecipe(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the recipe', error);
        setError('Error fetching the recipe');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!recipe) {
    return <p>No recipe found</p>;
  }

  return (
    <div>
      <h1 className="text-2xl">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-48 h-auto my-4" />
      <h2 className="text-xl">Ingredients:</h2>
      <ul className="list-disc list-inside">
        {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl mt-4">Instructions:</h2>
      <ol className="list-decimal list-inside">
        {recipe.instructions && recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
