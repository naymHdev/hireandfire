const PrimaryButton = ({ text }) => {
  return (
    <>
      <button className="py-2 px-4 bg-blue-900 text-white rounded hover:bg-blue-700">
        {text}
      </button>
    </>
  );
};

export default PrimaryButton;
