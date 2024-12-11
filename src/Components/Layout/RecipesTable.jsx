import React from "react";

const RecipesTable = ({
  recipes = [],
  onPreparation,
  isAction = false,
  ...props
}) => {
  console.log("WantedRecipes, ", recipes);

  return (
    <React.Fragment>
      <div className="overflow-x-auto w-full">
        <table className="table-md w-full  table-zebra">
          {/* head */}
          <thead>
            <tr className="text-left">
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              {isAction ? <th></th> : ""}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {recipes &&
              recipes.map((recipe, idx) => {
                console.log("Table recipes ", recipe);
                return (
                  <tr key={`wanted-recipe-${idx}`}>
                    <td>{recipe?.name}</td>
                    <td>{recipe?.preparingTime}</td>
                    <td>{recipe?.calories}</td>
                    {isAction ? (
                      <th>
                        <button
                          onClick={() => {
                            onPreparation(recipe);
                          }}
                          className="bg-emerald-400 rounded-3xl px-5 py-2 hover:bg-transparent border  hover:border-emerald-500"
                        >
                          Preparing
                        </button>
                      </th>
                    ) : (
                      ""
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default RecipesTable;
