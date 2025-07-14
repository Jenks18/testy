const SettingsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="border p-2 rounded-lg w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="border p-2 rounded-lg w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <button className="text-blue-500 hover:underline">
                Change Password
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Fleet Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Company-wide Fuel Limits
              </label>
              <input
                type="number"
                defaultValue="100000"
                className="border p-2 rounded-lg w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Billing Contact
              </label>
              <input
                type="text"
                defaultValue="Jane Smith"
                className="border p-2 rounded-lg w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">API Keys</label>
              <button className="text-blue-500 hover:underline">
                Manage API Keys
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
