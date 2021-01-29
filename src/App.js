import React, { useEffect, useState } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import TableHeader from "./components/TableHeader";
import TableCard from "./components/TableCard";
import API from "./utils/API";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  console.log("users: ", users);

  useEffect(() => {
    API.randomUsers().then((res) => {
      setUsers(res.data.results);
    });
  }, []);

  function formatDob(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    console.log("Formatted: ", formattedDate);
    return formattedDate;
  }

  return (
    <div className="App">
      <Wrapper>
        <Header />
        <SearchForm />
        <div className="container">
          <table className="table mt-4 table-hover">
            <TableHeader />
            {users.map((user) => {
              return (
                <TableCard
                  key={user.id.value}
                  image={user.picture.thumbnail}
                  firstName={user.name.first}
                  lastName={user.name.last}
                  phone={user.phone}
                  email={user.email}
                  dob={formatDob(user.dob.date)}
                />
              );
            })}
          </table>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
