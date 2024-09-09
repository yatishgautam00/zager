import React from "react";

function LandingView({ heading,msg }) {
  return (
    <section className="relative bg-[url(/ourServices/landingview.png)] bg-cover bg-center bg-no-repeat">
        <div className="flex items-center justify-center mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:h-screen lg:px-8">
        <div className="max-w-xl text-white text-center">
          <h1 className="text-5xl font-extrabold font-times md:text-6xl">
            {heading}
          </h1>
          <h2 className="text-xl font-medium md:text-xl">
            {msg}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default LandingView;
