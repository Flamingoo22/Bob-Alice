import axios from 'axios';

const PayButton = ({ cartItems }) => {
    

    const handleCheckout = () => {
        if(cartItems.length <= 0){
            return;
        }
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
            <button onClick={() => handleCheckout()} className='checkout-btn'>Check Out</button>
        </>
    );
};

export default PayButton;