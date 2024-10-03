/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react';
import Input from '@/components/global/Input'; // Assuming Input is in the same folder
import Button from "@/components/global/Button"; // Your existing button component
import Link from 'next/link';



// import AuthSwitcher from '@/components/global/Switcher';
const LoginForm = () => {


    return (
        <div className="max-w-md mx-auto mt-8">
            <div>
                {/* <AuthSwitcher /> */}
            </div>
            <p className='py-2 text-sm text-slate-400'>Jumb back right in</p>
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form>

                <Input label="Email" type="email" />
                <Input label="Password" type="password" />
                <Link href="/auth/forgotpassword">
                    <p className='text-purple text-end '>Forgot password?</p>
                </Link>
                <div className="mt-6">
                    <Button text="Login" className="w-full h-[58px] bg-purple text-white " />
                </div>
                <p className='text-slate-400 text-center my-4'>Don't have an account? <Link href="/auth/register"><span className=' cursor-pointer text-purple'>Sign Up</span></Link></p>
            </form>
        </div>
    );
};

export default LoginForm;
