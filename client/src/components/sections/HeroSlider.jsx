import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Swiper from 'swiper';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

const HeroSlider = ({ slides, socialLinks }) => {
  const swiperRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (swiperRef.current) return;

    swiperRef.current = new Swiper('.hero-slider-active-1 .swiper', {
      modules: [Autoplay, Pagination, EffectFade],
      loop: true,
      speed: 1000,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: {
        el: '.hero-slider-pagination-1',
        clickable: true,
      },
      on: {
        slideChangeTransitionStart: function () {
          const activeSlide = this.slides[this.activeIndex];
          if (!activeSlide) return;
          const animatedEls = activeSlide.querySelectorAll('[data-animation]');
          animatedEls.forEach((el) => {
            const animation = el.getAttribute('data-animation');
            const delay = el.getAttribute('data-delay') || '0s';
            el.style.animationDelay = delay;
            el.classList.remove(animation);
            void el.offsetWidth;
            el.classList.add('animate__animated', animation);
          });
        },
      },
    });

    // Trigger first slide animations
    setTimeout(() => {
      const firstSlide = document.querySelector('.hero-slider-active-1 .swiper-slide-active');
      if (firstSlide) {
        firstSlide.querySelectorAll('[data-animation]').forEach((el) => {
          const animation = el.getAttribute('data-animation');
          const delay = el.getAttribute('data-delay') || '0s';
          el.style.animationDelay = delay;
          el.classList.add('animate__animated', animation);
        });
      }
    }, 100);

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null;
      }
    };
  }, []);

  const renderButton = (slide) => {
    const isHash = slide.buttonLink.startsWith('#');
    const isRoute = slide.buttonLink.startsWith('/');

    const content = (
      <>
        {slide.buttonText}
        <span className="icon-wrap">
          <span className="icon">
            <i className="fa-regular fa-arrow-right"></i>
            <i className="fa-regular fa-arrow-right"></i>
          </span>
        </span>
      </>
    );

    if (isHash) {
      return <a className="e-primary-btn has-icon" href={slide.buttonLink}>{content}</a>;
    }
    return <Link className="e-primary-btn has-icon" to={slide.buttonLink}>{content}</Link>;
  };

  return (
    <section className="hero-slider-active-1">
      <div className="swiper">
        <div className="swiper-wrapper">
          {slides.map((slide) => (
            <div className="swiper-slide" key={slide.id}>
              <div className="hero-side" style={{ backgroundImage: `url(${slide.background})` }}>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="hero-content-1">
                        <div className="subtitle" data-animation="animate__fadeInUp" data-delay="0.3s">
                          <img src="/img/icons/icon-2.svg" alt="icon" />
                          <span>{slide.subtitle}</span>
                        </div>
                        <div className="title" data-animation="animate__fadeInUp" data-delay="0.4s">
                          <h1 dangerouslySetInnerHTML={{ __html: slide.title }} />
                        </div>
                        <div className="text" data-animation="animate__fadeInUp" data-delay="0.5s">
                          <p>{slide.text}</p>
                        </div>
                        <div className="join-us" data-animation="animate__fadeInUp" data-delay="0.6s">
                          {renderButton(slide)}
                          <div className="author-wrap">
                            <img src="/img/icons/icon-2.svg" alt="eco" />
                            <div className="author-info">
                              <h5>{slide.badge.title}</h5>
                              <p>{slide.badge.subtitle}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-shape-1">
                  <img src="/img/shapes/group-shape-1.webp" alt="shape" />
                </div>
                <div className="s-shape-1">
                  <img src="/img/shapes/shape-2.webp" alt="shape" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-slider-pagination-1"></div>
      <div className="hero-slider-social">
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
