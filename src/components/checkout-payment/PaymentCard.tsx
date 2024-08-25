import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { t } from "i18next";

interface PaymentCardProps {
    data: {
        name: string,
        country: string,
        street: string,
        town: string,
        zipCode: string,
        phone: string,
        email: string,
    },
    orderNotes: string
}

const PaymentCard = ({data, orderNotes}: PaymentCardProps) => {
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:5173/checkout-payment/success',
                payment_method_data: {
                    billing_details: {
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        address: {
                            country: data.country,
                            postal_code: data.zipCode,
                            line1: data.street,
                            city: data.town,
                        },
                    },
                    metadata: {
                        order_notes: orderNotes
                    },
                },
            }
        });
    };

    return (
        <div className='py-20 max-w-[1255px] px-[20px]'>
            <form id="payment-form" onSubmit={handleSubmit}>
                <PaymentElement id="payment-element"/>
                <button disabled={!stripe || !elements} className={'bg-blue-500 hover:bg-blue-400 transition-all text-white py-6 w-full mt-10 rounded-md'}>
                    {t('Submit Payment')}
                </button>
            </form>
        </div>
    )
}

export default PaymentCard;