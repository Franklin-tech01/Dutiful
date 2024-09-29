"use client";
import React from 'react';
import Input from '@/components/global/Input'; // Assuming Input is in the same folder
import Button from "@/components/global/Button"; // Your existing button component
import AuthSwitcher from '@/components/global/Switcher';
const LoginForm = () => {
    return (
        <div className="max-w-md mx-auto mt-8">
            <div>
                <AuthSwitcher />
            </div>
            <p className='py-2 text-sm text-gray-400'>Jumb back right in</p>
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form>

                <Input label="Email" type="email" />
                <Input label="Password" type="password" />
                <div className="mt-6">
                    <Button text="Login" className="w-full bg-[#532F82] " />
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
