import React from 'react';
import ContactList from './src/components/ContactList';
import store from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <ContactList />
    </Provider>
  );
}


