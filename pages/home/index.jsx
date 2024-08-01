import React, { useEffect, useState } from "react";
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
    <div className="container2">
      <Navbar />

      <h1>Welcome to the Home Page!</h1>
      <p>Explore our website.</p>
      <div className="main2">
        <main className="main3">
          {store.map((data) => (
            <div key={data.id} className="card1">
              <img src={data.imageUrl} alt={data.name} />
              <div className="card_content">
                <h2 className="card_title">{data.name}</h2>
                <p className="card_detail">Price: {data.price}</p>
                <p className="card_detail">Waiting Time: {data.waitingTime}</p>

                <div className="showMore">
                  <Link href={`home/${data.slug}`}>
                    <button className="btn">More Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
      <Footer />
      <style jsx>
        {`
          .container2 {
            text-align: center;
          }

          .main2 {
            width: 100%;
            background: black;
            display: flex;
            justify-content: center;
            color: whitesmoke;
            font-size: 15px;
            padding: 20px;
          }
          .main3 {
            display: flex;
            justify-content: center;
            width: 100%;
            max-width: 800px;
            flex-wrap: wrap;
            gap: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
          }

          .card1 {
            width: 100%;
            max-width: 300px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s, box-shadow 0.3s;
            position: relative;
          }

          .card1:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }

          .card1 img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }

          .card_content {
            padding: 15px;
          }

          .card_title {
            font-size: 1.2rem;
            margin-bottom: 10px;
          }

          .card_detail {
            font-size: 1rem;
            color: #555;
            margin-bottom: 5px;
          }

          .more_info {
            display: none;
            margin-top: 10px;
          }

          .show_more {
            display: flex;
            justify-content: center;
            margin: 10px 0;
          }

          .show_more button {
            padding: 10px 20px;
            font-size: 1rem;
            color: #fff;
            background-color: #0070f3;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .btn {
            color: white;
            background: transparent;
            border-radius: 10px;
            padding: 4px;
            cursor: pointer;
            border: 2px solid white;
          }
          .show_more button:hover {
            background-color: #005bb5;
          }

          @media (max-width: 768px) {
            .main {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
