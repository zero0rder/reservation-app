import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import App from './App'
import './index.css'
import 'antd/dist/antd.min.css'

const clientOpts = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
}

const queryClient = new QueryClient(clientOpts)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
)