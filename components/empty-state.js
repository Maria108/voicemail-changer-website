import Signup from './signup';

import css from '../styles/style.scss';

export default () => (
  <div className={`${css.empty} ${css.vmHome}`}>
    <div className={css.emptyIcon}>
      <i className={`${css.icon} ${css.icon4x} ${css.iconMail}`} />
    </div>
    <p className={`${css.emptyTitle} ${css.h5}`}>Want to change your voicemail?</p>
    <p className={css.emptySubtitle}>Please enter your phone number to start.</p>
    <div className={`${css.emptyAction}`}>
      <Signup />
    </div>
  </div>
);
