import '../styles/tailwind.css'

const MyApp = ({Component, pageProps}: any) => {
  return (
    <Component {...pageProps}>
      {pageProps.children}
    </Component>
  )
}

function ProviderWrapper(props: any) {
  return (
    <MyApp {...props} />
  )
}

function ReduxApp(props: any) {
  return (
    <>
      <ProviderWrapper {...props} />
    </>
  )
}

export default ReduxApp
