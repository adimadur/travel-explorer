import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="travel-explorer-theme">
        <App />
        <Toaster position="top-right" />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);