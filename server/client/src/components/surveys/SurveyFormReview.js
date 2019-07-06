import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { submitSurvey } from "../../actions";
import { withRouter } from "react-router-dom";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey<i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { formValues: state.form.surveyForm.values };
};

export default connect(
  mapStateToProps,
  { submitSurvey }
)(withRouter(SurveyFormReview));
