import PricingCard from "../../components/PricingCard";

const pricingPlans = [
  {
    plan: "Economy",
    price: 50,
    attempts: 10,
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    isPopular: false,
  },
  {
    plan: "Gold",
    price: 150,
    attempts: 40,
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    isPopular: true,
  },
  {
    plan: "Premium",
    price: 299,
    attempts: 100,
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section className="container mx-auto px-4 py-16 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-teal-800">
        Choose the Right Plan for You
      </h1>
      <p className="text-center text-lg text-teal-600 mb-12 max-w-2xl mx-auto">
        Select a plan that fits your needs. All plans come with a 14-day
        money-back guarantee.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
}
