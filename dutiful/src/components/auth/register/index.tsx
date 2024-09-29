"use client";
import React from 'react';
import Input from '@/components/global/Input';
import Button from '@/components/global/Button';
import AuthSwitcher from '@/components/global/Switcher';

const RegisterForm = () => {
    return (
        <div className="max-w-md mx-auto mt-8">
            <div>
                <AuthSwitcher />
            </div>
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <form>
                <Input label="Full name" type="text" />
                <Input label="Email" type="email" />
                <Input label="Phone number" type="tel" />
                <Input label="Password" type="password" />
                <Input label="Re-enter password" type="password" />
                <div className="flex items-center mt-4">
                    <input type="checkbox" className="mr-2" />
                    <label>I agree to the terms and conditions</label>
                </div>
                <div className="mt-6">
                    <Button text="Sign up" className="w-full" />
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
