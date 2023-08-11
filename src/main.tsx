import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { RegisterUser } from './RegisterUser'
import { MyPage } from './MyPage'

  ; (async () => {
    if (import.meta.env.VITE_MOCKED_API === 'true') {
      const { buildMswWorker } = await import('./testing-util/msw-util')
      const worker = buildMswWorker()
      await worker.start()
    }

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/register-user" element={<RegisterUser />} />
            <Route path="/my-page" element={<MyPage />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>,
    )

  })()