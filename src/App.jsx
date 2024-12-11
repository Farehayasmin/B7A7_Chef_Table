import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Layout from "./Components/Layout";
// import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ ...props }) => {
  return (
    <React.Fragment>
      <Layout />
    </React.Fragment>
  );
};

export default App;
