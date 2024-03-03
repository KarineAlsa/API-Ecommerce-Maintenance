import Stripe from 'stripe';
import PaymentMethodService from "../../Domain/Port/PaymentInterface";
import dotenv from 'dotenv';
dotenv.config();

const secret = process.env.STRIPE_SECRET_KEY;
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
        }catch(e){
            return false;
        }
    }
    async cancel(paymentMethod: number): Promise<boolean> {
        return Promise.resolve(true);
    }
}