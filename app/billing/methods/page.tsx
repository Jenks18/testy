const PaymentMethodsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Payment Methods</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded-lg bg-white">
          <h2 className="text-lg font-semibold mb-2">
            Instant Payment Funding Source
          </h2>
          <p>Mastercard **** 8171</p>
          <p>Exp: 8/2025</p>
          <button className="text-red-500 hover:underline mt-2">
            Remove
          </button>
        </div>
        <div className="border p-4 rounded-lg bg-white">
          <h2 className="text-lg font-semibold mb-2">
            Bank Transfer (ACH) Funding Source
          </h2>
          <p>JP Morgan Chase</p>
          <button className="text-red-500 hover:underline mt-2">
            Remove
          </button>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Add New Payment Method
      </button>
    </div>
  );
};

export default PaymentMethodsPage;
