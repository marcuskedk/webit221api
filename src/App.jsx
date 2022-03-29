import React from 'react';

// STYLE
import "./assets/scss/Style.scss";

// COMPONENTS
import Layout from './components/layout/Layout';

// PAGES
import Home from "./components/pages/Home";

const App = () => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;