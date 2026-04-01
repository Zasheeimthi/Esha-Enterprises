import { useState, useEffect } from 'react';
import { useInitAOS } from '../../hooks/useAOS';
import { useFetchData } from '../../hooks/useFetchData';
import { getContactData, submitContactForm } from '../../services/api';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';
import Breadcrumb from '../../components/common/Breadcrumb';
import ContactInfoBar from '../../components/common/ContactInfoBar';

const ContactPage = ({ siteData }) => {
  const { data, loading, error } = useFetchData(getContactData);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', company: '', location: '', service: '0', message: '',
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  useInitAOS(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus({ type: '', message: '' });

    const result = await submitContactForm(formData);

    if (result.success) {
      setFormStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
      setFormData({ name: '', phone: '', email: '', company: '', location: '', service: '0', message: '' });
    } else {
      setFormStatus({ type: 'error', message: result.error });
    }

    setSubmitting(false);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!data) return null;

  return (
    <main>
      {/* Breadcrumb */}
      <Breadcrumb
        title={data.breadcrumb.title}
        items={data.breadcrumb.items}
        backgroundImage={data.breadcrumb.image}
        thumbImage={data.breadcrumb.thumb}
      />

      {/* Contact Info Cards */}
      <section className="services-section p-t-120">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            {data.infoCards.map((card, index) => (
              <div className="col-xl-4" key={index}>
                <div className="service-card">
                  <div className="service-top">
                    <h4>{card.title}</h4>
                    <i className={card.icon}></i>
                  </div>
                  <div className="service-content">
                    <p dangerouslySetInnerHTML={{ __html: card.content }} />
                  </div>
                  <div className="i-shape">
                    <i className={card.icon}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="contact-section p-t-120 p-b-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="contact-form-wrap" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <h3>{data.form.title}</h3>
                <p>{data.form.subtitle}</p>
                <form onSubmit={handleSubmit}>
                  <div className="row form-row">
                    <div className="col-xl-6">
                      <div className="input-wrap">
                        <input
                          type="text"
                          placeholder="Your Name *"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="input-wrap">
                        <input
                          type="tel"
                          placeholder="Phone Number *"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row form-row">
                    <div className="col-xl-6">
                      <div className="input-wrap">
                        <input
                          type="email"
                          placeholder="Email Address *"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="input-wrap">
                        <input
                          type="text"
                          placeholder="Company/Organization Name"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row form-row">
                    <div className="col-xl-6">
                      <div className="input-wrap">
                        <input
                          type="text"
                          placeholder="Location/City"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="select-wrap">
                        <select name="service" value={formData.service} onChange={handleChange}>
                          {data.form.services.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="select-icon">
                          <i className="fa-regular fa-angle-down"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="input-wrap">
                        <textarea
                          placeholder="Please describe your waste management requirements..."
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="input-button">
                        <button type="submit" className="e-primary-btn has-icon" disabled={submitting}>
                          {submitting ? 'Submitting...' : 'Submit Request'}
                          <span className="icon-wrap">
                            <span className="icon">
                              <i className="fa-regular fa-arrow-right"></i>
                              <i className="fa-regular fa-arrow-right"></i>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                {formStatus.message && (
                  <p
                    className="form-message"
                    style={{ color: formStatus.type === 'success' ? '#28a745' : '#dc3545', marginTop: '15px' }}
                  >
                    {formStatus.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="c-shape-1">
          <img src="/img/shapes/shape-34.webp" alt="shape" />
        </div>
        <div className="c-shape-2">
          <img src="/img/shapes/shape-35.webp" alt="shape" />
        </div>
      </div>

      {/* Google Map */}
      <div className="map-section">
        <div className="contact-map" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <iframe
            src={data.map.embedUrl}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ESHA Enterprises Location"
          ></iframe>
        </div>
      </div>

      {/* Why Contact Us */}
      <section className="services-section p-t-120 p-b-60">
        <div className="container">
          <div className="text-center m-b-50">
            <div className="common-subtitle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <img alt="icon" src="/img/icons/icon-2.svg" />
              <span>{data.whyContact.subtitle}</span>
            </div>
            <div className="common-title m-b-0" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <h2>{data.whyContact.title}</h2>
            </div>
          </div>
          <div className="row row-gap-4" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            {data.whyContact.cards.map((card, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <div className="service-card">
                  <div className="service-top">
                    <h4>{card.title}</h4>
                    <i className={card.icon}></i>
                  </div>
                  <div className="service-content">
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactInfoBar items={siteData.contactInfoBar} />
    </main>
  );
};

export default ContactPage;
