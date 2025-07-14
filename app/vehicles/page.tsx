const VehiclesPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Vehicles</h1>
      <div className="bg-white p-4 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="p-2">Vehicle ID</th>
              <th className="p-2">Plate</th>
              <th className="p-2">Driver</th>
              <th className="p-2">Card</th>
              <th className="p-2">Last Refuel</th>
              <th className="p-2">Avg KM/L</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">1</td>
              <td className="p-2">KCD 123A</td>
              <td className="p-2">Benjamin Johannsen</td>
              <td className="p-2">**** 1234</td>
              <td className="p-2">2024-07-28</td>
              <td className="p-2">15</td>
              <td className="p-2">
                <button className="text-blue-500 hover:underline">
                  Edit
                </button>
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2">2</td>
              <td className="p-2">KDE 456B</td>
              <td className="p-2">Elizabeth Williamson</td>
              <td className="p-2">**** 5678</td>
              <td className="p-2">2024-07-27</td>
              <td className="p-2">14.5</td>
              <td className="p-2">
                <button className="text-blue-500 hover:underline">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehiclesPage;
