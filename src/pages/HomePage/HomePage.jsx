import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner/Spinner";
import image from "../../images/bus1.png";
import styles from "../../App.css";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  // A loader will show till the page completely loads
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <Header />
      <div style={{ textAlign: "center" }}>
        <img className="busimage" src={image} alt="img" />
      </div>
    </div>
  );
};

export default HomePage;
