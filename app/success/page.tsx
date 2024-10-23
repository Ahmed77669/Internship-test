import Link from 'next/link';

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-teal-800">Payment Successful!</h1>
      <p className="text-teal-600 mt-4">Thank you for your purchase. Your payment has been processed successfully.</p>
      <Link href="/">
        <a className="mt-6 text-teal-500 hover:underline">Go back to Home</a>
      </Link>
    </div>
  );
};

export default Success;