const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#FF69B4] p-10">
      <h1 className="text-6xl font-bold text-center">
        <em>The</em> Incredible Slime Database
      </h1>
      <h2 className="text-2xl font-medium text-center">
        Your one-stop shop for all things slime!
      </h2>
      <a
        href="/slimes"
        className="inline-block px-6 py-2 bg-green-500 text-white font-bold rounded-md"
      >
        Browse slimes now!
      </a>
    </div>
  );
};

export default Hero;
