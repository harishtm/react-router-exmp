import { useParams, useLocation, useNavigate } from "react-router-dom";

export const UserDetails = () => {

    const navigate = useNavigate()
    const params = useParams();
    const { state} = useLocation();
    console.log(params)
    return (
        <div>
            <p>Extracting Params: {params.userId}</p>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {state.name}
                        </td>
                        <td>
                            {state.username}
                        </td>
                        <td>
                            {state.email}
                        </td>
                        <td>
                            {state.address.city}, {state.address.street},  {state.address.suite},  {state.address.zipcode}
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => navigate('/users')}>Back to Users</button>
        </div>
    )
}