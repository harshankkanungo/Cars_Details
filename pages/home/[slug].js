import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import confetti from "canvas-confetti";

const Slug = () => {
  const Router = useRouter();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!Router.isReady) return;
    const id = Router.query.slug;
    console.log("run");
    fetch(`http://localhost:3000/api/getcardata?slug=${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBlog(data);
      });

    // Trigger confetti animation when component mounts
    const triggerConfetti = () => {
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
      });
    };

    triggerConfetti();
  }, [Router.isReady]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="container1">
      <div className="content">
        <img src={blog.imageUrl} alt={blog.name} className="image" />
        <div className="details">
          <h1 className="title">{blog.name}</h1>
          <p className="detail">Price: {blog.price}</p>
          <p className="detail">Waiting Time: {blog.waitingTime}</p>
        </div>
        <div className="navigation">
          <button className="button" onClick={() => Router.push("/home")}>
            Go Home
          </button>
          <button className="button" onClick={() => Router.push("/")}>
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slug;
