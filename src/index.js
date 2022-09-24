import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
//for page routing/navigation
import { BrowserRouter as Router } from 'react-router-dom';
//import your context/state provider
import { ResultContextProvider } from './contexts/ResultContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResultContextProvider>
      {/**To easily switch/navigate to pages: the following changes */}
      <Router>
        <App />
      </Router>
    </ResultContextProvider>,
  </React.StrictMode>
);

