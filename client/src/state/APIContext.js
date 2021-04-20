import React from 'react'

// first create the context
export const APIContext = React.createContext();

// then create a provider
const APIProvider = ({ children }) => {
  // this will be where our API calls live

  return (
    <APIContext.Provider>
        {children}
      </APIContext.Provider>
  )
}

export default APIProvider;