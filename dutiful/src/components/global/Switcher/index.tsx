"use client";
import React from "react";
import Image from "next/image";

const AuthSwitcher = () => {
    // const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="max-w-md mx-auto mt-8">
            <div className="flex justify-between w-[460px] mb-6">
                <button
                    className="border border-purple text-purple w-[206px] h-[53px] flex items-center justify-around rounded-xl font-semibold"
                // onClick={() => setIsLogin(true)}
                >
                    <Image src="/user.svg" alt="user icon" width={24} height={24} />
                    Regular user
                </button>
                <button
                    className="border border-grey w-[243px] flex items-center justify-around rounded-xl text-grey font-semibold"
                // onClick={() => setIsLogin(false)}
                >
                    <Image src="/service.svg" alt="user icon" width={24} height={24} />
                    Service provider
                </button>
            </div>
            {/* {isLogin ? <LoginForm /> : <RegisterForm />} */}
        </div>
    );
};

export default AuthSwitcher;
