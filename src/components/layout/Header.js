import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../assets/logo.png';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow" style={{zIndex: 99}}>
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <img src={LogoIcon}/>
        </div>
        Women in Gaming
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#about">
          About
        </AnchorLink>
        <AnchorLink className="px-4" href="#events">
          Events
        </AnchorLink>
        <AnchorLink className="px-4" href="#competitive">
          Competitve
        </AnchorLink>
        <AnchorLink className="px-4" href="#resources">
          Resources
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <a href="mailto: utwomeningaming@gmail.com">
          <Button className="text-sm">Contact us!</Button>
        </a>
        
      </div>
    </div>
  </header>
);

export default Header;
