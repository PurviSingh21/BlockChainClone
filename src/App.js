
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate'
import { AppRoutes } from './AppRoutes'

function App() {

  return (
    <Router>
      <Auth0ProviderWithNavigate>
      <AppRoutes/>
      {/* <Toaster visibleToasts={1} position='top-right' richColors /> */}
      </Auth0ProviderWithNavigate>
    </Router>
  );
}

export default App;