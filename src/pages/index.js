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
import Image from '../components/Image';

import Twiggy from '../assets/twiggy.png';
import CompImg from '../assets/queens.jpg';
import EventImg from '../assets/alyssa-is-my-wife.jpg';
import ResourceImg from '../assets/felicia.jpg';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            We are Women in Gaming
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            A UT Austin student organization built to harbor a community for women gamers to
            socialize, network, and explore video games.
          </p>
          <p className="mt-8 md:mt-12">
            <a href="https://discord.gg/Z5yyBnK" target="_blank" rel="noopener noreferrer">
              <Button size="lg">Join us!</Button>
            </a>
          </p>
          <p className="mt-4 text-gray-600">
            We encourage anyone to join, regardless of gender or sexuality.
          </p>
        </div>
        <div className="pl-0 lg:pl-64">
          <img src={Twiggy} className="invisible lg:visible" width="450px" height="450px" />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-36 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">What We Do</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Community</p>
              <p className="mt-4">
                Our discord server is a place for people to make friends, share interests, and
                connect with the UT community. We have channels like planning, Looking For Group
                (LFG), and suggestions for everyone to engage with each other. We also host movie
                nights, field trips, and potlucks!
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Gaming</p>
              <p className="mt-4">
                WiG is committed to condemning and preventing toxicity in our community. Everyone of
                all skill levels is welcome to join and be themselves when playing with us. We host
                game nights, friendly in-houses, and competitive coaching. We also have a Minecraft
                server!
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Industry</p>
              <p className="mt-4">
                WiG is a hub for you to find opportunities for internships, jobs, teammates for
                projects, and advice for your major. We host speakers and collaborate often with
                partner organizations like <a href="https://longhorngaming.gg/" target="_blank" rel="noopener noreferrer">Longhorn Gaming</a> and <a a href="https://egadsaustin.github.io/freshmansite/" target="_blank" rel="noopener noreferrer">EGaDS!</a>
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
              WiG was started with a small team in 2018. Our founder saw the lack of a space for
              women gamers in the UT community, and WiG was built so that women at UT did not face
              isolation in their hobbies and career goals. As we grow larger and larger, we strive
              to keep a close-knit and connected community.
            </p>
            {/* <Button className="mt-8">Meet our staff</Button> */}
          </div>
        }
        secondarySlot={
          <div className="pl-0 lg:pl-24">
            <Video
              videoSrcURL="https://www.youtube.com/embed/fFm2OWvY2TA"
              videoTitle="Women in Gaming Introduction Video"
            />
          </div>
        }
      />
    </section>
    <section id="events" className="pt-16 md:pt-24 lg:pt-32">
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">Events</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Every month during the school year we host events such as in-houses, casual game
              events, movie viewing parties, socials, speaker nights, and many more. Our events
              aren’t member exclusive, so anyone is more than welcome to attend!
            </p>
            <a href="https://calendar.google.com/calendar/b/2?cid=dXR3b21lbmluZ2FtaW5nQGdtYWlsLmNvbQ" target="_blank" rel="noopener noreferrer">
              <Button className="mt-8">Check out our calendar!</Button>
            </a>
          </div>
        }
        secondarySlot={<Image picture={EventImg} orientation="1" />}
      />
    </section>
    <section id="competitive" className="pt-16 md:pt-24 lg:pt-32">
      <SplitSection
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h3 className="text-3xl font-semibold leading-tight">Coaching</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              We have a skilled, supportive team of Overwatch coaches that can help you in all
              roles! Everyone’s welcome to try out for our Overwatch team, play in pick up games,
              and practice with our players. Join our coaching discord server to be a part of the
              fun!
            </p>
            <a href="https://www.discord.gg/wn6QPUC" target="_blank" rel="noopener noreferrer">
              <Button className="mt-8">Join the coaching Discord!</Button>
            </a>
          </div>
        }
        secondarySlot={<Image picture={CompImg} orientation="0" />}
      />
    </section>
    <section id="resources" className="pt-16 md:pt-24 lg:pt-32">
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-32 xl:pl-48">
            <h3 className="text-3xl font-semibold leading-tight">Resources</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              We provide a wide variety of resources for our members including mental health
              resources, past guest speaker talks, and other ongoing personal or professional
              opportunities.
            </p>
            <a href="https://docs.google.com/document/d/1kODKrU4AxuIyuep0Ko7jOjKMZ2939kr0zwaS0fwJdnU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button className="mt-8">See our resources!</Button>
            </a>
          </div>
        }
        secondarySlot={<Image picture={ResourceImg} orientation="1" />}
      />
    </section>

    {/* <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What members are saying</LabelText>
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
      <h3 className="text-5xl font-semibold">Want to support us?</h3>
      <p className="mt-8 text-xl font-light">venmo us enough money and we might make an onlyfans</p>
      <p className="mt-8">
        <Button size="xl">$$$</Button>
      </p>
    </section> */}
  </Layout>
);
