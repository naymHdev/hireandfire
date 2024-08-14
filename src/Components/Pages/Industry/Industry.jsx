const Industry = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Construction</h1>
          <nav className="mt-4 flex items-center gap-3 justify-center">
            <a href="/" className="text-white">
              Home
            </a>
            &raquo;
            <a href="#industry" className="text-white">
              Industry
            </a>
            &raquo;
            <a href="#construction" className="text-white">
              Construction
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Industry;
