import Navbar from "./Navbar";
import MainContent from "./MainContent";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6969/api/kota")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* <Navbar />
      <MainContent /> */}

      {Array.isArray(data) &&
        data.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
          </div>
        ))}
    </>
  );
}

export default Home;
