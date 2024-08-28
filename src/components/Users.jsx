import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Outlet, useSearchParams } from "react-router-dom";


export const Users = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [users, setUsers] = useState([]);
    const [disabledView, setDisabledView] = useState(true);

    console.log("To print filter params", searchParams.get('filter'))

    const fetchUsers = ()  => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data)
        })
        .catch(error => {
            console.error('Error fetching users!!', error)
        })
    };

    useEffect(() => {
        fetchUsers()
    }, []);

    const handleReset = () => {
        fetchUsers()
        setDisabledView(true)
        setSearchParams({})
    }

    const handleFilterZipUser = () => {
        setUsers(users.filter(item => item.address.zipcode.length < 6))
        setDisabledView(false)
        setSearchParams({filter: 'zip'})
        console.log(users)
    }

    return (
        <div>
            <h4>Users List</h4>
            <button onClick={handleFilterZipUser}>Filter User With Zip Code less than 6 digit</button>
            <button onClick={handleReset} disabled={disabledView}>Reset Filter</button>
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
