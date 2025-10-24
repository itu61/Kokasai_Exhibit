import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css'
import MonitorPage from './pages/monitor.tsx'
import LoginPage from './pages/login.tsx'
import WarningPage from "./pages/warning.tsx";
import {AppProvider} from "./AppContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <AppProvider>
          <Routes>
              <Route path={"/id-list"} element={<MonitorPage />} />
              <Route path={"/login"} element={<LoginPage />} />
              <Route path={"/warning"} element={<WarningPage />} />
          </Routes>
          </AppProvider>
      </BrowserRouter>

  </StrictMode>
)
