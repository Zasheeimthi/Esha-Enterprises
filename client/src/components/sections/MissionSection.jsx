const MissionSection = ({ data }) => (
  <section
    id="mission"
    className="services-we-offer-section p-t-100 p-b-100 p-t-xs-80 p-b-xs-80"
    style={{ backgroundImage: "url('/img/bg/services-we-offer-bg.webp')" }}
  >
    <div className="container">
      <div className="text-center m-b-50 m-b-xs-40">
        <div className="common-subtitle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <img alt="icon" src="/img/icons/icon-1.svg" />
          <span>{data.subtitle}</span>
        </div>
        <div className="common-title m-b-20" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          <h2>{data.title}</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff', padding: '25px', borderRadius: '10px' }}
            >
              {data.description}
            </p>
          </div>
        </div>
      </div>
      <div className="row row-gap-4" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
        {data.cards.map((card, index) => (
          <div className="col-xl-4 col-md-6" key={index}>
            <div className="service-card" style={{ background: 'rgba(255,255,255,0.95)', padding: '30px', borderRadius: '10px' }}>
              <div className="service-top">
                <h4>{card.title}</h4>
                <i className={card.icon}></i>
              </div>
              <div className="service-content">
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MissionSection;
