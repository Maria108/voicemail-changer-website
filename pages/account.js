import React, { Component } from 'react';
import Navbar from '../components/navbar';
import EmptyState from '../components/empty-state';
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
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className={css.container}>
          <div className={css.columns}>
            <div className={`${css.column} ${css.col12} ${css.customContainer}`}>
              <EmptyState />
              <form onSubmit={this.handleSubmit}>
                <div className={css.Container}>
                  <div className={`${css.column} ${css.col6}`}>
                    <div className={css.formGroup}>
                      <label className={css.formLabel} htmlFor="input-example-1">
                        Name
                      </label>
                      <input
                        className={css.formInput}
                        type="text"
                        id="input-example-1"
                        name="name"
                        placeholder="Name"
                      />
                    </div>

                    <div className={css.formGroup}>
                      <label className={css.formLabel} htmlFor="input-example-1">
                        Phone number
                      </label>
                      <input
                        className={css.formInput}
                        type="text"
                        id="input-example-1"
                        name="number"
                        placeholder="Tel"
                      />
                    </div>

                    <div className={css.formGroup}>
                      <label className={css.formLabel} htmlFor="input-example-1">
                        Cell Phone Carrier
                      </label>
                      <select className={css.formSelect} name="carrier">
                        <option>-</option>
                        <option value="at&t">AT&T</option>
                        <option value="t-mobile">T-Mobile</option>
                        <option value="verizon">Verizon</option>
                        <option value="sprint">Sprint</option>
                        <option value="google">Google Fy</option>
                        <option value="mint">Mint</option>
                        <option value="metro">MetroPCS</option>
                      </select>
                    </div>

                    <div className={css.formGroup}>
                      <label className={css.formLabel} htmlFor="input-example-1">
                        Voicemail pin code
                      </label>
                      <input
                        className={css.formInput}
                        type="text"
                        id="input-example-1"
                        name="pin"
                        placeholder="Pin Code"
                      />
                    </div>

                    <div className={css.formGroup}>
                      <label className={css.formLabel} htmlFor="input-example-3">
                        Text Message
                      </label>
                      <textarea
                        className={css.formInput}
                        id="input-example-3"
                        name="text"
                        placeholder="Textarea"
                        rows="3"
                      />
                    </div>
                    <div className={css.inputGroup}>
                      <button className={`${css.btn} ${css.btnPrimary}`}>Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
