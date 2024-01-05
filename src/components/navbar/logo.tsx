import React from 'react';
import Image from 'next/image';
import logoimg from '@/asset/image/logo.svg';
import Link from 'next/link'

export default function Logo(){
    return(
        <div className='px-4 max-w-full'>
            <Link href='' className='py-4 max-w-full '>
                <Image
                src={logoimg} 
                alt="logo" 
                />
            </Link>
        </div>
    )
};