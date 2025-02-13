const ValidationErrors = ({ errors }) => {
  let validationErrors = null;
  console.log(errors);

  if (errors.length) {
    validationErrors = (
      <div className="validation--errors">
        <h3>Validation Errors</h3>
        <ul>
          {errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }
  return validationErrors;
};

export default ValidationErrors;
