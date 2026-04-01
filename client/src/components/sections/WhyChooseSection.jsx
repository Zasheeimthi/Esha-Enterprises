const WhyChooseSection = ({ data }) => (
  <section
    id="why-choose"
    className="dust-recycling-section"
    style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/img/bg/dust-recycling-bg-2.webp)" }}
  >
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-12 col-12">
          <div
            className="dust-recycle-card text-center"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            style={{ margin: '0 auto' }}
          >
            <div className="dust-recycle-top">
              <h5 style={{ textAlign: 'center' }}>{data.title}</h5>
              <div className="row row-gap-4">
                {data.reasons.map((reason, index) => (
                  <div className="col-lg-6" key={index}>
                    <div
                      className="service-2"
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '20px',
                        background: 'rgba(255,255,255,0.1)',
                        padding: '25px 30px',
                        borderRadius: '12px',
                        height: '100%',
                      }}
                    >
                      <div
                        style={{
                          width: '60px',
                          height: '60px',
                          background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <i className={reason.icon} style={{ fontSize: '28px', color: '#fff' }}></i>
                      </div>
                      <div style={{ textAlign: 'left', flex: 1 }}>
                        <h6 style={{ color: '#fff', marginBottom: '8px', fontWeight: 600, fontSize: '1.1rem' }}>
                          {reason.title}
                        </h6>
                        <p style={{ margin: 0, lineHeight: '1.7', color: '#fff' }}>{reason.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="campaign-progress" style={{ maxWidth: '600px', margin: '0 auto' }}>
              {data.progressBars.map((bar, index) => (
                <div className={index === 0 ? 'environmental' : 'campaigns'} key={index}>
                  <div className="top">
                    <p>{bar.label}</p>
                    <p>{bar.value}%</p>
                  </div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={bar.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: `${bar.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
