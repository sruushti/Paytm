import React from "react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300 text-xl">EasyPay</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow us</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Github</a></li>
              <li><a href="#" className="hover:text-gray-300">Discord</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-600" />
        <div className="flex items-center justify-between">
          <span>©™ 2024</span>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300"><BsFacebook /></a>
            <a href="#" className="hover:text-gray-300"><BsInstagram /></a>
            <a href="#" className="hover:text-gray-300"><BsTwitter /></a>
            <a href="#" className="hover:text-gray-300"><BsGithub /></a>
            <a href="#" className="hover:text-gray-300"><BsDribbble /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
