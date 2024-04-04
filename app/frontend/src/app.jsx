import "./assets/css/app.css";

import { Router, Route } from "@solidjs/router";
import { render } from "solid-js/web";

import Header from "./layouts/header.jsx";
import Footer from "./layouts/footer.jsx";

import Metrics from "./pages/metrics";
import NotFound from "./pages/not_found.jsx";

/**
 * Renders the layout of the app.
 * @function AppLayout
 * @param {object} props - the props passed to the component
 * @return {JSX.Element} the layout of the app
 */
function AppLayout(props) {
  return (
    <>
      <Header />
      <main class="app-content">{props.children}</main>
      <Footer />
    </>
  );
}

/**
 * Renders the main application component with defined routes using Solid Router.
 * @function App
 * @return {JSX} The rendered Solid component
 */
function App() {
  return (
    <Router root={AppLayout}>
      <Route path="/" component={Metrics} />
      <Route path="/metrics" component={Metrics} />
      <Route path="/*" component={NotFound} />
    </Router>
  );
}

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(() => <App />, root);
