import React from 'react';
import AppContainer from './src/navigation/AppContainer';
import InputValidation from './src/screens/InputValidation/InputValidation';
import FetchApi from './src/screens/Requests/FetchApi';

export default function App() {
  return <AppContainer isAuth={false} />;
  // return <FetchApi />;
}
