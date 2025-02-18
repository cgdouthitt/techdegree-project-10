//This component is used to display various errors that could occur during course creation and update
const ValidationErrors = ({ errors }) => {
  let validationErrors = null;

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
