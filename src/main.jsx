import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Todo } from './Components/Todo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Todo />
  </StrictMode>,
)