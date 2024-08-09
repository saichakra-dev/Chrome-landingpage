import React from "react";
import { motion } from "framer-motion";
import "./Slider.css";

const slides = [
  {
    id: 1,
    title: "Fast Browsing",
    description: "Experience the web at lightning speed.",
    image: "/path/to/image1.jpg", // Add paths to your images
  },
  {
    id: 2,
    title: "Security First",
    description: "Built-in protection to keep you safe online.",
    image: "/path/to/image2.jpg",
  },
  {
    id: 3,
    title: "Stay Productive",
    description: "Tools and extensions to help you get more done.",
    image: "/path/to/image3.jpg",
  },
];

const Slider = () => {
  return (
    <div className="slider-container">
      {slides.map((slide) => (
        <motion.div
          key={slide.id}
          className="slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={slide.image} alt={slide.title} className="slide-image" />
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Slider;
