import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">WIG is a student organization open to everyone to help create a community for women gamers to socialize, network, and explore video games.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://utexas.campuslabs.com/engage/organization/womeningaming" target="_blank">Hornslink</a>
          </li>
          {/* <li>
            <a href="https://google.com" target="_blank">Credits</a>
          </li> */}
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://twitter.com/atxwig" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/atxwig/" target="_blank">Instagram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/atxwig/" target="_blank">Facebook</a>
          </li>
          <li>
            <a href="https://www.twitch.tv/atxwig" target="_blank">Twitch</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
