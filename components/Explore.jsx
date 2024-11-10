import Image from "next/image";

const Explore = () => {
  return (
    <section className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen flex items-center justify-center">
      <div className="container mx-auto xl:w-full xl:h-full flex flex-col lg:flex-row lg:justify-around items-center gap-12 xl:gap-20">
        
        {/* Left Side Text Blocks */}
        <div className="flex-1 flex flex-col justify-around items-end text-right gap-12 max-w-[400px] mx-auto xl:mx-0">
          
          {/* Item 1 - Right Aligned */}
          <div className="flex flex-col items-end text-right gap-2">
            <Image
              src="/assets/explore/icons/coffee-1.svg"
              width={56}
              height={56}
              alt="Espresso Icon"
            />
            <h3 className="text-3xl xl:text-4xl font-primary font-bold">Rich Espresso Blends</h3>
            <p className="max-w-[400px]">Indulge in the deep, robust flavors of our expertly crafted espresso blends. Perfect for a quick pick-me-up or a leisurely afternoon treat.</p>
          </div>

          {/* Item 2 -  Right Aligned */}
          <div className="flex flex-col items-end text-right gap-2">
            <Image
              src="/assets/explore/icons/coffee-2.svg"
              width={56}
              height={56}
              alt="Drip Coffee Icon"
            />
            <h3 className="text-3xl xl:text-4xl font-primary font-bold">Classic Drip Coffee</h3>
            <p className="max-w-[400px]">Enjoy the comforting taste of our classic drip coffee, brewed to perfection. A timeless choice for coffee enthusiasts who appreciate simplicity.</p>
          </div>
        </div>

        {/* Center Coffee Cup Image */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-[322px] h-[580px]">
            <Image
              src="/assets/explore/cup.png"
              fill
              alt="Zenbrew Coffee Cup"
              className="object-cover"
              quality={100}
              priority
              data-scroll
              data-scroll-speed="0.1"
            />
          </div>
        </div>

        {/* Right Side Text Blocks */}
        <div className="flex-1 flex flex-col justify-around items-start text-left gap-12 max-w-[400px] mx-auto xl:mx-0">
          
          {/* Item 3 - Left Aligned */}
          <div className="flex flex-col items-start text-left gap-2">
            <Image
              src="/assets/explore/icons/coffee-3.svg"
              width={56}
              height={56}
              alt="Cold Brew Icon"
            />
            <h3 className="text-3xl xl:text-4xl font-primary font-bold">Smooth Cold Brews</h3>
            <p className="max-w-[400px]">Refresh yourself with our smooth and invigorating cold brew options. Ideal for those warm days when you need a cool, caffeinated boost.</p>
          </div>

          {/* Item 4 - Left Aligned */}
          <div className="flex flex-col items-start text-left gap-2">
            <Image
              src="/assets/explore/icons/coffee-4.svg"
              width={56}
              height={56}
              alt="Latte Icon"
            />
            <h3 className="text-3xl xl:text-4xl font-primary font-bold">Flavorful Latte Varieties</h3>
            <p className="max-w-[400px]">Experience the rich and creamy flavors of our diverse latte selections. From vanilla to caramel, we have a latte to suit every taste.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Explore;
