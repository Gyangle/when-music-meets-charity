import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <LyricsDiaplay />
      <RecDisplay />
    </div>
  );
}

const Header = () => {
  return <p>Search Bar</p>;
};

const LyricsDiaplay = () => {
  return <p>Display Lyrics</p>;
};

const RecDisplay = () => {
  const [mes, setMes] = useState("");

  useEffect(() => {
    fetchBackend();
  }, []);

  const fetchBackend = async () => {
    await axios.get("/api").then((res) => setMes(res.data["Hello"]));
  };

  return (
    <>
      <p>Display Recommendation</p>
      <p>This is a message from FastAPI: {mes}</p>
    </>
  );
};
