// import { SnackProvider } from 'atoms/snackbar'
import React from 'react'
// import { useSelector, Provider } from 'react-redux'
// import store from 'redux/store'
// import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core'

export const StoryWrapper = ({ children }: any) => (
  <>
    {children}
  </>
  // <ThemeProvider theme={createTheme({})}>
  //   <CssBaseline />
  //   <SnackProvider>
  //     <Provider store={store}>{children}</Provider>
  //   </SnackProvider>
  // </ThemeProvider>
)

export default StoryWrapper
