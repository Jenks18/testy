const FleetDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Fleet Manager Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Total Monthly Spend</h2>
          <p className="text-2xl font-bold">KES 500,000</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Liters Used</h2>
          <p className="text-2xl font-bold">4,167 L</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Fuel Cost / KM</h2>
          <p className="text-2xl font-bold">KES 12.50</p>
        </div>
        <div className="border p-4 rounded-lg col-span-3">
          <h2 className="text-xl font-semibold mb-2">Fuel Spend Trends</h2>
          {/* Placeholder for a chart */}
          <div className="bg-gray-200 h-64 rounded-lg"></div>
        </div>
        <div className="border p-4 rounded-lg col-span-3">
          <h2 className="text-xl font-semibold mb-2">Driver Rankings</h2>
          <ul>
            <li className="flex justify-between py-1">
              <span>John Doe</span>
              <span>15 KM/L</span>
            </li>
            <li className="flex justify-between py-1">
              <span>Jane Smith</span>
              <span>14.5 KM/L</span>
            </li>
            <li className="flex justify-between py-1">
              <span>Peter Jones</span>
              <span>14.2 KM/L</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FleetDashboard;
