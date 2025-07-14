const SupportPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Support</h1>
      <div className="bg-white p-4 rounded-lg">
        <p className="mb-4">
          Have a question or need help? Contact our support team.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="border p-2 rounded-lg w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="border p-2 rounded-lg w-full"
            ></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupportPage;
