const RoutingPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Routing & Logistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1 border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Plan a Route</h2>
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Start"
              className="border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="End"
              className="border p-2 rounded-lg"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Calculate Route
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Route Details</h3>
            <p>Distance: 150 KM</p>
            <p>Estimated Fuel Cost: KES 1,875</p>
          </div>
        </div>
        <div className="md:col-span-2 border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Map</h2>
          {/* Placeholder for a map */}
          <div className="bg-gray-200 h-96 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default RoutingPage;
