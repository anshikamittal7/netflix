import React from "react";
// import image from "../Components/poster.jpg";
import movie from "../Components/movie.webp";

const Card = ({ img }) => <img src={img} alt="cover" className="card" />;

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item) => {
        <Card img={item.img} />;
      })}
    </div>
  </div>
);

const Home = () => {
  return (
    <section className="home">
      <div className="banner" />
      <div />
      <div>
        <Row title={"TV Shows"} />
        <Row title={"Movie"} />
        <Row title={"New & Popular"} />
        <Row title={"My List"} />
      </div>
    </section>
  );
};

export default Home;
