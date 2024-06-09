import "./App.css";

function App() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-no-repeat">
      <div className="h-full">
        {/* text */}
        <div className="size-full ">
          <div className="container mx-auto flex h-full flex-col justify-center text-center xl:pt-40 xl:text-left">
            {/* title */}
            <h1 className="mb-8 text-[35px] font-semibold leading-tight md:text-[60px] md:leading-[1.3]">
              Transforming Ideas <br /> Into{" "}
              <span className="text-red-400">Digital Reality</span>
            </h1>
            {/* Subtext */}
            <p className="mx-auto mb-10 max-w-sm xl:mx-0 xl:mb-16 xl:max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        {/* image */}
        <div className="absolute bottom-0 right-0 h-full w-[1200px]">
          {/* Particles */}
          <div>Particles</div>
        </div>
      </div>
    </div>
  );
}

export default App;
