import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
// import { I18nextProvider } from "react-i18next";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css"

import Router from "./router";
// import i18n from "./translation";

import "bulma/css/bulma.css";
import axios from "axios";

import { Provider } from 'react-redux';
import { store } from './app/store';
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

axios.defaults.withCredentials = true;

const App = () => (
  <BrowserRouter basename={'/labfis'}>
    <Provider store={store}>
      <Router />     
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
