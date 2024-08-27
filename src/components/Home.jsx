import { useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate();
    return (
        <>
            <h3>In Home Page</h3>
            {/*
                navigate('order-summary', {replace: true}
                navigate function accepts an optional object parameter
                setting replace to true will replace history

                navigate(path); // PUSH, navigate
                navigate(path, { replace: true }); // REPLACE, redirect
            */}
            <button onClick={() => navigate('order-summary')}>
                Place Order
            </button>
        </>
    )
}