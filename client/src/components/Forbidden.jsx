//This component is used if any route is accessed without the proper credentials
const Forbidden = () => {
  return (
    <div className="wrap">
      <h2>Forbidden</h2>
      <p>Oh no! You can&apost access this page.</p>
    </div>
  );
};

export default Forbidden;
