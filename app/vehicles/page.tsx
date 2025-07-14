const VehiclesPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Vehicles</h1>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by plate or driver..."
          className="border p-2 rounded-lg"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add New Vehicle
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Vehicle ID</th>
            <th className="border p-2">Plate</th>
            <th className="border p-2">Driver</th>
            <th className="border p-2">Card</th>
            <th className="border p-2">Last Refuel</th>
            <th className="border p-2">Avg KM/L</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">KCD 123A</td>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">**** 1234</td>
            <td className="border p-2">2024-07-28</td>
            <td className="border p-2">15</td>
            <td className="border p-2">
              <button className="text-blue-500 hover:underline">Edit</button>
            </td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">KDE 456B</td>
            <td className="border p-2">Jane Smith</td>
            <td className="border p-2">**** 5678</td>
            <td className="border p-2">2024-07-27</td>
            <td className="border p-2">14.5</td>
            <td className="border p-2">
              <button className="text-blue-500 hover:underline">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VehiclesPage;
