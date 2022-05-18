import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = ({ totalTask }) => {
    const [user] = useAuthState(auth);
    return (
        <section className='lg:mx-[150px]'>
            <div className="navbar">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Protected Todo</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><button onClick={() => signOut(auth)} className="btn btn-accent text-white">Log Out</button></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Header;