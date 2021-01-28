import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <SearchForm />
      </Wrapper>
    </div>
  );
}

export default App;
