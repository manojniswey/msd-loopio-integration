const { LogLevel } = require('@azure/msal-browser')

export const msalConfig = {
  auth: {
    clientId: 'd1a46e11-ef06-43b7-8b8f-4c8b04470b14',
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: '/', //http://localhost:3000
    postLogoutRedirectUri: '/',
    navigateToLoginRequestUrl: false
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    allowNativeBroker: false, // Disables WAM Broker
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message)
            return
          case LogLevel.Info:
            console.info(message)
            return
          case LogLevel.Verbose:
            console.debug(message)
            return
          case LogLevel.Warning:
            console.warn(message)
            return
          default:
            return
        }
      },
    },
  },
}


export const loginRequest = {
    scopes: ["user.read"] // ["https://msidlabb2c.onmicrosoft.com/msidlabb2capi/read"]
};