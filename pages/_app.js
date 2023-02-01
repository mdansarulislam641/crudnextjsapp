
import store from '../redux/store';
import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux';
export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
     
        <Provider store={store}>
        <Component {...pageProps} />
        </Provider>
    
    </QueryClientProvider>
  )
}
