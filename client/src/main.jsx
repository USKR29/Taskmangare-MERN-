import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './Context/AuthContent.jsx'
import { TaskContextProvider } from './Context/TaskContext.jsx'


createRoot(document.getElementById('root')).render(

  <StrictMode>
<AuthContextProvider>
  <TaskContextProvider>
    <App />
  </TaskContextProvider>
</AuthContextProvider>
  </StrictMode>,
)
