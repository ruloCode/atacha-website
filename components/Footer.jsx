import React from "react";
import { MaxWidthWrapper } from "./maxWidthWrapper/MaxWidthWrapper";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div 
      className="p-8 bg-black py-12 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <MaxWidthWrapper>
        {/* <div className="w-full flex-col md:flex-row  flex justify-between py-4">
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul>
              <li>Commerce</li>
              <li>Point of sale</li>
              <li>Payments</li>
              <li>Online</li>
              <li>Invoices</li>
              <li>Customers</li>
              <li>Marketing</li>
              <li>Loyalty</li>
              <li>Customer Directory</li>
              <li>Banking</li>
              <li>Staff</li>
              <li>Payroll</li>
              <li>Advanced access</li>
              <li>Buy Now, Pay Later</li>
              <li>Hardware</li>
              <li>Business software & solutions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Business Types</h3>
            <ul>
              <li>Food & Beverage</li>
              <li>Quick Service</li>
              <li>Full Service</li>
              <li>Fast Casual</li>
              <li>Bars & Breweries</li>
              <li>Retail</li>
              <li>Beauty Salon</li>
              <li>Barbershop</li>
              <li>Hair Salon</li>
              <li>Nail Salon</li>
              <li>Day Spa</li>
              <li>Tattoo & Piercing</li>
              <li>Med spa</li>
              <li>Fitness</li>
              <li>Professional Services</li>
              <li>Home & Repair</li>
              <li>Large Businesses</li>
              <li>Franchises</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul>
              <li>Pricing</li>
              <li>Why Square?</li>
              <li>Testimonials</li>
              <li>The Bottom Line</li>
              <li>Sales</li>
              <li>Support</li>
              <li>Seller Community</li>
              <li>Developer Platform</li>
              <li>Merchant Services</li>
              <li>Rent Hardware</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul>
              <li>Customer support: 1 (855) 700-6000</li>
              <li>Sales: 1 (800) 470-1673</li>
            </ul>
            <h3 className="font-bold mt-8 mb-4">Square</h3>
            <ul>
              <li>About</li>
              <li>Press & Media</li>
              <li>Careers</li>
              <li>Referrals</li>
              <li>Partners</li>
            </ul>
          </div>
        </div> */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="flex items-center mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span>Bogotá, Colombia</span>
          </motion.div>
          <motion.div 
            className="flex space-x-4 gap-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a 
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-twitter"></i>
            </motion.a>
            <motion.a 
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-facebook"></i>
            </motion.a>
            <motion.a 
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mt-4 text-gray-500 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="mb-4 md:mb-0">© 2024. Atacha Online.</span>
        </motion.div>
      </MaxWidthWrapper>
    </motion.div>
  );
};

export default Footer;
