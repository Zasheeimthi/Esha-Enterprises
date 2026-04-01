const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="preloader">
      <img src="/img/thumbs/preloader.gif" alt="Loading..." />
    </div>
  </div>
);

export default LoadingSpinner;
