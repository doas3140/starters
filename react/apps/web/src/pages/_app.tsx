import '../styles/tailwind.css'

// eslint-disable-next-line
const MyApp = ({Component, pageProps}: any) => {
  return (
    <Component {...pageProps}>
      {/* eslint-disable-next-line */}
      {pageProps.children}
    </Component>
  )
}

// eslint-disable-next-line
function ProviderWrapper(props: any) {
  return (
    <MyApp {...props} />
  )
}

// eslint-disable-next-line
function ReduxApp(props: any) {
  return (
    <>
      <ProviderWrapper {...props} />
    </>
  )
}

export default ReduxApp
