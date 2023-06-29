import React from 'react'
import "./services.css"

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="fas fa-code services-icon"></i>
            <h3 className="services title">Web Development</h3>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="fas fa-paint-brush services-icon"></i>
            <h3 className="services title">Web Design</h3>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="fas fa-chart-line services-icon"></i>
            <h3 className="services title">Marketing</h3>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Services
