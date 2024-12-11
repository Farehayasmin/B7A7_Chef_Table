import React from "react";

const RecipeItem = ({ recipe = {}, onWantedRecipe, ...props }) => {
  console.log("Recipe ", recipe);

  const {
    calories,
    name,
    ingredients,
    preparingTime,
    shortDescription,
    image,
  } = recipe;
  return (
    <React.Fragment>
      <div className="card w-full bg-base-100 shadow-xl box-border">
        <figure className="px-3 pt-10">
          <img src={`/images/${image}`} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center gap-3">
          <h2 className="card-title font-bold">{name}</h2>
          <p className="text-left text-gray-500">{shortDescription}</p>
          <div className="">
            <h3 className="text-left font-semibold text-lg">
              Ingredients: {Array.isArray(ingredients) ? ingredients.length : 0}
            </h3>
            <ul className="flex flex-col justify-center gap-1 list-disc text-left text-gray-500 my-4 pl-5">
              {ingredients &&
                ingredients.map((ingredient, idx) => {
                  return <li key={`ingredient-${idx}`}>{ingredient}</li>;
                })}
            </ul>
          </div>
          <div className="w-full flex flex-row justify-between items-center text-xl ">
            <div className="w-1/2 text-left">
              <span
                className="w-9 h-9 pl-7"
                style={{
                  backgroundImage: `url('./images/icons/clock.png')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "left",
                  backgroundPositionY: "center",
                }}
              ></span>
              <span>{preparingTime} minutes</span>
            </div>

            <div className="w-1/2 text-right">
              <span
                className="w-9 h-9 pl-7"
                style={{
                  backgroundImage: `url('./images/icons/fire.png')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "left",
                  backgroundPositionY: "center",
                }}
              ></span>
              <span>{calories} calories</span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-10 justify-start text-xl font-semibold self-start mt-5">
            <button
              onClick={() => {
                onWantedRecipe(recipe);
              }}
              className="bg-emerald-400 rounded-3xl px-5 py-3 hover:bg-transparent border  hover:border-emerald-500"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecipeItem;
