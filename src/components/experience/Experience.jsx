import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <>
      <section className="experience section" id="experience">
        <h2 className="section__title">Experience</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="experience__container container">
          <div className="experience__sections">
            <div className="experience__content">
              <div className="experience__data">
                <div>
                  <h3 className="experience__title">Full Stack Developer</h3>
                  <span className="experience__subtitle">
                    Cruxtab Technologies
                  </span>
                  <div className="experience__calender">
                    <i className="uil uil-calendar-alt">May 2023 - June 2023 (Internship)</i>
                  </div>
                </div>
                <div>
                  <span className="experience__rounder"></span>
                  <span className="experience__line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
