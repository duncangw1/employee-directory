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
  const [userSearch, setUserSearch] = useState("");

  useEffect(() => {
    API.randomUsers().then((res) => {
      setUsers(res.data.results);
    });
  }, []);

  const handleInputChange = (event) => {
    const { value } = event.target;
    console.log("value: ", value);
    setUserSearch(value);
    console.log("userSearch: ", userSearch);

    for (let i = 0; i < users.length; i++) {
      const userName = users[i].name.first.toLowerCase();
      console.log("userName: ", userName);
      const startingFilter = userName.startsWith(value);
      console.log("startingFilter: ", startingFilter);
      if (startingFilter === false) {
        const userToHide = users[i];
        console.log("user to hide: ", userToHide);
        document.getElementById(userName).style.display = "none";
      } else {
        document.getElementById(userName).style.display = "";
      }
      if (value === "") {
        document.getElementById(userName).style.display = "";
      }
    }
  };

  function formatDob(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  return (
    <div className="App">
      <Wrapper>
        <Header />
        <SearchForm
          value={userSearch}
          onChange={handleInputChange}
          placeholder="Search Employee..."
          name="employee"
        />
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
