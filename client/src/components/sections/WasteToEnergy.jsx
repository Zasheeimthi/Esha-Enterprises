import IconButton from '../common/IconButton';

const WasteToEnergy = ({ data }) => (
  <section className="our-events-section-2 p-t-120 p-b-120 p-t-md-100 p-b-md-100 p-t-xs-80 p-b-xs-80">
    <div className="container">
      <div className="section-top-6">
        <div className="left">
          <div className="common-subtitle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <img alt="icon" src="/img/icons/icon-2.svg" />
            <span>{data.subtitle}</span>
          </div>
          <div className="common-title text-start" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <h2>{data.title}</h2>
          </div>
        </div>
      </div>

      {data.items.map((item, index) => (
        <div
          className={`row event-card-3${index === 0 ? ' m-b-30' : ''}`}
          key={index}
          data-aos="fade-up"
          data-aos-delay={String(600 - index * 200)}
          data-aos-duration="1000"
        >
          <div className="col-lg-6 adjusted-col-gap">
            <div className="event-thumb">
              <a href="#">
                <img alt={item.title} src={item.image} />
              </a>
            </div>
          </div>
          <div className="col-lg-6 adjusted-col-gap">
            <div className="card-content">
              <div className="category">
                <p>{item.category}</p>
              </div>
              <div className="event-card-title">
                <h2><a href="#">{item.title}</a></h2>
              </div>
              <div className="event-card-text">
                <p>{item.description}</p>
              </div>
              <div className="join-event">
                <div className="blog-btn">
                  <IconButton text={item.buttonText} href={item.buttonLink} />
                </div>
              </div>
            </div>
          </div>
          <div className="card-number-3">
            <h1>{item.number}</h1>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WasteToEnergy;
