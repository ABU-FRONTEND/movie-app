import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
export const queryClient = new QueryClient(
    {
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    }
)
ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
         <App />
    </BrowserRouter>
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
