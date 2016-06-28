import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
const { DOM: { input, select, textarea, checkbox } } = React

const SimpleForm = (props) => {
  const { onSubmit, pristine, submitting } = props
  return (
    <div className="container">

      <form className="form-signin" onSubmit={onSubmit}>
        <h2 className="form-signin-heading">Please sign in</h2>
        <label for="email" className="sr-only">Email address</label>
        <Field name="email" component="input" type="email" className="form-control" placeholder="Email address" required="" autofocus=""/>
        <label for="password" className="sr-only">Password</label>
        <Field name="password" component="input" type="password" className="form-control" placeholder="Password" required=""/>
        <div className="checkbox">
          <label>
            <Field name="rememberme" component="input" type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={pristine || submitting}>Sign in</button>
      </form>

    </div>
  )
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)


