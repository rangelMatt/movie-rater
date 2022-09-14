// import React, { useState, createContext } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App';
// import Auth from './components/auth'
// import reportWebVitals from './reportWebVitals';
// import { Route, BrowserRouter, Routes } from 'react-router-dom';

// export const TokenContext = createContext(null);

// function Router() {

//   const [token, setToken] = useState('');

//   return (
//   <React.StrictMode>
//     <TokenContext.Provider value={{token, setToken}}>
//       <BrowserRouter>
//         <Routes>
//           <Route exact path="/" element={<Auth />} />
//           <Route exact path="/movies" element={<App />} />
//         </Routes>
//       </BrowserRouter>
//     </TokenContext.Provider>
//   </React.StrictMode>
// )
// }

// const container = document.getElementById('root');
// const root = createRoot(container);

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Router />,
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();

// ****************************************************************

import React from 'react';
// import ReactDOM  from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Auth from './components/auth'
// import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { StrictMode } from 'react';
import { CookiesProvider } from 'react-cookie';


function Router() {

  return (
    <StrictMode>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/movies" element={<App />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </StrictMode>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />,
);
export default Router;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();