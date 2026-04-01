const SectionHeader = ({ subtitle, title, iconSrc = '/img/icons/icon-2.svg', className = '', aosDelay = '200' }) => (
  <div className={`text-center m-b-50 m-b-xs-40 ${className}`}>
    <div className="common-subtitle" data-aos="fade-up" data-aos-delay={aosDelay} data-aos-duration="1000">
      <img alt="icon" src={iconSrc} />
      <span>{subtitle}</span>
    </div>
    <div className="common-title m-b-0" data-aos="fade-up" data-aos-delay={String(Number(aosDelay) + 200)} data-aos-duration="1000">
      <h2>{title}</h2>
    </div>
  </div>
);

export default SectionHeader;
