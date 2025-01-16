import { useState } from "react";
import IngredientList from "./IngredientsList";

const Main = () => {
  const [ingredients, setIngredients] = useState<string[] | null>([]);
  const [recipe, setRecipe] = useState<boolean>(false);

  const addIngredient = (formData: FormData) => {
    const newIngredient = formData.get("ingredient");
    if (newIngredient) {
      setIngredients((prevState) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return [...(prevState as any), newIngredient];
      });
    }
  };

  const showRecipe = () => {
    setRecipe((prevState) => !prevState);
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

          {ingredients?.length ? (
            <IngredientList
              ingredients={ingredients}
              handleShowRecipe={showRecipe}
            />
          ) : null}

          {recipe && <div>Recipe goes here</div>}
        </section>
      </main>
    </>
  );
};

export default Main;
