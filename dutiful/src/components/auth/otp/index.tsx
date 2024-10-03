import React from 'react';
import OtpInput from '@/components/global/OtpInput';
import Link from 'next/link';
import Button from '@/components/global/Button';
const Otp = () => {
    return (
        < div className="max-w-md mx-auto mt-8">
            <div className='flex items-center justify-center mb-8 mt-28'>
                <OtpInput />
            </div>
            <div className='w-[486px]'>
                <p className='text-sm text center text-secondary px-10 text-center  h-[51px]'>Enter OTP code that was sent to your email, <span className='font-semibold'>segunsolaru@gmail.com.</span>
                </p>
                <Link href="/auth/resetpassword">
                    <Button text="confirm OTP" className="w-full h-[58px] my-3 bg-purple text-white " />
                </Link>
            </div>
        </div>
    );
};

export default Otp;