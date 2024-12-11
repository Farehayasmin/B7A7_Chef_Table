import React from "react";
import Header from "./Layout/Header";
import RecipeList from "./Layout/RecipeList";

const Layout = ({ ...props }) => {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <section>
        <div className="container mx-auto xs:px-2 sm:px-2 md:px-0 box-border mt-10">
          <div className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-4xl sm:text-2xl xs:text-xl md:text-4xl font-bold">
              Our Recipes
            </h1>
            <p className="font-n text-gray-500">
              Come join me in my culinary adventures where we'll be using
              simple, fresh ingredients and transforming them into sophisticated
              and elegant meals for the everyday home cook.
            </p>
          </div>
          <RecipeList />
        </div>
      </section>
      <footer>
        <div className="container mx-auto"></div>
      </footer>
    </React.Fragment>
  );
};

export default Layout;
