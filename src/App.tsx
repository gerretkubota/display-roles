import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterForm from './RegisterForm';
import Users from './Users';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <div className="App">
        <Users />
        <RegisterForm />
      </div>
    </QueryClientProvider>
  );
}

export default App;
