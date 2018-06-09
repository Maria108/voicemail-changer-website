import React, { Component } from 'react';

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
      mode: 'no-cors',
      body: params,
    });
  }

  render() {
    return (
      <div className={css.Container}>
        <div className={`${css.column} ${css.col6}`}>
          <form onSubmit={this.handleSubmit}>
            <div className={css.formGroup}>
              <label className={css.formLabel} htmlFor="input-example-1">
                Phone number
              </label>
              <input
                className={css.formInput}
                type="text"
                id="input-example-1"
                name="phone"
                placeholder="Phone number"
                required
              />
            </div>
            <div className={css.inputGroup}>
              <button className={`${css.btn} ${css.btnPrimary}`}>Sign up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
