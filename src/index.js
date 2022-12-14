import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserNameProvider } from './context/usernamecontext';
import { ContentContextProvider } from './context/contentscontext';
import { ContentBoxClickContextProvider } from './context/contentboxclickcontext';
import { CategoryNameContextProvider } from './context/categorynamecontext';
import { CategoryContentIndexeContextProvider } from './context/categroycontentindexcontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContentContextProvider>
      <UserNameProvider>
        <ContentBoxClickContextProvider>
          <CategoryNameContextProvider>
            <CategoryContentIndexeContextProvider>
              <App />
            </CategoryContentIndexeContextProvider>
          </CategoryNameContextProvider>
        </ContentBoxClickContextProvider>
      </UserNameProvider>
    </ContentContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
