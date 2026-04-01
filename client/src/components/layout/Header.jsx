import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ siteData }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const { company, logo, navigation, socialLinks } = siteData;

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const renderNavLink = (item) => {
    if (item.hash && item.path === '/') {
      // Hash link on home page
      if (isHome) {
        return <a href={item.hash}>{item.label}</a>;
      }
      return <Link to={`/${item.hash}`}>{item.label}</Link>;
    }
    return <Link to={item.path}>{item.label}</Link>;
  };

  const topBarButton = isHome
    ? { text: 'Contact Us', path: '/contact' }
    : location.pathname === '/contact'
    ? { text: 'Back to Home', path: '/' }
    : { text: 'Contact Us', path: '/contact' };

  const headerButton = isHome
    ? { text: 'Get Quote', path: '/contact' }
    : location.pathname === '/contact'
    ? { text: 'Our Services', path: '/#services', isHash: true }
    : { text: 'Get Quote', path: '/contact' };

  return (
    <>
      <header className={`header-section-4${sticky ? ' is-sticky' : ''}`}>
        {/* Top Bar */}
        <div className="top-bar d-none d-md-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="top-bar-content text-center">
                  <div className="text-wrap">
                    <img src="/img/icons/icon-2.svg" alt="icon" />
                    <span>{company.tagline}</span>
                  </div>
                  <Link className="e-primary-btn is-hover-white top-btn top-btn-2" to={topBarButton.path}>
                    {topBarButton.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Bottom */}
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="header-bottom-layout">
                  <div className="header-left-2">
                    <div className="logo-wrap">
                      <Link to="/">
                        <img src={logo.main} alt={company.name} />
                      </Link>
                    </div>
                    <div className="header-divider-bar d-none d-xxl-block"></div>
                    <nav className="main-menu d-none d-xl-block">
                      <ul>
                        {navigation.map((item, index) => (
                          <li key={index}>{renderNavLink(item)}</li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  <div className="header-right">
                    <div className="header-info d-none d-xl-flex">
                      <div className="header-info-icon-2">
                        <i className="fa-regular fa-phone-volume"></i>
                      </div>
                      <div className="header-info-content">
                        <span>Call Us Today!</span>
                        <p>
                          <a href={`tel:${company.phoneRaw}`}>{company.phone}</a>
                        </p>
                      </div>
                    </div>
                    <div className="header-btn-wrap d-none d-xl-flex">
                      {headerButton.isHash ? (
                        <a className="e-primary-btn has-icon" href={headerButton.path}>
                          {headerButton.text}
                          <span className="icon-wrap">
                            <span className="icon">
                              <i className="fa-regular fa-arrow-right"></i>
                              <i className="fa-regular fa-arrow-right"></i>
                            </span>
                          </span>
                        </a>
                      ) : (
                        <Link className="e-primary-btn has-icon" to={headerButton.path}>
                          {headerButton.text}
                          <span className="icon-wrap">
                            <span className="icon">
                              <i className="fa-regular fa-arrow-right"></i>
                              <i className="fa-regular fa-arrow-right"></i>
                            </span>
                          </span>
                        </Link>
                      )}
                    </div>
                    <div
                      className="header-bar open-mobile-menu d-xl-none"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <div className="bar bar-1"></div>
                      <div className="bar bar-2"></div>
                      <div className="bar bar-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Off-canvas mobile menu */}
      <div className={`off-canvas-menubar${mobileMenuOpen ? ' opened' : ''}`}>
        <div className="off-canvas-menubar-body">
          <div className="off-canvas-head">
            <div className="off-canvas-logo">
              <Link to="/">
                <img src={logo.main} alt={company.name} />
              </Link>
            </div>
            <div className="off-canvas-menubar-close" onClick={() => setMobileMenuOpen(false)}>
              <i className="fa-regular fa-xmark"></i>
            </div>
          </div>
          <div className="off-canvas-menu">
            <ul>
              {navigation.map((item, index) => (
                <li key={index}>{renderNavLink(item)}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="off-canvas-menubar-overlay" onClick={() => setMobileMenuOpen(false)}></div>
      </div>
    </>
  );
};

export default Header;
