import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import Video from '../components/Video';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            We are Women in Gaming
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            A UT Austin student organization built to harbor a community for women gamers to socialize,
            network, and explore video games.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Join us!</Button>
          </p>
          <p className="mt-4 text-gray-600">
            We encourage anyone to join, regardless of gender or sexuality.
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-36 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service One</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Two</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Three</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section id="about" className="pt-16 md:pt-24 lg:pt-32">
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">About WiG</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Some really cool mission statement that Denise probably wrote already that I'm really
            just too lazy to go find rn so you get this really long and drawn out statement instead
            to look like actual text cause I am also too lazy to go find the weird Latin temp
            placement text.
          </p>
          <Button className="mt-8">Meet our staff</Button>
        </div>
      }
      secondarySlot={
        <div className="pl-0 lg:pl-24">
          <Video videoSrcURL="https://www.youtube.com/embed/fFm2OWvY2TA" videoTitle="Women in Gaming Introduction Video" />
        </div>
          
      }
    />
    </section>
    <section id="events" className="pt-16 md:pt-24 lg:pt-32">
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Events
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            This can be some cute lil blurb about the events we throw, including games, casual events, speaker nights, etc.
          </p>

          <Button className="mt-8">Check out our calendar!</Button>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    </section>
    <section id="competitive" className="pt-16 md:pt-24 lg:pt-32">
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Competitive
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            I know this really isn't competitive anymore but more like cute training but I forgot what we renamed it to. Either way this is a cute blurb about that and a link.
          </p>
          <Button className="mt-8">More information idk</Button>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    </section>

    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);
