import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import "@fontsource/lato"; // Defaults to weight 400
import RouterPage from './Router';



createRoot(document.getElementById('root')).render(
  <StrictMode><RouterPage></RouterPage>
  </StrictMode>,
)
