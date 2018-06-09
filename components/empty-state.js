import css from '../styles/style.scss';

export default () => (
  <div className={css.empty}>
    <div className={css.emptyIcon}>
      <i className={`${css.icon} ${css.icon4x} ${css.iconMail}`} />
    </div>
    <p className={`${css.emptyTitle} ${css.h5}`}>Want to change your voicemail?</p>
    <p className={css.emptySubtitle}>Click the button to start.</p>
    <div className={css.emptyAction}>
      <button className={`${css.btn} ${css.btnPrimary}`}>Login</button>
    </div>
  </div>
);
