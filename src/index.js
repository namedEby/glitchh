import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Login from './components/login/login';
import Register from './components/Register/register'
import Landingpg from './components/mainpage/landingpg';
import Navbar from './components/navbar/navbar';
import Dashboard from './components/dashboard/dashboard';
import Post from './components/post/post';
import Notification from './components/notification/notification';
import Notificationitem from './components/notification/notificationitem';
import Settings from './components/settings_notifications/settings';
import SettingsNotifications from './components/settings_notifications/settingsNotifi';
import CollapsibleFaq from './components/faq/faq'
import CollapsibleLoginActivity from './components/loginActivity/loginActivity'

import SimpleMapPage from './components/loginActivity/mapComponent';
import SearchPage from './components/searchpage/searchpage';
import SimpleMap from './components/loginActivity/mapComponent';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SearchPage/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
