"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";

const data = [
  {
    imgSrc: "/assets/about/photo-1.jpg",
    title: "Our Journey",
    description:
      "Founded in 2000, Zenbrew started as a small café with a vision for exceptional coffee. Now a beloved brand, we're known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time.",
  },
  {
    imgSrc: "/assets/about/photo-2.jpg",
    title: "Our Promise",
    description:
      "At Zenbrew, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community.",
  },
  {
    imgSrc: "/assets/about/photo-3.jpg",
    title: "Our Team",
    description:
      "At Zenbrew, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories.",
  },
];

const About = () => {
  const scrollableSectionRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: "top top",
          end: "1800vw top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-primary">
      <div ref={scrollTriggerRef}>
        <div ref={scrollableSectionRef} className="h-screen w-[300vw] flex relative">
          {data.map((item, index) => (
            <div key={index} className="w-screen h-screen flex flex-col justify-center items-center relative p-4">
              <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center gap-6 md:flex-row md:gap-[30px] relative">
                  {/* text */}
                  <div className="flex-1 flex flex-col justify-center items-center text-center">
                    <Badge containerStyles="w-[120px] h-[120px] md:w-[180px] md:h-[180px]" />
                    <div className="max-w-[560px]">
                      {/* title */}
                      <h2 className="h2 text-white mb-4">
                        <span className="mr-2 md:mr-4">{item.title.split(" ")[0]}</span>
                        <span className="text-accent">{item.title.split(" ")[1]}</span>
                      </h2>
                      {/* separator */}
                      <div className="mb-6 md:mb-8">
                        <Separator />
                      </div>
                      {/* description */}
                      <p className="leading-relaxed mb-8 md:mb-16 px-4 xl:px-0 text-sm md:text-base lg:text-lg">{item.description}</p>
                      {/* button */}
                      <button className="btn bg-[#d2a679] text-[#2f2f2f] uppercase tracking-wider px-4 py-2 rounded-md">
                        see more
                      </button>
                    </div>
                  </div>

                  {/* image */}
                  <div className="flex-1 flex justify-center items-center w-full h-[50vh] md:h-[70vh] relative">
                    <Image
                      src={item.imgSrc}
                      fill
                      className="object-cover"
                      quality={100}
                      priority
                      alt=""
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
