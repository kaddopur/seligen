import React from 'react';
import { Formik } from 'formik';

const FormField = ({ displayName, errors, fieldName, handleBlur, handleChange, placeholder, values }) => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">{displayName}</label>
    </div>
    <div className="field-body">
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="number"
            name={fieldName}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldName]}
            placeholder={placeholder}
          />
          <i class="fas fa-check" />
        </div>
        <p className="help is-danger">{errors[fieldName]}</p>
      </div>
    </div>
  </div>
);

const LensForm = () => {
  let values = {};

  try {
    values = JSON.parse(localStorage.values);
  } catch (e) {
    console.log('#####: LensForm -> e', e);
  }

  return (
    <div>
      <Formik
        initialValues={values}
        validate={values => {
          let errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          localStorage.values = JSON.stringify(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 1500);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid }) => {
          const fieldProps = {
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors
          };

          return (
            <form onSubmit={handleSubmit}>
              <FormField displayName="物品內容" fieldName="name" {...fieldProps} />
              <FormField displayName="交易價格" fieldName="price" {...fieldProps} />
              <FormField displayName="詳細說明" fieldName="description" {...fieldProps} />
              <FormField displayName="交易地區" fieldName="location" {...fieldProps} />
              <FormField displayName="照片網址" fieldName="photo" {...fieldProps} />
              <FormField displayName="拍賣連結" fieldName="link" {...fieldProps} />
              <FormField displayName="聯絡方式" fieldName="contact" {...fieldProps} />

              <div className="field is-horizontal">
                <div className="field-label" />
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary" disabled={!isValid || isSubmitting}>
                        儲存
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LensForm;
