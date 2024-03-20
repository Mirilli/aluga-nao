"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';


const Nav = () => {
    const isUserLoggedIn = true;

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
            console.log(response);
        }
        setProviders()
    }, [])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>

      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/icons/blue-logo.png'
          alt='Logo ALUGA NÃO'
          width={30}
          height={30}
          className='object-contain'
          
          
        />
        <p className="blue_gradient font-bold">ALUGA NÃO</p>
        </Link>

        {/* desktop Navigation */}
        <div className='sm:flex hidden'>
            {isUserLoggedIn ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href='/create-prompt' className='black_btn'>  
                        DENUNCIE
                    </Link>

                    <button type='button' onClick={signOut} className='outline_btn'>
                        SAIR
                    </button>
                    <Link href='/profile'>
                        <Image
                            src='/assets/images/logo.svg'
                            width={37}
                            height={37}
                            className='rounded-full'
                            alt='Perfil'
                        />
                    </Link>
                </div>
            ): (
                <>
                    {providers && Object.values(providers).map((provider) => (
                        <button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='black_btn'>
                            ENTRAR
                        </button>
                    ))}
                </>
            )}
        </div>
        
        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative'>
            {isUserLoggedIn ? (
                <div className='flex'> 
                    <Image
                        src='/assets/images/logo.svg'
                        width={37}
                        height={37}
                        className='rounded-full'
                        alt='logo'
                        onClick={() => setToggleDropdown((prev) => !prev)}
                    />

                    {toggleDropdown && (
                        <div className='dropdown'>
                            <Link
                                href='/profile'
                                className='dropdown_link'
                                onClick={() => setToggleDropdown(false)}
                            >
                                Perfil
                            </Link>
                            <Link
                                href='/denuncie'
                                className='dropdown_link'
                                onClick={() => setToggleDropdown(false)}
                            >
                                Denuncie
                            </Link>
                            <button
                                type='button'
                                onClick={() => {
                                    setToggleDropdown(false);
                                    signOut();
                                }}
                                className='mt-5 w-full black_btn'
                            >
                                Sair
                            </button>
                        </div>
                    )}
                </div> 
            ): (
                <>
                    {providers && Object.values(providers).map((provider) => (
                        <button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='black_btn'>
                            ENTRAR
                        </button>
                    ))}
                </>
            )}
        </div>


    </nav>
  )
}

export default Nav