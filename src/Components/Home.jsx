import React from "react";
import { HiPlay } from "react-icons/hi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";

const api = "a84076cc673f73b23f5c26c390396ee3";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const topRated = "top_rated";
const nowPlaying = "now_playing";
const popular = "popular";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => {
          return <Card key={index} img={`${imgUrl}${item.poster_path}`} />;
        })}
      </div>
    </div>
  );
};
const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const upcomingData = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${api}`);
      setUpcomingMovies(results);
    };
    const topRatedData = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${api}`);
      setTopRatedMovies(results);
    };
    const nowPlayingData = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${api}`);
      setNowPlayingMovies(results);
    };
    const popularData = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${api}`);
      setPopularMovies(results);
    };
    upcomingData();
    topRatedData();
    nowPlayingData();
    popularData();
    console.log(popularMovies);
  }, []);

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: popularMovies[0]
            ? `url(${imgUrl}${popularMovies[0].poster_path})`
            : "$bg",
        }}
      >
        {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
        {popularMovies[0] && <p>{popularMovies[0].overview}</p>}
        <div>
          <button>
            <HiPlay /> Play
          </button>
          <button>
            My List <MdOutlineBookmarkAdd />
          </button>
        </div>
      </div>
      <div>
        <Row title={"Upcoming Movies"} arr={upcomingMovies} />
        <Row title={"Top Rated Movies"} arr={topRatedMovies} />
        <Row title={"Now Playing Movies"} arr={nowPlayingMovies} />
        <Row title={"Popular Movies"} arr={popularMovies} />
      </div>
    </section>
  );
};

export default Home;
