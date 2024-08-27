import { NavLink } from "react-router-dom";

export const Navbar = () => {

    const navLinkStyle = ({isActive}) => {
        return {
            textDecoration: isActive ? 'none' : 'underline',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
    return (
        <nav>
            <NavLink style={navLinkStyle} to='/'>Home</NavLink>
            <NavLink style={navLinkStyle} to='/about'>About</NavLink>
        </nav>
    )
}