import { useEffect } from 'react';

const AboutSection = ({ data }) => {
  useEffect(() => {
    // Initialize PureCounter if available
    if (window.PureCounter) {
      new window.PureCounter();
    }
  }, []);

  return (
    <section id="about" className="about-us-section-2 p-t-100 p-t-xs-80">
      <div className="container">
        <div className="text-center m-b-50 m-b-xs-40">
          <div className="common-subtitle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <img alt="icon" src="/img/icons/icon-2.svg" />
            <span>{data.subtitle}</span>
          </div>
          <div className="common-title m-b-20" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <h2>{data.title}</h2>
            <h3 className="mt-3">{data.heading}</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              {data.paragraphs.map((text, index) => (
                <p
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={String(500 + index * 100)}
                  data-aos-duration="1000"
                  style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '15px' }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="thumb">
          <img alt={`${data.title} Operations`} src={data.image} />
          <div className="company-achievements-2">
            {data.achievements.map((item, index) => (
              <div className="achievement" key={index} data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <i className={item.icon}></i>
                <h2>
                  {item.isCounter ? (
                    <>
                      <span
                        className="purecounter"
                        data-purecounter-duration="2"
                        data-purecounter-end={item.counterEnd}
                      >
                        0
                      </span>
                      %
                    </>
                  ) : (
                    item.value
                  )}
                </h2>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
