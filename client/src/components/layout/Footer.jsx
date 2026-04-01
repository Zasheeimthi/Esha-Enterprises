import { Link } from 'react-router-dom';

const Footer = ({ siteData }) => {
  const { company, logo, socialLinks, footer } = siteData;

  const renderLink = (item) => {
    if (item.hash && item.path === '/') {
      return <a href={`${item.path}${item.hash}`}>{item.label}</a>;
    }
    if (item.path === '#') {
      return <a href="#">{item.label}</a>;
    }
    return <Link to={item.path}>{item.label}</Link>;
  };

  return (
    <footer className="footer-section p-t-125" style={{ backgroundImage: 'url(/img/bg/footer-bg.webp)' }}>
      <div className="container">
        <div className="row justify-content-between row-gap-md-5 row-gap-4 p-b-30">
          {/* About Column */}
          <div className="col-xl-4 col-lg-8 col-md-7">
            <div className="footer-widget">
              <div className="about-widget">
                <div className="footer-logo">
                  <Link to="/">
                    <img alt={company.name} src={logo.white} />
                  </Link>
                </div>
                <div className="text">
                  <p>{company.description}</p>
                </div>
                <div className="info">
                  <p><b>We Are Available!!</b></p>
                  <p>{company.hours}</p>
                </div>
                <div className="social-links">
                  {socialLinks.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-xl-2 col-lg-4 col-md-5">
            <div className="footer-widget">
              <h3 className="w-title">Quick Links</h3>
              <ul>
                {footer.quickLinks.map((item, index) => (
                  <li key={index}>{renderLink(item)}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="col-xl-2 col-lg-4 col-md-5">
            <div className="footer-widget">
              <h3 className="w-title">Our Services</h3>
              <ul>
                {footer.serviceLinks.map((item, index) => (
                  <li key={index}>{renderLink(item)}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-xl-3 col-lg-4 col-md-5">
            <div className="footer-widget">
              <h3 className="w-title">Contact Us</h3>
              <div className="footer-contact-info">
                <p>
                  <i className="fa-solid fa-location-dot"></i> {company.address.line1}
                  <br />{company.address.line2}
                  <br />{company.address.line3}
                </p>
                <p>
                  <i className="fa-solid fa-phone"></i>{' '}
                  <a href={`tel:${company.phoneRaw}`}>{company.phone}</a>
                </p>
                <p>
                  <i className="fa-solid fa-envelope"></i>{' '}
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-3">
          <div className="footer-bottom-layout-2">
            <div className="footer-copyright">{company.copyright}</div>
            <div className="footer-bottom-menu">
              <ul>
                {footer.bottomLinks.map((item, index) => (
                  <li key={index}>
                    <a href={item.path}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
