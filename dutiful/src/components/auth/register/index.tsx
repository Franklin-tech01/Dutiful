/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react';
import Input from '@/components/global/Input';
import Button from '@/components/global/Button';
import AuthSwitcher from '@/components/global/Switcher';

const RegisterForm = () => {
    return (
        <div className="max-w-md mx-auto mt-8">
            <div>
                <p className='text-sm text-slate-400 my-1'>sign up for free</p>
                <h2 className="text-2xl font-bold">Get started</h2>
            </div>
            <AuthSwitcher />
            <form>
                <Input label="Full name" type="text" />
                <Input label="Email" type="email" />
                <Input label="Phone number" type="tel" />
                <Input label="Password" type="password" />
                <Input label="Re-enter password" type="password" />
                <div className="flex items-center mt-4">
                    <input type="checkbox" className="mr-2" />
                    <label>I agree to Dutiful's <span className='text-purple font-semibold cursor-pointer underline'>terms and conditions</span> </label>
                </div>
                <div className="mt-6">
                    <Button text="Sign up" className="w-full bg-purple text-white h-[58px] font-semibold my-2" />
                </div>
                <p className='text-slate-400 text-center mb-4'>Already have an account? <span className=' cursor-pointer text-purple'>Login</span></p>
            </form>
        </div>
    );
};

export default RegisterForm;
