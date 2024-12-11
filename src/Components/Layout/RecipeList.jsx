import React, { useEffect, useState } from "react";
import RecipeItem from "./RecipeItem";
import { Bounce, ToastContainer, toast } from "react-toastify";

import RecipesTable from "./RecipesTable";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  const [wantedRecipes, setWantedRecipes] = useState([]);
  const [cookingItems, setCookingItems] = useState([]);

  const [totalCalories, setTotalCalories] = useState(0);
  const [totalPreparingTime, setTotalPreparingTime] = useState(0);

  const onNotify = (title) => {
    return toast(title, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const onWantedRecipeAction = (recipe) => {
    const items = [];
    if (Array.isArray(wantedRecipes)) {
      if (wantedRecipes.length > 0) {
        let isExist = false;

        wantedRecipes.forEach((item) => {
          items.push(item);
          if (item.recipe_id === recipe.recipe_id) {
            isExist = true;
          }
        });

        if (!isExist) {
          items.push(recipe);
        } else {
          onNotify(recipe.name);
        }
      } else {
        items.push(recipe);
      }
    } else {
      items.push(recipe);
    }
    setWantedRecipes(items);
  };

  const onSetCookingAction = (recipe) => {
    const cookItems = cookingItems;
    cookItems.push(recipe);

    const items = [];
    if (Array.isArray(wantedRecipes)) {
      wantedRecipes.forEach((item) => {
        if (item.recipe_id !== recipe.recipe_id) {
          items.push(item);
        }
      });
    }

    if (cookItems != null) {
      let tTime = 0,
        tCalories = 0;
      cookItems.forEach((item) => {
        tTime += item.preparingTime;
        tCalories += item.calories;
      });

      setTotalCalories(tCalories);
      setTotalPreparingTime(tTime);
    }

    setCookingItems(cookItems);
    setWantedRecipes(items);
  };

  const getAllRecipe = () => {
    try {
      fetch("/assets/recipes.json").then(async (res) => {
        if (res) {
          const data = await res.json();

          setRecipes(data.recipes);
        }
      });
    } catch (error) {
      console.log("Geting Recipe Erro, ", error);
    }
  };

  useEffect(() => {
    getAllRecipe();
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="grid grid-cols-12 gap-6 mb-16">
        {/* Recipe Items Start*/}

        <div className="sm:col-span-12 xs:col-span-12 md:col-span-7 col-span-7 xs:order-last sm:order-last md:xs:order-first lg:order-first order-first">
          <div
            className={`w-full grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6 box-border`}
          >
            {recipes &&
              recipes.map((recipe, idx) => {
                return (
                  <div className="w-full box-border" key={`recipe-${idx}`}>
                    <RecipeItem
                      recipe={recipe}
                      onWantedRecipe={onWantedRecipeAction}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        {/* Recipe Items End*/}
        {/* Recipe Make Or Preparation Start (Action) */}
        <div className="sm:col-span-12 xs:col-span-12 md:col-span-5 col-span-5">
          <div className="flex flex-col justify-center items-center">
            {/* Wanted Recipes Start */}
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="border-b sm:text-lg xs:text-base md:text-xl text-xl font-semibold py-3">
                  Want to cook: {wantedRecipes.length}
                </h3>

                <div className="card-actions justify-end">
                  <div className="w-full">
                    <RecipesTable
                      recipes={wantedRecipes}
                      onPreparation={onSetCookingAction}
                      isAction={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Wanted Recipes End */}

            {/* Cooking Recipes Start */}
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="border-b text-xl font-semibold py-3">
                  Currently cooking: {cookingItems?.length}
                </h3>
                <div className="card-actions justify-end">
                  <div className="w-full">
                    <RecipesTable recipes={cookingItems} isAction={false} />
                  </div>
                  <div className="w-full flex flex-row justify-between items-center sm:text-base xs:text-sm md:text-lg text-lg font-semibold">
                    <div className="w-1/2 flex flex-row justify-between items-center px-5">
                      <span>Total Time</span>
                      <span>{totalPreparingTime}&nbsp;minutes</span>
                    </div>
                    <div className="w-1/2 flex flex-row justify-between items-center px-5">
                      <span>Total Calories</span>
                      <span>{totalCalories}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Cooking Recipes Start */}
          </div>

          {/* Wanted Recipes end */}
        </div>
        {/* Recipe Make Or Preparation Start (Action) */}
      </div>
    </React.Fragment>
  );
};

export default RecipeList;
