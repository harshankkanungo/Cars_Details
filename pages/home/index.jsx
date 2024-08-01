import React, { useEffect, useState } from "react";

import styles from "/Users/indianic/Desktop/LearnNEXT/car_details/styles/Home.module.css";
import Footer from "../Footer";
import Link from "next/link";
import Navbar from "../Navbar";

const Home = () => {
  const [store, setStore] = useState([]);
  const [showMore, setShowMore] = useState(null);

  useEffect(() => {
    console.log("run");
    fetch("http://localhost:3000/api/carblog")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setStore(data);
      });
  }, []);

  const handleShowMore = (id) => {
    setShowMore((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className={styles.container}>
      <Navbar />

      <h1>Welcome to the Home Page!</h1>
      <p>Explore our website.</p>
      <div className={styles.main1}>
        <main className={styles.main}>
          {store.map((data) => (
            <div key={data.id} className={styles.card}>
              <img src={data.imageUrl} alt={data.name} />
              <div className={styles.card_content}>
                <h2 className={styles.card_title}>{data.name}</h2>
                <p className={styles.card_detail}>Price: {data.price}</p>
                <p className={styles.card_detail}>
                  Waiting Time: {data.waitingTime}
                </p>
              
                <div className={styles.showMore}>
                  <Link href={`home/${data.slug}`}>
                    <button className={styles.btn}>More Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
