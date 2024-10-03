import React from 'react';
import Image from 'next/image';
import Input from '@/components/global/Input';
import Button from '@/components/global/Button';
import Link from 'next/link';


const ForgotPassword = () => {
    return (
        < div className="max-w-md mx-auto mt-8">
            <Link href="/auth/login">
                <Image src="/back.svg" alt='previous icon' width={32} height={32} className='my-2' />
            </Link>
            <div className='w-[452px]'>
                <h2 className='text-primary text-2xl font-bold mt-4'>Forgot password</h2>
                <p className='text-secondary my-4'>Enter your email and well send you a mail on how to reset your password</p>
            </div>
            <form>
                <Input label="Email" type="email" />
                <Link href="/auth/sent">
                    <Button text="Send Email" className="w-full h-[58px] my-3 bg-purple text-white " />
                </Link>
                <p className='text-slate-400 text-center my-4'>Or <Link href="/auth/login"><span className=' cursor-pointer text-purple'>Login</span></Link></p>
            </form>
        </div>
    );
};

export default ForgotPassword;