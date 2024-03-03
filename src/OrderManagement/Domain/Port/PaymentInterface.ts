
export default interface PaymentMethodService {
    pay(amount: number, currency:string ): Promise<any>;
    cancel(id: number): Promise<boolean>;
}