import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import thinkinnoDataStore from './store/index.js'
import { Provider } from 'react-redux'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={thinkinnoDataStore}>
      <App/>
    </Provider>
  </BrowserRouter>
  </StrictMode>
)