import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  const domain = "dev-7efgp1cvl6ztsk4w.us.auth0.com";
  const clientId = "BaJYMOiRsNCDSKIL9UWKPK83KSpUuEZW"
  const redirectUri = "http://localhost:3000/";
//   const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !redirectUri ) {
    throw new Error("unable to initialise auth");
  }

  const onRedirectCallback = (appState=undefined) => {
    navigate(appState?.returnTo || "/ticket");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;