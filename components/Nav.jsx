"use client"

import Link from 'next/link'
import Image from 'next/image'
import {useState ,useEffect} from 'react'
import {signIn, signOut, getProviders, useSession} from 'next-auth/react'

const Nav = () => {
  // TODO
  const {data:session} = useSession();

  const [providers,setProviders] = useState(null);
  const [toggleDropdown,setToggleDropdown] = useState(false)

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setUpProviders();
  }, [])
  
  
  return (
    <nav className='flex-between w-full mb-8 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image src='/assets/images/logo.svg' alt='Promptopia Logo' width={50} height={50} />
            <Image src='/assets/images/logo-text.svg' alt='Promptopia Logo' width={240} height={60}  />
        </Link>
        {/* {alert(providers)} */}
        {/* Desktop navigation */}
        <div className='sm:flex hidden'>
          {session?.user?(
            <div className='flex gap-3 md:gap-5'>
              <Link href='/create-prompt' className='black_btn'>Create Post</Link>
              <button type='button' onClick={signOut} className='outline_btn'>Sign Out</button>
              <Link href='/profile'>
                <Image src={session?.user.image} width={37} height={37} className='rounded-full' alt='profile' />
              </Link>

            </div>
          ):(
            <>
              {providers && Object.values(providers).map((provider)=>{
                return <button type='button' key={provider.name} onClick={()=>{signIn(provider.id)}} className='black_btn'>Sign In</button>
              })}
            </>
          )}
        </div>

        {/* Mobile navigation */}
        <div className='sm:hidden flex relative'>
          {session?.user?(
            <div className='flex'>
              <Image src={session?.user.image} width={37} height={37} className='rounded-full' alt='profile' onClick={()=>{setToggleDropdown((prev)=>!prev)}} />

              {toggleDropdown && (
                <div className='dropdown'>
                  <Link href='/profile' className='dropdown_link' onClick={()=>{setToggleDropdown(false)}}>My Profile</Link>
                  <Link href='/create-prompt' className='dropdown_link' onClick={()=>{setToggleDropdown(false)}}>Create Prompt</Link>
                  <button type='button' onClick={()=>{setToggleDropdown(false); signOut();}} className='mt-3 w-full black_btn'>Sign Out</button>
                </div>
              )}
            </div>
          ):(
            <>
              {providers && Object.values(providers).map((provider)=>{
                return <button type='button' key={provider.name} onClick={()=>{signIn(provider.id)}} className='black_btn'>Sign In</button>
              })}
            </>
          )}
        </div>
        
    </nav>
  )
}

export default Nav