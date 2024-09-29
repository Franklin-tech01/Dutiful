"use client";
import React, { useState } from 'react';
import LoginForm from '@/components/auth/login';
import RegisterForm from '@/components/auth/register';

const AuthSwitcher = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="max-w-md mx-auto mt-8">
            <div className="flex justify-center mb-6">
                <button
                    className={`px-4 py-2 rounded-l-full ${isLogin ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
                    onClick={() => setIsLogin(true)}
                >
                    Regular user
                </button>
                <button
                    className={`px-4 py-2 rounded-r-full ${!isLogin ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
                    onClick={() => setIsLogin(false)}
                >
                    Service provider
                </button>
            </div>
            {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
    );
};

export default AuthSwitcher;
