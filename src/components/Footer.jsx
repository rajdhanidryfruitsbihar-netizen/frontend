import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => {
  const whatsappNumber = "919905062467";

  return (
    <footer className="bg-[#0F2B20] text-white">

      {/* ================================
          MAIN FOOTER
      ================================= */}

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
          lg:gap-12
        ">

          {/* ================================
              BRAND
          ================================= */}

          <div>

            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
            >

              <div className="
                w-11 h-11
                rounded-full
                bg-white/10
                border border-white/10
                flex items-center justify-center
                group-hover:bg-[#C89B3C]
                transition-all duration-300
              ">
                <span className="font-serif text-xl">
                  R
                </span>
              </div>

              <div className="leading-tight">

                <h2 className="
                  text-xl sm:text-2xl
                  font-serif
                  font-semibold
                ">
                  Rajdhani
                </h2>

                <p className="
                  mt-1
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-[#C89B3C]
                ">
                  Dry Fruits & Foods
                </p>

              </div>

            </Link>

            <p className="
              mt-5
              text-sm
              text-white/60
              leading-7
              max-w-sm
            ">
              Discover premium dry fruits and dates,
              carefully selected for quality, freshness
              and exceptional taste.
            </p>


            {/* SOCIAL ICONS */}

            <div className="flex flex-wrap gap-2.5 mt-7">

              <a
                href="https://www.facebook.com/profile.php?id=61592490818386"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="
                  w-10 h-10
                  rounded-full
                  border border-white/10
                  flex items-center justify-center
                  text-sm font-bold
                  text-white/70
                  hover:bg-[#C89B3C]
                  hover:text-white
                  hover:border-[#C89B3C]
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                f
              </a>

              <a
                href="https://www.linkedin.com/company/rajdhani-dryfruits"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  w-10 h-10
                  rounded-full
                  border border-white/10
                  flex items-center justify-center
                  text-xs font-bold
                  text-white/70
                  hover:bg-[#C89B3C]
                  hover:text-white
                  hover:border-[#C89B3C]
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                in
              </a>

              <a
                href="https://www.instagram.com/rajdhanidryfruits"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="
                  w-10 h-10
                  rounded-full
                  border border-white/10
                  flex items-center justify-center
                  text-lg
                  text-white/70
                  hover:bg-[#C89B3C]
                  hover:text-white
                  hover:border-[#C89B3C]
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                ◎
              </a>

              <a
                href="https://youtube.com/@rajdhanidryfruits-r3s"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="
                  w-10 h-10
                  rounded-full
                  border border-white/10
                  flex items-center justify-center
                  text-sm
                  text-white/70
                  hover:bg-[#C89B3C]
                  hover:text-white
                  hover:border-[#C89B3C]
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                ▶
              </a>

              <a
                href="https://x.com/rajdhanidryfrui"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="
                  w-10 h-10
                  rounded-full
                  border border-white/10
                  flex items-center justify-center
                  text-sm font-semibold
                  text-white/70
                  hover:bg-[#C89B3C]
                  hover:text-white
                  hover:border-[#C89B3C]
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                𝕏
              </a>

            </div>

          </div>


          {/* ================================
              QUICK LINKS
          ================================= */}

          <div>

            <h3 className="
              text-base sm:text-lg
              font-serif
              text-[#C89B3C]
            ">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3.5">

              <Link
                to="/"
                className="
                  block text-sm
                  text-white/60
                  hover:text-[#C89B3C]
                  transition
                "
              >
                Home
              </Link>

              <Link
                to="/products"
                className="
                  block text-sm
                  text-white/60
                  hover:text-[#C89B3C]
                  transition
                "
              >
                Products
              </Link>

              <Link
                to="/about"
                className="
                  block text-sm
                  text-white/60
                  hover:text-[#C89B3C]
                  transition
                "
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="
                  block text-sm
                  text-white/60
                  hover:text-[#C89B3C]
                  transition
                "
              >
                Contact
              </Link>

            </div>

          </div>


          {/* ================================
              CONTACT
          ================================= */}

          <div>

            <h3 className="
              text-base sm:text-lg
              font-serif
              text-[#C89B3C]
            ">
              Contact Us
            </h3>

            <div className="mt-5 space-y-5">

              {/* Address */}

              <a
                href="https://maps.app.goo.gl/YKKNoFTrgGk5eWG6A?g_st=iw"
                target="_blank"
                rel="noreferrer"
                className="
                  flex gap-3
                  text-sm
                  text-white/60
                  hover:text-white
                  transition
                "
              >

                <MapPin
                  size={19}
                  className="text-[#C89B3C] shrink-0 mt-0.5"
                />

                <span className="leading-6">
                  Sabzibagh,
                  <br />
                  Patna-4
                </span>

              </a>


              {/* Phone */}

              <a
                href="tel:+919905062467"
                className="
                  flex gap-3
                  text-sm
                  text-white/60
                  hover:text-white
                  transition
                "
              >

                <Phone
                  size={18}
                  className="text-[#C89B3C] shrink-0"
                />

                <span>
                  +91 99050 62467
                </span>

              </a>


              {/* Email */}

              <a
                href="mailto:rajdhanidryfruitsbihar@gmail.com"
                className="
                  flex gap-3
                  text-sm
                  text-white/60
                  hover:text-white
                  transition
                "
              >

                <Mail
                  size={18}
                  className="text-[#C89B3C] shrink-0 mt-0.5"
                />

                <span className="break-all leading-6">
                  rajdhanidryfruitsbihar@gmail.com
                </span>

              </a>

            </div>

          </div>


          {/* ================================
              BUSINESS HOURS
          ================================= */}

          <div>

            <h3 className="
              text-base sm:text-lg
              font-serif
              text-[#C89B3C]
            ">
              Business Hours
            </h3>

            <div className="mt-5">

              <div className="flex gap-3">

                <Clock
                  size={19}
                  className="text-[#C89B3C] shrink-0 mt-0.5"
                />

                <div className="text-sm">

                  <p className="text-white/60">
                    Every Day
                  </p>

                  <p className="mt-1 text-white">
                    9:00 AM – 10:00 PM
                  </p>

                </div>

              </div>


              {/* WhatsApp */}

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  w-full sm:w-auto
                  mt-7
                  px-5 py-3
                  rounded-full
                  bg-[#C89B3C]
                  text-white
                  text-sm
                  font-medium
                  hover:bg-white
                  hover:text-[#0F2B20]
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </a>

            </div>

          </div>

        </div>


        {/* ================================
            MAP
        ================================= */}

        <div className="
          mt-12 sm:mt-14
          pt-7 sm:pt-8
          border-t border-white/10
        ">

          <a
            href="https://maps.app.goo.gl/YKKNoFTrgGk5eWG6A?g_st=iw"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              text-white/55
              hover:text-[#C89B3C]
              transition
            "
          >

            <MapPin size={17} />

            Find Rajdhani Dry Food on Google Maps

            <ArrowUpRight size={15} />

          </a>

        </div>

      </div>


      {/* ================================
          BOTTOM BAR
      ================================= */}

      <div className="border-t border-white/10">

        <div className="
          max-w-7xl mx-auto
          px-5 sm:px-6 lg:px-8
          py-5 sm:py-6
          flex flex-col sm:flex-row
          items-center
          justify-between
          gap-2
          text-center sm:text-left
          text-xs sm:text-sm
          text-white/40
        ">

          <p>
            © {new Date().getFullYear()} Rajdhani Dry Food.
            All rights reserved.
          </p>

          <p className="text-[#C89B3C]/70">
            Premium Dry Fruits & Dates
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;