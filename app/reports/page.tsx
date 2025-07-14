const ReportsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Reports</h1>
      <div className="flex justify-between mb-4">
        <div>
          <label htmlFor="report-type" className="mr-2">
            Report Type:
          </label>
          <select id="report-type" className="border p-2 rounded-lg">
            <option>Fuel Spend per Vehicle</option>
            <option>Route Efficiency</option>
            <option>Unauthorized Usage</option>
            <option>CO2 Emissions</option>
          </select>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download CSV
        </button>
      </div>
      <div className="border p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">
          Fuel Spend per Vehicle
        </h2>
        {/* Placeholder for a chart */}
        <div className="bg-gray-200 h-96 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ReportsPage;
