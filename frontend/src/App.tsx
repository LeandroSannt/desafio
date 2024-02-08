import { AppRoutes } from './routes'
import { GlobalStyles } from './styles/global'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient'

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <AppRoutes />
      </QueryClientProvider>
    </>
  )
}

export default App
