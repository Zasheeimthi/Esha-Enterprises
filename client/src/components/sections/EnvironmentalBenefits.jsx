import SectionHeader from '../common/SectionHeader';

const EnvironmentalBenefits = ({ data }) => (
  <section
    className="environmental-benefits p-t-100 p-b-100 p-t-xs-80 p-b-xs-80"
    style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)' }}
  >
    <div className="container">
      <SectionHeader subtitle={data.subtitle} title={data.title} />
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="row row-gap-4">
            {data.cards.map((card, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
                data-aos="fade-up"
                data-aos-delay={String(500 + index * 100)}
                data-aos-duration="1000"
              >
                <div
                  style={{
                    background: '#fff',
                    padding: '30px',
                    borderRadius: '15px',
                    boxShadow: '0 5px 25px rgba(0,0,0,0.08)',
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <i className={card.icon} style={{ fontSize: '36px', color: '#fff' }}></i>
                  </div>
                  <h4 style={{ fontSize: '1.25rem', color: '#333', marginBottom: '15px' }}>{card.title}</h4>
                  <p style={{ color: '#555', lineHeight: '1.7', margin: 0 }}>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center m-t-50" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
            <div
              style={{
                background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
                padding: '30px 50px',
                borderRadius: '15px',
                display: 'inline-block',
              }}
            >
              <h3 style={{ color: '#fff', margin: 0, fontSize: '1.5rem' }}>
                <i className="fa-solid fa-leaf" style={{ marginRight: '10px' }}></i>
                {data.banner}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EnvironmentalBenefits;
