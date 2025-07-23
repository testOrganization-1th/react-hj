import AppLayout from './AppLayout'
import AppRegister from './AppRegister'
import GlobalHeader from './components/header/GlobalHeader'

export default function App(){
  return(
    <AppRegister>
      <AppLayout>
        <GlobalHeader />
      </AppLayout>
    </AppRegister>
  )
}