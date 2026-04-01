const QuickServices = ({ services }) => (
  <section className="services-section p-t-120 p-t-md-100 p-t-xs-80">
    <div className="container">
      <div className="row row-gap-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
        {services.map((service, index) => (
          <div className="col-xl-4 col-md-6" key={index}>
            <div className="service-card">
              <div className="service-top">
                <h4>{service.title}</h4>
                <i className={service.icon}></i>
              </div>
              <div className="service-content">
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default QuickServices;
