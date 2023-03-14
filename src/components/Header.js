import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {user?.email && <span className='pr-5'>Wlcome,{user.email}</span>}
                {
                    user?.email ?
                        <button onClick={handleSignOut} className='btn btn-sm normal-case '>Log out</button>
                        :
                        <Link to="/login">
                            <button className='btn btn-sm normal-case'>
                                Log In
                            </button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Header;