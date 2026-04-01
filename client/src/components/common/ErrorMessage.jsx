const ErrorMessage = ({ message = 'Something went wrong. Please try again.' }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh', textAlign: 'center' }}>
    <div>
      <i className="fa-light fa-triangle-exclamation" style={{ fontSize: '3rem', color: '#dc3545', marginBottom: '20px', display: 'block' }}></i>
      <h3 style={{ marginBottom: '10px' }}>Oops!</h3>
      <p>{message}</p>
    </div>
  </div>
);

export default ErrorMessage;
