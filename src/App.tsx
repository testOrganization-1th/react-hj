import AppLayout from './AppLayout'
import AppRegister from './AppRegister'
import GlobalHeader from './components/header/GlobalHeader'
import Router from './routes/Router'

export default function App(){
  return(
    <AppRegister>
      <AppLayout>
        <GlobalHeader />
        <Router />
      </AppLayout>
    </AppRegister>
  )
}