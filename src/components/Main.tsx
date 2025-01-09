import { useState } from "react";

export const Main = () => {
  const [ingredients, setIngredients] = useState<string[] | null>([]);

  const ingredientList = ingredients?.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  const addIngredient = (formData: FormData) => {
    const newIngredient = formData.get("ingredient");
    if (newIngredient) {
      setIngredients((prevState) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return [...(prevState as any), newIngredient];
      });
    }
  };

  return (
    <>
      <main>
        <section>
          {/* react 19 update // submission form */}
          <form action={addIngredient} className="form">
            <div className="container-input">
              <label htmlFor="ingredient">Enter an ingredient:</label>

              <input
                type="text"
                id="ingredient"
                name="ingredient"
                placeholder="e.g. oregano"
              />
            </div>

            <button className="submit-btn">+ add ingredient</button>
          </form>

          {ingredients?.length && (
            <>
              <h2>Ingredients on hand:</h2>
              <ul className="ingredients-list" aria-live="polite">
                {ingredientList}
              </ul>
              {ingredients?.length > 3 && (
                <div className="get-recipe-container">
                  <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                  </div>
                  <button className="get-recipe-btn">Get a recipe</button>
                </div>
              )}
            </>
          )}
        </section>
      </main>
    </>
  );
};
