import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { setupWorker } from 'msw'
import { testHandlers } from './mocks/handler'

const worker = setupWorker(...testHandlers)

async function prepare() {
  if ('active' === import.meta.env.VITE_MSW) {
    await import('../public/mockServiceWorker.js?worker')

    return worker.start({}).then(() => {
      console.groupCollapsed('[MSW] Loaded with handlers 🎉')
      worker.printHandlers()
      console.groupEnd()
      return null
    })
  }
}

void prepare().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
