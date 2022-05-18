import React, { useEffect, useRef } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    // redirect after login 
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, from, navigate])
    const handleLogin = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const handleGoogleSignIn = async () => {
        await signInWithGoogle();
    }
    return (
        <>
            <div className="card lg:w-96 w-[90%] mx-auto lg:my-[150px] my-[50px] shadow-lg">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" className="input input-bordered w-full max-w-xs" required />
                            <label className="label mt-[10px]">
                                <span className="label-text">Password</span>
                            </label>
                            <input ref={passwordRef} type="text" className="input input-bordered w-full max-w-xs" required />
                            <div>
                                <p><small>forgotten password?</small></p>
                                {/* display error  */}
                                {
                                    (error || gError) && <p className='text-red-700'>{error.message}</p>
                                }
                            </div>
                        </div>
                        <div className='flex flex-col mt-[18px]'>
                            <button className='btn bg-accent text-white'>LOGIN</button>
                        </div>
                    </form>
                    <p className='text-center'>New to Doctors Portal ? <Link className='text-primary' to='/signUp'>Create new account</Link></p>
                    {/* devider  */}
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                    <div className='flex flex-col'>
                        <button onClick={() => handleGoogleSignIn()} className='btn bg-white border-2'>CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;