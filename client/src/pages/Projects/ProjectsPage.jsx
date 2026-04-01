import { useEffect } from 'react';
import { useInitAOS } from '../../hooks/useAOS';
import { Link } from 'react-router-dom';
import { useFetchData } from '../../hooks/useFetchData';
import { getProjectsData } from '../../services/api';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';
import Breadcrumb from '../../components/common/Breadcrumb';
import SectionHeader from '../../components/common/SectionHeader';
import ContactInfoBar from '../../components/common/ContactInfoBar';
import IconButton from '../../components/common/IconButton';

const ProjectsPage = ({ siteData }) => {
  const { data, loading, error } = useFetchData(getProjectsData);

  useInitAOS(data);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (data) {
      setTimeout(() => {
        if (window.PureCounter) new window.PureCounter();
      }, 200);
    }
  }, [data]);

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

      {/* Projects Grid */}
      <section className="services-section p-t-100 p-b-120">
        <div className="container">
          <div className="row justify-content-center text-center m-b-50 m-b-xs-40">
            <div className="col-xl-8">
              <SectionHeader subtitle={data.header.subtitle} title={data.header.title} aosDelay="600" />
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            {data.projects.map((project) => (
              <div className="col-xl-6 m-b-30" key={project.id}>
                <div className="project-card style-2 style-service">
                  <div className="thumb">
                    <a href="#">
                      <img alt={project.title} src={project.image} />
                    </a>
                    <div className="tag">
                      <p>{project.tag}</p>
                    </div>
                    <div className="content">
                      <h5>{project.title}</h5>
                      <p>{project.description}</p>
                      <div className="join-us">
                        <IconButton text="Get Quote" href="/contact" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section p-t-80 p-b-80">
        <div className="container">
          <div className="row justify-content-center text-center m-b-50">
            <div className="col-xl-8">
              <SectionHeader subtitle={data.team.subtitle} title={data.team.title} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="team-image text-center" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                <img
                  src={data.team.image}
                  alt={`${siteData.company.name} Team`}
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="services-section p-t-80 p-b-80" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row text-center">
            {data.stats.map((stat, index) => (
              <div className="col-xl-3 col-md-6 m-b-30" key={index}>
                <div className="service-card">
                  <div className="service-top">
                    <h4>{stat.label}</h4>
                    <i className={stat.icon}></i>
                  </div>
                  <div className="service-content">
                    <h2 style={{ fontSize: '3rem', color: '#4CAF50' }}>
                      <span
                        className="purecounter"
                        data-purecounter-duration="2"
                        data-purecounter-end={stat.value}
                      >
                        0
                      </span>
                      +
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-section p-t-80 p-b-80">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-8">
              <div className="common-subtitle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <img alt="icon" src="/img/icons/icon-2.svg" />
                <span>{data.cta.subtitle}</span>
              </div>
              <div className="common-title" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                <h2>{data.cta.title}</h2>
              </div>
              <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" style={{ marginBottom: '30px' }}>
                {data.cta.description}
              </p>
              <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                <IconButton text={data.cta.buttonText} href={data.cta.buttonLink} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactInfoBar items={siteData.contactInfoBar} />
    </main>
  );
};

export default ProjectsPage;
