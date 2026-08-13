import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Leaf,
  Truck,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Hero image
import heroImage from "../assets/pack.png";

const categories = [
  {
    name: "Premium Dates",
    slug: "dates",
    description: "Naturally sweet premium dates",
    icon: "🌴",
  },
  {
    name: "Dry Fruits",
    slug: "dry-fruits",
    description: "Fresh and carefully selected",
    icon: "🥭",
  },
  {
    name: "Nuts",
    slug: "nuts",
    description: "Premium quality nuts",
    icon: "🥜",
  },
  {
    name: "Stuffed Dates",
    slug: "stuffed-dates",
    description: "Delicious stuffed varieties",
    icon: "✨",
  },
  {
    name: "Chocolate Dates",
    slug: "chocolate-dates",
    description: "A luxurious sweet experience",
    icon: "🍫",
  },
  {
    name: "Bakery Items",
    slug: "bakery-items",
    description: "Fresh bakery favourites",
    icon: "🥐",
  },
];

const features = [
  {
    icon: Leaf,
    title: "Premium Quality",
    description: "Carefully selected products",
  },
  {
    icon: ShieldCheck,
    title: "Fresh & Trusted",
    description: "Quality you can depend on",
  },
  {
    icon: Truck,
    title: "Easy Ordering",
    description: "Simple and convenient shopping",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#0F2B20] overflow-hidden">

      <Navbar />

      {/* ========================================
          HERO SECTION
      ======================================== */}

      <section className="relative">

        {/* Decorative Background */}

        <div
          className="
            absolute
            -top-20
            -right-20
            w-72
            h-72
            rounded-full
            bg-[#C89B3C]/10
            blur-3xl
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            bottom-0
            -left-20
            w-64
            h-64
            rounded-full
            bg-[#0F2B20]/5
            blur-3xl
            pointer-events-none
          "
        />

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-6
            lg:px-8
            py-14
            sm:py-20
            lg:py-28
          "
        >

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-12
              lg:gap-16
              items-center
            "
          >

            {/* ========================================
                HERO LEFT
            ======================================== */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >

              {/* Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-[#C89B3C]/10
                  border
                  border-[#C89B3C]/20
                  text-[#A77E29]
                  text-xs
                  sm:text-sm
                  font-medium
                "
              >
                <Sparkles size={14} />

                Premium Quality
              </div>

              {/* Heading */}

              <h1
                className="
                  mt-6
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-serif
                  leading-[1.08]
                  tracking-tight
                "
              >
                Nature's Finest

                <span
                  className="
                    block
                    text-[#C89B3C]
                    mt-2
                  "
                >
                  Dry Fruits & Dates
                </span>
              </h1>

              {/* Description */}

              <p
                className="
                  mt-6
                  mx-auto
                  lg:mx-0
                  max-w-xl
                  text-gray-600
                  text-sm
                  sm:text-base
                  leading-7
                  sm:leading-8
                "
              >
                Discover our carefully selected collection of premium
                dry fruits, dates and nuts — chosen for exceptional
                taste, freshness and quality.
              </p>

              {/* Buttons */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  sm:flex-row
                  items-center
                  justify-center
                  lg:justify-start
                  gap-3
                "
              >

                <Link
                  to="/products"
                  className="
                    w-full
                    sm:w-auto
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-7
                    py-3.5
                    rounded-full
                    bg-[#0F2B20]
                    text-white
                    text-sm
                    font-medium
                    hover:bg-[#C89B3C]
                    hover:-translate-y-0.5
                    shadow-lg
                    shadow-[#0F2B20]/10
                    transition-all
                    duration-300
                  "
                >
                  Explore Collection

                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/contact"
                  className="
                    w-full
                    sm:w-auto
                    inline-flex
                    items-center
                    justify-center
                    px-7
                    py-3.5
                    rounded-full
                    border
                    border-[#DCD1C0]
                    text-[#0F2B20]
                    text-sm
                    font-medium
                    hover:border-[#C89B3C]
                    hover:text-[#C89B3C]
                    transition-all
                  "
                >
                  Contact Us
                </Link>

              </div>

            </motion.div>

            {/* ========================================
                HERO IMAGE
            ======================================== */}

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >

              {/* Decorative Circle */}

              <div
                className="
                  absolute
                  -top-4
                  -right-4
                  sm:-top-6
                  sm:-right-6
                  w-20
                  h-20
                  sm:w-28
                  sm:h-28
                  rounded-full
                  border
                  border-[#C89B3C]/30
                  pointer-events-none
                "
              />

              <div
                className="
                  absolute
                  -bottom-4
                  -left-4
                  sm:-bottom-6
                  sm:-left-6
                  w-20
                  h-20
                  sm:w-28
                  sm:h-28
                  rounded-full
                  bg-[#C89B3C]/10
                  pointer-events-none
                "
              />

              {/* Image */}

              <div
                className="
                  relative
                  aspect-[4/3]
                  sm:aspect-square
                  rounded-[28px]
                  sm:rounded-[40px]
                  overflow-hidden
                  shadow-2xl
                  border
                  border-white
                  bg-[#0F2B20]
                "
              >

                <img
                  src={heroImage}
                  alt="Premium dry fruits and dates"
                  className="
                    w-full
                    h-full
                    object-cover
                    hover:scale-105
                    transition-transform
                    duration-700
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0F2B20]/45
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                />

              </div>

              {/* Floating Badge */}

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  sm:bottom-6
                  sm:left-6
                  bg-white/95
                  backdrop-blur-md
                  rounded-2xl
                  px-4
                  py-3
                  shadow-xl
                  border
                  border-white
                "
              >

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-widest
                    text-[#C89B3C]
                  "
                >
                  Rajdhani
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-semibold
                    text-[#0F2B20]
                  "
                >
                  Premium Collection
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ========================================
          FEATURES
      ======================================== */}

      <section className="border-y border-[#E8DFD0] bg-white">

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-6
            lg:px-8
            py-8
            sm:py-10
          "
        >

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-6
            "
          >

            {features.map((feature, index) => {

              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    sm:justify-center
                  "
                >

                  <div
                    className="
                      w-11
                      h-11
                      shrink-0
                      rounded-full
                      bg-[#C89B3C]/10
                      text-[#C89B3C]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <div>

                    <h3
                      className="
                        text-sm
                        font-semibold
                        text-[#0F2B20]
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-xs
                        text-gray-500
                      "
                    >
                      {feature.description}
                    </p>

                  </div>

                </motion.div>
              );

            })}

          </div>

        </div>

      </section>

      {/* ========================================
          CATEGORIES
      ======================================== */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
          py-16
          sm:py-20
          lg:py-24
        "
      >

        <div className="text-center mb-10 sm:mb-12">

          <p
            className="
              text-[#C89B3C]
              uppercase
              tracking-[0.25em]
              text-xs
              sm:text-sm
            "
          >
            Discover
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-serif
              text-[#0F2B20]
              mt-3
            "
          >
            Our Collections
          </h2>

          <p
            className="
              mt-4
              text-sm
              sm:text-base
              text-gray-500
              max-w-xl
              mx-auto
            "
          >
            Explore our selection of premium dates,
            dry fruits, nuts and delicious treats.
          </p>

        </div>

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            lg:grid-cols-3
            gap-3
            sm:gap-5
          "
        >

          {categories.map((category, index) => (

            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
            >

              <Link
                to={`/products?category=${category.slug}`}
                className="
                  group
                  relative
                  block
                  h-full
                  p-5
                  sm:p-7
                  rounded-2xl
                  sm:rounded-3xl
                  bg-white
                  border
                  border-[#EEE5D8]
                  hover:-translate-y-1.5
                  hover:shadow-xl
                  hover:border-[#C89B3C]/30
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
                    rounded-2xl
                    bg-[#FAF7F0]
                    flex
                    items-center
                    justify-center
                    text-2xl
                    sm:text-3xl
                    group-hover:bg-[#C89B3C]/10
                    transition
                  "
                >
                  {category.icon}
                </div>

                <h3
                  className="
                    text-base
                    sm:text-xl
                    font-serif
                    text-[#0F2B20]
                    mt-5
                    group-hover:text-[#C89B3C]
                    transition
                  "
                >
                  {category.name}
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    sm:text-sm
                    text-gray-500
                    leading-5
                  "
                >
                  {category.description}
                </p>

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    gap-1
                    text-[#C89B3C]
                    text-xs
                    sm:text-sm
                    font-medium
                  "
                >
                  Explore

                  <ArrowRight
                    size={14}
                    className="
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />
                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ========================================
          ABOUT
      ======================================== */}

      <section
        className="
          bg-[#0F2B20]
          text-white
          py-16
          sm:py-20
          lg:py-24
        "
      >

        <div
          className="
            max-w-4xl
            mx-auto
            px-5
            sm:px-6
            text-center
          "
        >

          <p
            className="
              text-[#C89B3C]
              uppercase
              tracking-[0.25em]
              text-xs
              sm:text-sm
            "
          >
            About Rajdhani
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-serif
              mt-4
            "
          >
            Quality You Can Trust
          </h2>

          <p
            className="
              mt-6
              text-white/65
              text-sm
              sm:text-base
              leading-7
              sm:leading-8
            "
          >
            Rajdhani Dry Food brings together carefully selected
            dry fruits and dates with a focus on quality, freshness
            and customer satisfaction.
          </p>

          <Link
            to="/about"
            className="
              inline-flex
              items-center
              gap-2
              mt-7
              text-[#C89B3C]
              text-sm
              font-medium
              hover:text-white
              transition
            "
          >
            Learn More

            <ArrowRight size={16} />
          </Link>

        </div>

      </section>

      {/* ========================================
          CTA
      ======================================== */}

      <section
        className="
          py-16
          sm:py-20
          lg:py-24
          px-5
          text-center
        "
      >

        <p
          className="
            text-[#C89B3C]
            uppercase
            tracking-[0.25em]
            text-xs
            sm:text-sm
          "
        >
          Have a question?
        </p>

        <h2
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-serif
            text-[#0F2B20]
            mt-4
          "
        >
          We'd love to hear from you.
        </h2>

        <p
          className="
            mt-4
            text-sm
            sm:text-base
            text-gray-500
            max-w-md
            mx-auto
          "
        >
          Have a question about our products?
          Get in touch with us today.
        </p>

        <Link
          to="/contact"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            mt-7
            px-7
            py-3.5
            rounded-full
            bg-[#C89B3C]
            text-white
            text-sm
            font-medium
            hover:bg-[#0F2B20]
            hover:-translate-y-0.5
            shadow-lg
            shadow-[#C89B3C]/10
            transition-all
            duration-300
          "
        >
          Contact Us

          <ArrowRight size={17} />
        </Link>

      </section>

      <Footer />

    </div>
  );
};

export default Home;