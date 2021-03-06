import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { GoogleOAuthProvider } from '@react-oauth/google'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  if (isSSR) return null

  return <GoogleOAuthProvider clientId="128885864306-uvdvfkabqr9p7f7gp0d9anrjcbakds3i.apps.googleusercontent.com">
   <div className='xl:w-[1200px] m-auto h-[100vh] overflow-hiddenn'>
   <Navbar />
    <div className="flex gap-6 md:gap-20">
      <div className='h-[92vh] overflow-hidden xl:overflow-auto'>
        <Sidebar />
      </div>
      <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
        <Component {...pageProps} />
      </div>
    </div>
   </div>
  </GoogleOAuthProvider>
}

export default MyApp
