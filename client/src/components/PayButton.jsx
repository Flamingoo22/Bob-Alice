import axios from 'axios';

const PayButton = ({ cartItems }) => {
    

    const handleCheckout = () => {
        axios.post("http://localhost:8000/api/stripe/create-checkout-session", {
            cartItems,
        }).then((res) => {
            if (res.data.url) {
                window.location.href = res.data.url;
            }
        }).catch((err) => console.log(err.message))
    }

    return (
        <>
            <button className='checkout-btn' onClick={() => handleCheckout()}>Check Out</button>
        </>
    );
};

export default PayButton;