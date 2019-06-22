import React from 'react';
import { Formik } from 'formik';

const LensForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: '' }}
        validate={values => {
          let errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">名稱</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder="e.g. Sigma 16mm f1.4 DC DN"
                    />
                  </div>
                  <p className="help is-danger">{errors.name}</p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label" />
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <button className="button is-primary">Send message</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LensForm;
