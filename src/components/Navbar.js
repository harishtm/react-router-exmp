import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

export const Navbar = () => {

    const navLinkStyle = ({isActive}) => {
        return {
            textDecoration: isActive ? 'none' : 'underline',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }

    const auth = useAuth();

    return (
        <nav className='primary-nav'>
            <NavLink style={navLinkStyle} to='/'>Home</NavLink>
            <NavLink style={navLinkStyle} to='/about'>About</NavLink>
            <NavLink style={navLinkStyle} to='/products'>
                Products
            </NavLink>
            <NavLink style={navLinkStyle} to='/profile'>
                Profile
            </NavLink>
            <NavLink style={navLinkStyle} to='/users'>
                Users
            </NavLink>
            {
                !auth.user && (
                    <NavLink style={navLinkStyle} to='/login'>
                        Login
                    </NavLink>
                )
            }
        </nav>
    )
}