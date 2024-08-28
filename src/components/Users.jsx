import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom";


export const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data)
        })
        .catch(error => {
            console.error('Error fetching users!!', error)
        })
    }, []);

    return (
        <div>
            <h4>Users List</h4>
            {
                users.map(user => (
                    <div key={user.id}>
                        <Link
                            to={`${user.id}`}
                            state={{...user}}
                        >
                            {user.name}
                        </Link>
                        <br/>
                    </div>
                ))
            }
            <Outlet/>
        </div>
    )
}