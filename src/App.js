import React, { useEffect, useState } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import TableHeader from "./components/TableHeader";
import API from "./utils/API";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.randomUsers().then((res) => {
      console.log(res.data.results);
      setUsers(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      <Wrapper>
        <Header />
        <SearchForm />
        <table className="table mt-4">
          <TableHeader />
        </table>
      </Wrapper>
    </div>
  );
}

export default App;
