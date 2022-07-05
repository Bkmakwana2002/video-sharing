import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GoogleLogin,googleLogout } from '@react-oauth/google'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { IoMdAdd } from 'react-icons/io'
import logo from '../utils/logo.png'
import { createORGetUser } from '../utils'

const Navbar = () => {

   const user = false

    return (
        <div className='w-full flex justify-between items-center border-b-2 boder-gray-200 py-2 px-4'>
            <Link href='/'>
                <div className='w-[100px] md:w-[130px]'>
                    <Image
                        className='cursor-pointer'
                        src={logo}
                        alt='logo'
                        layout='responsive'
                        height='200px'
                    />
                </div>
            </Link>
            <div>
                Search
            </div>
            <div>
                {user? (
                    <div>Logged In</div>
                ):(
                    <GoogleLogin
                      onSuccess={(res)=>createORGetUser(res)}
                      onError={()=>console.log('error')}
                    />
                )}
            </div>
        </div>
    )
}

export default Navbar