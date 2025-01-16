const IngredientList = ({
  ingredients,
  handleShowRecipe,
}: {
  ingredients: string[];
  handleShowRecipe: () => void;
}) => {
  return (
    <>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredients.map((ingredient) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
      {ingredients?.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={handleShowRecipe} className="get-recipe-btn">
            Get a recipe
          </button>
        </div>
      )}
    </>
  );
};

export default IngredientList;
