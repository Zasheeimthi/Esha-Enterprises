const PhilosophySection = ({ data }) => (
  <section className="testimonial p-t-120 p-b-80 p-t-md-100 p-t-xs-80">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-xl-8 text-center">
          <div className="testimonial-content" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div className="common-subtitle justify-content-center">
              <img alt="icon" src="/img/icons/icon-2.svg" />
              <span>{data.subtitle}</span>
            </div>
            <div className="common-title">
              <h2 style={{ fontSize: '2.5rem', lineHeight: '1.4' }}>
                <i className="fa-solid fa-quote-left" style={{ color: '#4CAF50' }}></i>{' '}
                {data.quote}{' '}
                <i className="fa-solid fa-quote-right" style={{ color: '#4CAF50' }}></i>
              </h2>
            </div>
            <div className="text">
              <p style={{ fontSize: '1.2rem' }}>{data.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PhilosophySection;
