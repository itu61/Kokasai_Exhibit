import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css'
import MonitorPage from './pages/monitor.tsx'
import LoginPage from './pages/login.tsx'
import WarningPage from "./pages/warning.tsx";
import CaptivePage from "./pages/captive.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<CaptivePage />} />
              <Route path={"/id-list"} element={<MonitorPage />} />
              <Route path={"/login"} element={<LoginPage />} />
              <Route path={"/warning"} element={<WarningPage />} />
              <Route path={"/generate_204"} element={<CaptivePage />} /> // android
              <Route path={"/hotspot-detect.html"} element={<CaptivePage />} /> // iphone
          </Routes>
      </BrowserRouter>
  </StrictMode>
)
