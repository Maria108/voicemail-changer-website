import React, { Component } from 'react';
import Router from 'next/router'

import css from '../styles/style.scss';

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    // Convert form data to params.
    const params = new URLSearchParams();
    for (let pair of data.entries()) {
      params.set(pair[0], pair[1]);
    }

    fetch('https://vmchanger.abashina.org/signup', {
      method: 'POST',
      body: params,
    });

    // Redirect user to vm changer form.
    Router.push('/account');
  }

  render() {
    return (
      <div className={css.Container}>
        <div className={`${css.column} ${css.col2} ${css.colMxAuto}`}>
          <form onSubmit={this.handleSubmit}>
            <div className={css.formGroup}>
              <input
                className={css.formInput}
                type="text"
                id="input-phone"
                name="phone"
                placeholder="Phone number"
                required
              />
            </div>
            <div className={`${css.inputGroup} ${css.vmSignupBtn}`}>
              <button className={`${css.btn} ${css.btnPrimary}`}>Sign up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
