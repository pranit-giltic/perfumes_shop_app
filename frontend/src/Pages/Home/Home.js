import React from 'react';
import "../../styles/main.css";
import perfumesMale from "../../images/perfumes_males.jpg";
import brownsPerfumes from "../../images/browse_parfumes.jpg";
import hermes from "../../images/hermes_perfumes.jpg";
import dior from "../../images/rose_perfumes.jpg";
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate()

    const handleLink = () => {
        navigate("/shop")
    }
  return (
    <div className="home">
    <div className="container home__container">
        <div className="block__text">
            <h1 className="block__title">Find your perfume</h1>
            <p className="block__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button onClick={handleLink} className="block__btn">shop now</button>
        </div>
      <div className="block__square">
        <div className="square square__one" style={{ backgroundImage: `url(${perfumesMale})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
        <div className="square square__two" style={{backgroundImage: `url(${brownsPerfumes})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
        <div className="square__content">
          <div className="square square__four" style={{backgroundImage: `url(${hermes})`,  backgroundSize: "cover", backgroundPosition: "center"}}></div>
          <div className="square square__five" style={{backgroundImage: `url(${dior})`,  backgroundSize: "cover", backgroundPosition: "center"}}></div>
          <div className="square square__six" style={{backgroundImage: `url(${hermes})`,  backgroundSize: "cover", backgroundPosition: "center"}}></div>
        </div>
      </div>
    </div>
    </div>
  );
}
