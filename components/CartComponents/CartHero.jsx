import React from "react";

function CartHero({ title, bgImage }) {
  const backgroundStyle = bgImage ? { backgroundImage: `url(${bgImage})` } : {};

  return (
    <section
      className={`relative h-[45vh] md:h-[60vh] w-full overflow-hidden flex items-center justify-center ${
        !bgImage ? "bg-[url('/digital.jpg')] " : ""
      } bg-cover bg-center`}
      style={backgroundStyle}
    >
      <div className="absolute inset-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold text-center text-white lg:text-6xl font-ivy-presto">
          {title || "Cart"}
        </h1>
      </div>
    </section>
  );
}

export default CartHero;
