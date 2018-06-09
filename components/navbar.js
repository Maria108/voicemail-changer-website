import Link from 'next/link';

import css from '../styles/style.scss';

export default () => (
  <header className={`${css.navbar} ${css.bgDark}`}>
    <section className={css.navbarSection}>
      <a href="/" className={`${css.navbarBrand} ${css.mx2} ${css.textLight}`}>
        Voicemail Changer
      </a>
      <Link href="/account">
        <a className={`${css.textLight} ${css.mx2}`}>Account</a>
      </Link>
    </section>
  </header>
);
