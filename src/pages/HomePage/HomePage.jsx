import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner/Spinner";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <Header />
    </div>
  );
};

export default HomePage;
