import { motion } from "framer-motion";

const BannerSection = () => (
  <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-secondary/20">
    <img
      // NOTE TO USER: Please upload your image to the "public" folder and name it "banner.jpg" 
      // or change this path to match your uploaded file's name.
      src="/banner.jpg" 
      alt="Master's Touch Professional Cleaning Services"
      className="w-full h-full object-cover object-center"
    />
  </section>
);

export default BannerSection;
