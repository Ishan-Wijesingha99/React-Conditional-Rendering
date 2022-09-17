import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { UnreadMessages } from './components/UnreadMessages';
import { UnreadMessagesChallenge } from './components/UnreadMessagesChallenge';
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <UnreadMessages /> */}

    <UnreadMessagesChallenge />

  </React.StrictMode>
)

