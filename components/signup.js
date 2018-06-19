import React, { Component } from 'react';
import Router from 'next/router'
import { AsYouType, isValidNumber } from 'libphonenumber-js'

import css from '../styles/style.scss';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    // Set initial state values.
    this.state = {
      isDisabled: true,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputClick = this.handleInputClick.bind(this);
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

  handleInputChange(event) {
    const { value } = event.target;

    // Format number and update input.
    const formatedNum = new AsYouType('US').input(value);
    event.target.value = formatedNum

    // Check if it's a valid US number.
    const isValid = isValidNumber(value, 'US')
    this.setState({
      isDisabled: !isValid,
    })
  }

  handleInputClick(event) {
    // Clear input when user clicks on it.
    event.target.value = '';
  }

  render() {
    const {name} = this.props;
    const {temp, loveCount, isDisabled} = this.state;
    return (
      <div className={css.Container}>
        <div className={`${css.column} ${css.col2} ${css.colMxAuto}`}>
          <form onSubmit={this.handleSubmit}>
            <div className={css.formGroup}>
              <div className={css.inputGroup}>
                <span className={`${css.inputGroupAddon} ${css.countryCode}`}>+1</span>
                <input
                  onChange={this.handleInputChange}
                  onClick={this.handleInputClick}
                  className={css.formInput}
                  type="text"
                  id="input-phone"
                  name="phone"
                  placeholder="Phone number"
                  maxLength="14"
                  required
                />
              </div>
            </div>
            <div className={`${css.inputGroup} ${css.vmSignupBtn}`}>
              <button className={`${css.btn} ${css.btnPrimary}`} disabled={isDisabled}>Sign up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
