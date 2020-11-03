import { useEffect, useState } from 'react';
import axios from 'axios';

export const useRecipe = (ingredient) => {

  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    axios.get(`http://www.recipepuppy.com/api/?i=${ingredient}`)
      .then(recipes => setRecipes(recipes.data.results))
      .catch(err => {
        console.log(err);
        return setRecipes('null');
      });
  }, [ingredient]);

  return (
    recipes
  );
};

export default useRecipe;