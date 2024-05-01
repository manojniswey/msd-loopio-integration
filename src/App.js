import logo from './logo.svg';
import './App.css';
import {
  AuthenticatedTemplate,
  MsalProvider,
  UnauthenticatedTemplate,
  useMsal,
} from '@azure/msal-react'
import { loginRequest } from './auth-config'

const WrapperView = () => {
  const { instance } = useMsal()
  const activeAccount = instance.getActiveAccount()

  const handleRedirect = () => {
    instance
      .loginRedirect({
        ...loginRequest,
        prompt: 'create',
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <AuthenticatedTemplate>
        {activeAccount ? <p>Authenticated Successfully!</p> : null}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <button onClick={handleRedirect}>Signup</button>
      </UnauthenticatedTemplate>
    </div>
  )
}

function App({ instance }) {
  return (
    <MsalProvider instance={instance}>
      <WrapperView />
    </MsalProvider>
  )
}

export default App;
