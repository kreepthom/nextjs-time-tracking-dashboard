
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { store } from '../store/store'
import { Provider } from 'react-redux'

import '../../globals.css'


function MyApp({ Component, pageProps }) {

  const {push} = useRouter()

  useEffect(() => { 
    push('/daily')
  },[])
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider >
  )
}

export default MyApp
