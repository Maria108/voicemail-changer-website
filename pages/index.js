import Navbar from '../components/navbar';
import EmptyState from '../components/empty-state';
import Login from '../components/login';
import Signup from '../components/signup';

import css from '../styles/style.scss';

export default () => (
  <div>
    <Navbar />
    <EmptyState />
    <Login />
    <Signup />
  </div>
);
