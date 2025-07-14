const ConnectPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Connect Telematics</h1>
      <div className="bg-white p-4 rounded-lg">
        <p>
          Connect your telematics provider to get real-time data from your
          vehicles.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Connect Provider
        </button>
      </div>
    </div>
  );
};

export default ConnectPage;
