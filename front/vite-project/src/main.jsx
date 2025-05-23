import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux"
import { RouterProvider } from 'react-router'
import store from './redux/store.js'
import router from './router/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>

  </StrictMode>,
)
