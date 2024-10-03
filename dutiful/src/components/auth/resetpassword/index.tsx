import React from 'react';
import Image from 'next/image';
import Input from '@/components/global/Input';
import Button from '@/components/global/Button';
import Link from 'next/link';
const ResetPassword = () => {
    return (
        < div className="max-w-md mx-auto mt-8">
            <Link href="/auth/login">
                <Image src="/back.svg" alt='previous icon' width={32} height={32} className='my-2' />
            </Link>
            <div className='w-[452px]'>
                <h2 className='text-primary text-2xl font-bold mt-4'>Reset Password</h2>
                <p className='text-secondary my-4'>set your new password</p>
            </div>
            <form>
                <Input label="Enter new password" type="password" />
                <Input label="Re-enter new password" type="password" />
                <Link href="/auth/sent">
                    <Button text="Reset password" className="w-full h-[58px] mt-8 mb-3 bg-purple text-white " />
                </Link>
                <p className='text-slate-400 text-center my-4'>Or <Link href="/auth/register"><span className=' cursor-pointer text-purple'>Create new account</span></Link></p>
            </form>
        </div>
    );
};

export default ResetPassword;