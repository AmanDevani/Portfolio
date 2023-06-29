import React from "react";
import "./portfolio.css";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.jpg";
const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Project's</span>

      <div className="portfolio__container container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={work1} alt="crypto" />
          </div>
          <h3>Crypto Tracker</h3>
          <p>
            Here, You can see the Exchanges and Cryptocurrency value with live
            chart with diffrent Currency.
          </p>
          <a
            href="https://guide-crypto.netlify.app/"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            View Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={work2} alt="noteapp" />
          </div>
          <h3>Notes App</h3>
          <p>
            Note taking app with user authentication and create,edit,delete
            functionality.
          </p>
          <a
            href="https://noteapp-gyl1.onrender.com"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            View Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={work3} alt="ecommerce" />
          </div>
          <h3>E-Commerce</h3>
          <p>
          In E-Commerce , Functionality as you effortlessly Authentication , add items to your cart and proceed to a secure checkout , Reviews with Admin Panel and  many more.
          </p>
          <a
            href="https://e-commerce-mern.cyclic.app/"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            View Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
