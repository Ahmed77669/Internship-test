import Payment from '@/components/payment/Payment';
import CheckStatus from '@/components/checkStatus/CheckStatus';

export default function payment() {
  return (
    <div className='text-black'>
      <h1>Fawry Payment Integration</h1>
      <Payment />
      <CheckStatus />
    </div>
  );
}
