import {
  Switch,
  Link,
  Redirect,
  BrowserRouter as Router,
  Route,
  useParams,
} from 'react-router-dom';

import styles from './App.css';

function RGB() {
  const { r, g, b } = useParams();
  return (
    <div
      className={styles.fill}
      style={{ background: `rgb(${r}, ${g}, ${b})` }}
    >
      <p>{`rgb(${r},${g},${b})`}</p>
    </div>
  );
}

function ScreenColor() {
  return (
    <div>
      <Switch>
        <Route path="/rgb/:r/:g/:b">
          <RGB />
        </Route>
      </Switch>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <header>
        <Route exact path="/">
          <Redirect to="/rgb/234/135/182" />
        </Route>
        <ul>
          <Link to="/rgb/144/70/207">Dark Orchid</Link>
          <Link to="/rgb/204/89/210">Fuchsia Crayola</Link>
          <Link to="/rgb/234/135/182">Persian Pink</Link>
        </ul>
      </header>

      <ScreenColor />
    </Router>
  );
}
