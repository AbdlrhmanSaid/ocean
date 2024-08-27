import { ArrowRightCircle, MoveRight } from "lucide-react";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Link from "next/link";
import Image from "next/image";
import { clients } from "./constans/clintes";
import { features } from "./constans/features";
import FeaturesCard from "./components/FeaturesCard";
import { featuresBlock } from "./constans/features";
import FeaturesBlock from "./components/FeaturesBlock";
import PircingSection from "./components/PircingSection";
import TestimonialCard from "./components/TestimonialCard";
import { testimonials } from "./constans/testimonials";

export default function Home() {
  return (
    <main className="overflow-hidden  antialiased">
      <div className="container relative">
        <Image
          src="/bg.png"
          alt="test"
          width={1920}
          height={1080}
          className="absolute -z-50 w-full h-full -top-20 left-0 opacity-10"
        />
        {/* home section */}
        <section id="home" className="relative">
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
          <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44  -right-20 md:right-20" />
          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p className="border border-slate-700 capitalize px-3 py-1 text-xs rounded-3xl cursor-pointer hover:border-sky-600 shadow-md transition-all">
                new Features Is Now Avialble
                <ArrowRightCircle className="inline ml-1 w-4 h-4" />
              </p>
              <Heading title="A CRM dashboard for engineering teams" />
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Boost engineering team’s productivity with Ocean CRM dashboard
                that streamlines project management, collaboration, and
                data-driven decision-making.
              </p>
              <div className="flex items-center gap-4">
                <Button>
                  Get Started <MoveRight className="w-4 h-4" />
                </Button>
                <Link href="#pricing">
                  <Button variant="outline">View Pricing</Button>
                </Link>
              </div>
            </div>
            <Image
              src="/Hero-image.svg"
              alt="hero"
              width={670}
              height={370}
              className="mx-auto shadow-xl"
            />
          </div>
        </section>
        {/* home section */}
        {/* Clients section */}
        <section
          id="clients"
          className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.imageUrl}
              width={120}
              height={80}
              alt={client.alt}
              className="w-40 md:w-full mx-auto"
            />
          ))}
        </section>
        {/* Clients section */}
        {/* features section */}
        <section
          id="features"
          className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28"
        >
          {/* part 1 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <Image
              src="/bg2.png"
              alt="test "
              height={1080}
              width={1920}
              className="absolute -z-50 w-full top-0 left-0 opacity-5"
            />
            <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
              <Heading title="Powerful features to help you manage all your leads." />
              <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
                Apsum dolor sit amet consectetur. Aliquam elementum elementum in
                ultrices. Dui maecenas ut eros turpis ultrices metus morbi
                aliquet vel.
              </p>
              <Button>get started</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <FeaturesCard key={index} {...feature} />
              ))}
            </div>
          </div>
          {/* part 1 */}
          {/* part 2 */}
          {featuresBlock.map((item, index) => (
            <FeaturesBlock key={index} {...item} />
          ))}
          {/* part 2 */}
        </section>
        {/* features section */}
        {/* pircing section */}
        <PircingSection />
        {/* pircing section */}
        {/* Testimonials section */}
        <section id="testimonials" className="flex flex-col gap-8">
          <Heading title="Meet our Customers" isCenter />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>
        {/* Testimonials section */}
        {/* Contact section */}
        <section id="contact">
          <div className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <Heading title="Let’s try our service now!" />
              <p className="max-w-[35rem] leading-normal text-lg">
                Experience the power of Ocean CRM dashboard for engineering
                teams. Boost productivity and streamline collaboration. Get
                started today!
              </p>
            </div>
            <Button>
              get started
              <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
        {/* Contact section */}
      </div>
    </main>
  );
}
