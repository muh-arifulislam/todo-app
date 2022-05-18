import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gloading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const [error1, setError1] = useState('');
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const navigate = useNavigate();

    if (user || gUser) {
        console.log(user || gUser);
        navigate('/');
    }
    const handleSignUp = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });

        }
        else {
            setError1('Your password did not matched!')
        }

    }
    const handleGoogleSignIn = async () => {
        await signInWithGoogle();

    }
    return (
        <>
            {
                loading || gloading ? <Loading></Loading> : <div className="card lg:w-96 w-[90%] mx-auto lg:my-[150px] my-[50px] shadow-lg">
                    <div className="card-body">
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="name">
                                    <span className="label-text">Name</span>
                                </label>
                                <input ref={nameRef} type="text" className="input input-bordered w-full max-w-xs" required />
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={emailRef} type="email" className="input input-bordered w-full max-w-xs" required />
                                <label className="label mt-[10px]">
                                    <span className="label-text">Password</span>
                                </label>
                                <input ref={passwordRef} type="text" className="input input-bordered w-full max-w-xs" required />
                                <label className="label mt-[10px]">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input ref={confirmPasswordRef} type="text" className="input input-bordered w-full max-w-xs" required />
                                <div>
                                    {/* display error  */}
                                    {
                                        error && <p className='text-red-700'>{error?.message}</p>
                                    }
                                    {
                                        error1 && <p className='text-red-700'>{error1}</p>
                                    }
                                </div>
                            </div>
                            <div className='flex flex-col mt-[18px]'>
                                <input type="submit" className='btn bg-accent text-white' value='SIGN UP' />
                            </div>
                        </form>
                        <p className='text-center'>Already have account ? <Link className='text-primary' to='/login'>Please Login</Link></p>
                        {/* devider  */}
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                        </div>
                        <div className='flex flex-col'>
                            <button onClick={() => handleGoogleSignIn()} className='btn bg-white border-2'>CONTINUE WITH GOOGLE</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default SignUp;