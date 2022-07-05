import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'

const Home: NextPage = () => {
  return (
    <div className=''>
       HELLO
    </div>
  )
}

export const getServerSideProps = async ()=>{
    const response = await axios.get(`http://localhost:3000/api/post`)
    console.log(response.data.name)

    return{
      props :{}
    }
}

export default Home
