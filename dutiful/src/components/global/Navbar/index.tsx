import React from 'react';
import Button from '@/components/global/Button';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className='flex items-center justify-around'>
            <Image src="/logo.svg" alt='brand logo' width={120} height={52} />
            <div className='flex justify-between'>

                <ul className='flex items-center'>
                    <Link href="">
                        <li className='text-[#686868] py-[33px] px-[20px] text-[18px]'>Business Directory</li>
                    </Link>
                    <Link href="">
                        <li className='text-[#686868] py-[33px] px-[20px] text-[18px]'>Features</li>
                    </Link>
                    <Link href="">
                        <li className='text-[#686868] py-[33px] px-[20px] text-[18px]'>Pricing</li>
                    </Link>
                    <Link href="">
                        <li className='text-[#686868] py-[33px] px-[20px] text-[18px]'>Blog</li>
                    </Link>
                </ul>
                <div className='items-center flex'>
                    <Link href="">
                        <p className='text-2xl text-[#1E1E4B] px-5 py-8'>Login</p>
                    </Link>
                    <Button text='Sign Up' className='border-2 border-[#603F8B]  text-[#603F8B] w-[175px] h-[59px]' />
                </div>
            </div>

        </div>
    );
};

export default Navbar;