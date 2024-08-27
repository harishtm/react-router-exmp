import React from "react";
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
    const navigate = useNavigate()
    return (
        <>
            <h4>Order Placed</h4>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </>
    )
}