import { useState } from 'react';
import SectionHeader from '../common/SectionHeader';

const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="services-section p-t-100 p-b-100 p-t-xs-80 p-b-xs-80" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row justify-content-center text-center m-b-50">
          <div className="col-xl-8">
            <SectionHeader subtitle="FAQ" title="Frequently Asked Questions" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="accordion" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              {faqs.map((faq, index) => (
                <div
                  className="accordion-item"
                  key={index}
                  style={{
                    marginBottom: index < faqs.length - 1 ? '15px' : 0,
                    border: '1px solid #e0e0e0',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}
                >
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button${openIndex !== index ? ' collapsed' : ''}`}
                      type="button"
                      onClick={() => toggle(index)}
                      style={{ fontWeight: 600, fontSize: '1.1rem' }}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse${openIndex === index ? ' show' : ''}`}
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
