const ConsumerDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Consumer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Fuel Balance</h2>
          <p className="text-2xl font-bold">KES 5,000</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Top Up
          </button>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Points Tracker</h2>
          <p className="text-2xl font-bold">1,250 Points</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">
            Redeem
          </button>
        </div>
        <div className="border p-4 rounded-lg col-span-2">
          <h2 className="text-xl font-semibold mb-2">Recent Transactions</h2>
          <ul>
            <li className="flex justify-between py-1">
              <span>Total, Thika Road</span>
              <span>KES 2,000</span>
            </li>
            <li className="flex justify-between py-1">
              <span>Shell, Waiyaki Way</span>
              <span>KES 1,500</span>
            </li>
            <li className="flex justify-between py-1">
              <span>Rubis, Mombasa Road</span>
              <span>KES 1,000</span>
            </li>
          </ul>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Referral Program</h2>
          <p>Refer a friend and earn 100 points!</p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-2">
            Refer Now
          </button>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Partner Promotions</h2>
          <p>Get 10% off at Naivas!</p>
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboard;
