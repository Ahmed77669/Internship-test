// pages/index.js
import Payment from '@/components/payment/Payment';
import CheckStatus from '@/components/checkStatus/CheckStatus';

export default function payment() {
  return (
    <div>
      <h1>Fawry Payment Integration</h1>
      <Payment />
      <CheckStatus />
    </div>
  );
}
