import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./assets/scss/app.scss";

import Header from "./layout/header";
import Footer from "./layout/footer";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Suspense>
            <Header />
              {props.children}
            <Footer />
          </Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
