import { useEffect } from 'react';
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { Head, Link, useForm } from '@inertiajs/react'
import React from 'react'

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        // console.log(data);
        post(route('register'));
    };

  return (
    <>
    <Head title="Sign Up" />
    <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
        <div className="fixed top-[-50px] hidden lg:block">
            <img src="/images/signup-image.png"
                className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
        </div>
        <div className="py-16 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
            <div>
                <img src="/images/moonton-white.svg" alt=""/>
                <div className="my-[30px]">
                    <div className="font-semibold text-[26px] mb-3">
                        Sign Up
                    </div>
                    <p className="text-base text-[#767676] leading-7">
                        Explore our new movies and get <br/>
                        the better insight for your life
                    </p>
                </div>
                <form className="w-[370px]" onSubmit={submit}>
                    <div className="flex flex-col gap-6">
                        <div>
                            <InputLabel forInput="name" value="Full Name"/>
                            <TextInput  type="text" name="name" placeholder="Your fullname..." value={data.name} isFocused={true} handleChange={onHandleChange} required/>
                            <InputError message={errors.name} className="mt-2"/>
                        </div>
                        <div>
                            <InputLabel forInput="email" value="Email Address"/>
                            <TextInput  type="email" name="email" placeholder="Your Email Address" value={data.email} handleChange={onHandleChange} required/>
                            <InputError message={errors.email} className="mt-2"/>
                        </div>
                        <div>
                            <InputLabel forInput="password" value="Password"/>
                            <TextInput  type="password" name="password" placeholder="Your Password" value={data.password} handleChange={onHandleChange} required/>
                            <InputError message={errors.password} className="mt-2"/>
                        </div>
                        <div>
                            <InputLabel forInput="password_confirmation" value="Confirm Password"/>
                            <TextInput  type="password" name="password_confirmation" placeholder="Your Password" value={data.password_confirmation} handleChange={onHandleChange} required/>
                            <InputError message={errors.password_confirmation} className="mt-2"/>
                        </div>
                    </div>
                    <div className="grid space-y-[14px] mt-[30px]">
                        
                        <PrimaryButton type='submit' processing={processing}>
                            <span className="text-base font-semibold">
                                Sign Up
                            </span>
                        </PrimaryButton>
                        
                        <Link href={route('login')}>
                            <PrimaryButton variant="light-outline">
                                <span className="text-base font-semibold">
                                    Sign In to My Account
                                </span>
                            </PrimaryButton>
                        </Link>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
