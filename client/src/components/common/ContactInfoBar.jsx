const ContactInfoBar = ({ items }) => (
  <section className="contact-info-section">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="contact-info-layout">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`contact-info${item.active ? ' active' : ''}`}
              >
                <div className="icon-wrap">
                  <div className="icon-shape"></div>
                  <div className="icon">
                    <i className={item.icon}></i>
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactInfoBar;
