import Stripe from 'stripe';
import PaymentMethodService from "../../Domain/Port/PaymentInterface";
import dotenv from 'dotenv';
dotenv.config();

const secret = "sk_test_51Oq5wGCvwnlH1kxU6opunotgxGYBByyjogacrmO48NAzyTwMh7AziOExMfSDcw1ZGnEkUbNlTMIWdSnh5EmD1Kp600zyn4eWK3";
const stripe = new Stripe(secret!, {
    apiVersion: '2023-10-16',
});

export default class PaymentMethodStripeService implements PaymentMethodService {
    async pay(amount:number,currency:string ): Promise<boolean> {
        try{
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount, // Monto en centavos
                currency: currency,
                payment_method_types: ['card'],
            });

            await stripe.paymentIntents.cancel(paymentIntent.id);
            return true;
        }catch(e:any){
            console.log(e)
            return false;
        }
    }
    async cancel(paymentMethod: number): Promise<boolean> {
        return Promise.resolve(true);
    }
}