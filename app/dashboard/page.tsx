const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg bg-white">
          <h2 className="text-lg font-semibold mb-2">Total Spend</h2>
          <p className="text-2xl font-bold">KES 1,250,000</p>
        </div>
        <div className="border p-4 rounded-lg bg-white">
          <h2 className="text-lg font-semibold mb-2">Active Drivers</h2>
          <p className="text-2xl font-bold">25</p>
        </div>
        <div className="border p-4 rounded-lg bg-white">
          <h2 className="text-lg font-semibold mb-2">Vehicles on Road</h2>
          <p className="text-2xl font-bold">18</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
