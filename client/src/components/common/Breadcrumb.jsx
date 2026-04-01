import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, items, backgroundImage, thumbImage }) => (
  <section className="breadcrumb-section">
    <div className="container-fluid">
      <div className="row g-0">
        <div className="col-xl-6 col-lg-6">
          <div className="breadcrumb-content" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="breadcrumb-nav" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    {item.path === '#' ? (
                      <a href="#">{item.label}</a>
                    ) : (
                      <Link to={item.path}>{item.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <h2>{title}</h2>
            </div>
            <div className="shape-1">
              <img src="/img/shapes/shape-1.webp" alt="shape" />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 d-none d-lg-block">
          <div className="breadcrumb-thumb">
            <img src={thumbImage} alt="thumb" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Breadcrumb;
