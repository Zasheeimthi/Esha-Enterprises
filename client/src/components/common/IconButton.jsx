import { Link } from 'react-router-dom';

const IconButton = ({ text, href, className = 'e-primary-btn has-icon', isExternal = false }) => {
  const content = (
    <>
      {text}
      <span className="icon-wrap">
        <span className="icon">
          <i className="fa-regular fa-arrow-right"></i>
          <i className="fa-regular fa-arrow-right"></i>
        </span>
      </span>
    </>
  );

  if (isExternal || href?.startsWith('#') || href?.startsWith('tel:') || href?.startsWith('mailto:')) {
    return (
      <a className={className} href={href}>
        {content}
      </a>
    );
  }

  return (
    <Link className={className} to={href}>
      {content}
    </Link>
  );
};

export default IconButton;
