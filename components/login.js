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
    // Display the key/value pairs
    for (let pair of data.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    fetch('/login', {
      method: 'POST',
      body: data,
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
                name="number"
                placeholder="Phone number"
                required
              />
            </div>

            <div className={css.formGroup}>
              <label className={css.formLabel} htmlFor="input-example-1">
                Password
              </label>
              <input
                className={css.formInput}
                type="text"
                id="input-example-1"
                name="pass"
                placeholder="Password"
                required
              />
            </div>

            <div className={css.inputGroup}>
              <button className={`${css.btn} ${css.btnPrimary}`}>Log in</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
