const ReferPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Refer & Earn</h1>
      <div className="bg-white p-4 rounded-lg">
        <p className="mb-4">
          Refer a friend and earn $50 when they sign up and spend $500.
        </p>
        <div className="flex">
          <input
            type="text"
            readOnly
            value="https://fuellink.ke/refer/BENJAMIN-123"
            className="border p-2 rounded-l-lg w-full bg-gray-100"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferPage;
