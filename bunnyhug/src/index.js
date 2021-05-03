import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import redux provider
import { Provider } from 'react-redux';
//import the created store in /redux
import { store, persistor } from './redux/createStore';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* make redux store available to entire app */}
    <Provider store={store}>
      <BrowserRouter>
        {/* apply persistance with store */}
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
