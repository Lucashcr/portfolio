import { useEffect, useState } from "react";

// import HeaderBar from "./components/HeaderBar/HeaderBar";
import Presentation from "./components/Presentation/Presentation.jsx";
import Repositories from "./components/Repositories/Repositories.jsx";
import MainProject from "./components/MainProject/MainProject.jsx";

import logo from "../assets/logo.png";

import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/Lucashcr")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    data && (
      <>
        {/* <HeaderBar name={data.name} /> */}
        <img src={logo} id="logo" />
        <Presentation
          avatar_url={data.avatar_url}
          location={data.location}
          name={data.name}
          bio={data.bio}
          created_at={data.created_at}
          html_url={data.html_url}
        />
        <MainProject />
        <Repositories repos_url={data.repos_url} />
      </>
    )
  );
}

export default App;
