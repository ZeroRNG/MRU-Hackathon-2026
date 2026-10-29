import { useState } from "react";

export default function IngredientInput() {
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState([]);

  function addIngredient(event) {
    event.preventDefault();

    const ingredient = input.trim().toLowerCase();

    // Ignore empty inputs.
    if (!ingredient) return;

    // Only add ingredients that aren't already listed.
    if (!ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
    }

    setInput("");
  }

  function removeIngredient(ingredientToRemove) {
    setIngredients(
      ingredients.filter((ingredient) => ingredient !== ingredientToRemove)
    );
  }

  return (
    <section>
      <h2>What's in your fridge?</h2>

      <form onSubmit={addIngredient}>
        <label htmlFor="ingredient">Ingredient</label>

        <input
          id="ingredient"
          type="text"
          placeholder="e.g. rice"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>
            {ingredient}{" "}
            <button
              type="button"
              onClick={() => removeIngredient(ingredient)}
              aria-label={`Remove ${ingredient}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}