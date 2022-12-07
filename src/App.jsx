import React from 'react';
import { AppRoutes } from './routes/AppRoutes';
import { AuthProvider } from './context/AuthProvider';
import './App.css';

const App = () => {
  

  return (
	<AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
