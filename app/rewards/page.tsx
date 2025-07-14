const RewardsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Rewards & Redemption</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Fuel Cashback</h2>
          <p className="text-lg">Redeem 500 points for KES 50 cashback</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Redeem
          </button>
        </div>
        <div className="border p-4 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Airtime</h2>
          <p className="text-lg">Redeem 250 points for KES 25 airtime</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Redeem
          </button>
        </div>
        <div className="border p-4 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Naivas Coupon</h2>
          <p className="text-lg">Redeem 1000 points for a KES 100 coupon</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Redeem
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Points History</h2>
        <ul>
          <li className="flex justify-between py-1">
            <span>Earned from Total, Thika Road</span>
            <span>+200 points</span>
          </li>
          <li className="flex justify-between py-1">
            <span>Redeemed for Airtime</span>
            <span>-250 points</span>
          </li>
          <li className="flex justify-between py-1">
            <span>Earned from Shell, Waiyaki Way</span>
            <span>+150 points</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RewardsPage;
