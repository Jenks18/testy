const FuelCardManagement = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Fuel Card Management</h1>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by card or driver..."
          className="border p-2 rounded-lg"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add New Card
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Card Number</th>
            <th className="border p-2">Driver</th>
            <th className="border p-2">Vehicle</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">**** **** **** 1234</td>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">KCD 123A</td>
            <td className="border p-2">Active</td>
            <td className="border p-2">
              <button className="text-blue-500 hover:underline">Edit</button>
              <button className="text-red-500 hover:underline ml-2">
                Suspend
              </button>
            </td>
          </tr>
          <tr>
            <td className="border p-2">**** **** **** 5678</td>
            <td className="border p-2">Jane Smith</td>
            <td className="border p-2">KDE 456B</td>
            <td className="border p-2">Active</td>
            <td className="border p-2">
              <button className="text-blue-500 hover:underline">Edit</button>
              <button className="text-red-500 hover:underline ml-2">
                Suspend
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FuelCardManagement;
