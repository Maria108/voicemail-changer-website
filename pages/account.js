import React, { Component } from 'react';
import Navbar from '../components/navbar';
import VMChangerForm from '../components/vmchanger-form';
import EmptyState from '../components/empty-state';
import css from '../styles/style.scss';

export default class Account extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className={css.container}>
          <div className={css.columns}>
            <div className={`${css.column} ${css.col12} ${css.customContainer}`}>
              <EmptyState />
              <VMChangerForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
