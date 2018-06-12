import React, { Component } from 'react';
import Navbar from '../components/navbar';
import VMChangerForm from '../components/vmchanger-form';
import css from '../styles/style.scss';

export default class Account extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className={css.container}>
          <div className={css.columns}>
            <div className={`${css.column} ${css.col12}`}>
              <div className={css.columns}>
                <div className={`${css.column} ${css.col8} ${css.colMxAuto}`}>
                  <div className={`${css.column} ${css.col8} ${css.colMxAuto}`}>
                    <h2 className={`${css.vmFormHeader}`} >
                      <i className={`${css.vmIcon} ${css.icon} ${css.icon} ${css.iconMail}`} />
                      Voicemail changing form
                    </h2>
                  </div>
                  <VMChangerForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
