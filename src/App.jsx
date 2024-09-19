import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const API_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        console.log("fetched from local");
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        return;
      }

      localStorage.clear();

      try {
        const response = await fetch(url);
        const apiData = await response.json();
        console.log("fetched from api");
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log(`Data -> ${apiData}`);
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loading-state">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
