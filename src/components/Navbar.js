import { NavLink } from "react-router-dom";

export const Navbar = () => {

    const navLinkStyle = ({isActive}) => {
        return {
            textDecoration: isActive ? 'none' : 'underline',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
    return (
        <nav className='primary-nav'>
            <NavLink style={navLinkStyle} to='/'>Home</NavLink>
            <NavLink style={navLinkStyle} to='/about'>About</NavLink>
            <NavLink style={navLinkStyle} to='/products'>
                Products
            </NavLink>
            <NavLink style={navLinkStyle} to='/users'>
                Users
            </NavLink>
        </nav>
    )
}