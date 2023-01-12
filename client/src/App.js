import "./App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";

function App() {
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [cityData, setCityData] = useState([]);

  function selectCity(e) {
    setErrorMsg(false);
    setCity((prevCity) => (prevCity = e.target.value.toLowerCase()));
  }
  function selectCategory(e) {
    if (city) {
      setErrorMsg(false);
      setCategory((prevCategory) => (prevCategory = e.target.value.toLowerCase()));
    } else {
      setErrorMsg(true);
      new Error(`select city first`);
    }
  }

  useEffect(() => {
    city &&
      category &&
      fetch(`/localhost:3003/${city}/${category}`)
        .then((res) => res.json())
        .then((data) => setCityData(data));
  }, [city, category]);

  console.log(cityData);
  return (
    <div>
      <h1 className="title">Hello & Welcome</h1>
      <nav>
        <select
          type="select"
          name="cities"
          className="city-selector"
          onChange={selectCity}
        >
          <option value=""> Select City</option>
          <option value="stratford"> Stratford</option>
          <option value="harrow"> Harrow</option>
          <option value="heathrow"> Heathrow</option>
        </select>
        <section className="category">
          <Button
            className="button"
            value="pharmacies"
            onClick={selectCategory}
            color={category === "pharmacies" ? "primary" : "secondary"}
          >
            Pharmacies
          </Button>
          <Button
            className="button"
            value="colleges"
            onClick={selectCategory}
            color={category === "colleges" ? "primary" : "secondary"}
          >
            Colleges
          </Button>
          <Button
            className="button"
            value="doctors"
            onClick={selectCategory}
            color={category === "doctors" ? "primary" : "secondary"}
          >
            Doctors
          </Button>
          <Button
            value="hospitals"
            onClick={selectCategory}
            color={category === "hospitals" ? "primary" : "secondary"}
          >
            Hospitals
          </Button>
        </section>
      </nav>
      {errorMsg && <h2>*You should select a city first !!*</h2>}

      {category && (
        <table className="table" border={`1px solid black`}>
          <thead>
            <tr className="table-labels">
              <th>Name</th>
              <th>Website</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {cityData &&
              cityData.length > 0 &&
              cityData.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.website}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
