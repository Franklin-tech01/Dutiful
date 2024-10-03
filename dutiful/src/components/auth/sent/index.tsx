import React from 'react';
import Image from 'next/image';
import Button from '@/components/global/Button';
import Link from 'next/link';

const SentEmail = () => {
    return (
        < div className="max-w-md mx-auto mt-8">
            <div className='flex items-center justify-center'>

                <Image src="/succ.svg" alt='email icon' width={80} height={80} />
            </div>
            <div className='w-[408px] my-4  flex  items-center justify-center text-center text-secondary'>
                <p className='text-sm'>An OTP code has been sent to <span className='font-semibold'>segunsolaru@gmail.com.</span>
                    Check your email to get the code</p>
            </div>
            <Link href="/auth/otp">
                <Button text="Next" className=" my-3 h-[58px] bg-purple w-full text-white " />
            </Link>
        </div>
    );
};

export default SentEmail;