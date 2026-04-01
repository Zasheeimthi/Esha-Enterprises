import SectionHeader from '../common/SectionHeader';

const ServicesSection = ({ data }) => (
  <section id="services" className="work-process p-t-100 p-b-120 p-b-md-100 p-t-xs-80 p-b-xs-80">
    <div className="container">
      <SectionHeader subtitle={data.subtitle} title={data.title} />
      <div className="row row-gap-4 row-gap-md-5">
        {data.details.map((service, index) => (
          <div
            className="col-xl-6"
            key={index}
            data-aos="fade-up"
            data-aos-delay={String(500 + index * 200)}
            data-aos-duration="1000"
          >
            <div
              className="service-detail-card"
              style={{
                background: '#fff',
                padding: '35px',
                borderRadius: '15px',
                boxShadow: '0 5px 30px rgba(0,0,0,0.08)',
                height: '100%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px',
                  }}
                >
                  <i className={service.icon} style={{ fontSize: '28px', color: '#fff' }}></i>
                </div>
                <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#333' }}>{service.title}</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: i < service.items.length - 1 ? '18px' : 0,
                    }}
                  >
                    <i
                      className="fa-solid fa-check-circle"
                      style={{ color: '#4CAF50', marginRight: '12px', marginTop: '4px', flexShrink: 0 }}
                    ></i>
                    <span style={{ color: '#555', lineHeight: '1.6' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
