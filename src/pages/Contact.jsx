import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const whatsappNumber = "919905062467";

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      <Navbar />

      {/* =========================
          HERO
      ========================= */}
      <section className="bg-[#0F2B20] text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-24 text-center">

          <p className="text-[#C89B3C] uppercase tracking-[0.25em] text-xs sm:text-sm">
            Get In Touch
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif leading-tight">
            Contact Us
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-7 text-white/65">
            Have a question about our premium dry fruits and dates?
            We would love to hear from you.
          </p>

        </div>
      </section>


      {/* =========================
          CONTACT CARDS
      ========================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* ADDRESS */}
          <a
            href="https://maps.app.goo.gl/YKKNoFTrgGk5eWG6A?g_st=iw"
            target="_blank"
            rel="noreferrer"
            className="
              group
              bg-white
              p-6
              rounded-3xl
              border
              border-[#EEE5D8]
              hover:-translate-y-1
              hover:shadow-xl
              transition-all
              duration-300
            "
          >

            <div className="
              w-12 h-12
              rounded-2xl
              bg-[#F5EFE3]
              flex items-center justify-center
              group-hover:bg-[#C89B3C]
              transition
            ">
              <MapPin
                size={21}
                className="text-[#C89B3C] group-hover:text-white"
              />
            </div>

            <h3 className="mt-5 text-xl font-serif text-[#0F2B20]">
              Visit Us
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-6">
              Sabzibagh,
              <br />
              Patna-4
            </p>

            <span className="inline-flex items-center gap-1 mt-5 text-sm text-[#C89B3C]">
              Open Maps
              <ArrowUpRight size={14} />
            </span>

          </a>


          {/* PHONE */}
          <a
            href="tel:+919905062467"
            className="
              group
              bg-white
              p-6
              rounded-3xl
              border
              border-[#EEE5D8]
              hover:-translate-y-1
              hover:shadow-xl
              transition-all
              duration-300
            "
          >

            <div className="
              w-12 h-12
              rounded-2xl
              bg-[#F5EFE3]
              flex items-center justify-center
              group-hover:bg-[#C89B3C]
              transition
            ">
              <Phone
                size={21}
                className="text-[#C89B3C] group-hover:text-white"
              />
            </div>

            <h3 className="mt-5 text-xl font-serif text-[#0F2B20]">
              Call Us
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              +91 99050 62467
            </p>

            <span className="inline-flex items-center gap-1 mt-5 text-sm text-[#C89B3C]">
              Call Now
              <ArrowUpRight size={14} />
            </span>

          </a>


          {/* EMAIL */}
          <a
            href="mailto:rajdhanidryfruitsbihar@gmail.com"
            className="
              group
              bg-white
              p-6
              rounded-3xl
              border
              border-[#EEE5D8]
              hover:-translate-y-1
              hover:shadow-xl
              transition-all
              duration-300
            "
          >

            <div className="
              w-12 h-12
              rounded-2xl
              bg-[#F5EFE3]
              flex items-center justify-center
              group-hover:bg-[#C89B3C]
              transition
            ">
              <Mail
                size={21}
                className="text-[#C89B3C] group-hover:text-white"
              />
            </div>

            <h3 className="mt-5 text-xl font-serif text-[#0F2B20]">
              Email Us
            </h3>

            <p className="mt-3 text-sm text-gray-600 break-all leading-6">
              rajdhanidryfruitsbihar@gmail.com
            </p>

            <span className="inline-flex items-center gap-1 mt-4 text-sm text-[#C89B3C]">
              Send Email
              <ArrowUpRight size={14} />
            </span>

          </a>


          {/* HOURS */}
          <div className="
            bg-white
            p-6
            rounded-3xl
            border
            border-[#EEE5D8]
          ">

            <div className="
              w-12 h-12
              rounded-2xl
              bg-[#F5EFE3]
              flex items-center justify-center
            ">
              <Clock
                size={21}
                className="text-[#C89B3C]"
              />
            </div>

            <h3 className="mt-5 text-xl font-serif text-[#0F2B20]">
              Business Hours
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Every Day
            </p>

            <p className="mt-1 text-sm font-semibold text-[#0F2B20]">
              9:00 AM – 10:00 PM
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          LOCATION + WHATSAPP
      ========================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 pb-14 sm:pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LOCATION */}
          <div className="
            bg-white
            rounded-3xl
            overflow-hidden
            border
            border-[#EEE5D8]
          ">

            <div className="p-6 sm:p-8">

              <p className="text-[#C89B3C] uppercase tracking-[0.2em] text-xs">
                Our Location
              </p>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#0F2B20] mt-3">
                Find Our Store
              </h2>

              <p className="mt-3 text-gray-600 text-sm sm:text-base">
                Visit Rajdhani Dry Food at Sabzibagh, Patna-4.
              </p>

            </div>

            <div className="
              min-h-[280px]
              bg-[#EDE6DA]
              flex
              items-center
              justify-center
              px-5
            ">

              <div className="text-center">

                <div className="
                  w-16 h-16
                  rounded-full
                  bg-white
                  flex items-center justify-center
                  mx-auto
                  shadow-md
                ">
                  <MapPin
                    size={28}
                    className="text-[#C89B3C]"
                  />
                </div>

                <h3 className="mt-5 text-xl font-serif text-[#0F2B20]">
                  Sabzibagh, Patna-4
                </h3>

                <a
                  href="https://maps.app.goo.gl/YKKNoFTrgGk5eWG6A?g_st=iw"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-5
                    px-6
                    py-3
                    rounded-full
                    bg-[#0F2B20]
                    text-white
                    text-sm
                    hover:bg-[#C89B3C]
                    transition
                  "
                >
                  Open Google Maps
                  <ArrowUpRight size={15} />
                </a>

              </div>

            </div>

          </div>


          {/* WHATSAPP */}
          <div className="
            bg-[#0F2B20]
            rounded-3xl
            p-7
            sm:p-10
            flex
            flex-col
            justify-center
            text-white
          ">

            <div className="
              w-14 h-14
              rounded-2xl
              bg-[#C89B3C]
              flex items-center justify-center
            ">
              <MessageCircle size={26} />
            </div>

            <p className="
              mt-7
              text-[#C89B3C]
              uppercase
              tracking-[0.2em]
              text-xs
            ">
              Quick Contact
            </p>

            <h2 className="
              mt-3
              text-3xl
              sm:text-4xl
              font-serif
            ">
              Chat With Us
            </h2>

            <p className="
              mt-5
              text-sm
              sm:text-base
              text-white/65
              leading-7
              max-w-md
            ">
              Have questions about our products?
              Contact us directly on WhatsApp and
              our team will be happy to help.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="
                w-full
                sm:w-fit
                mt-7
                inline-flex
                items-center
                justify-center
                gap-2
                px-7
                py-3.5
                rounded-full
                bg-[#C89B3C]
                text-white
                text-sm
                font-medium
                hover:bg-white
                hover:text-[#0F2B20]
                transition
              "
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          SOCIAL
      ========================= */}
      <section className="
        px-5
        sm:px-6
        py-14
        sm:py-20
        text-center
      ">

        <p className="
          text-[#C89B3C]
          uppercase
          tracking-[0.25em]
          text-xs
        ">
          Follow Us
        </p>

        <h2 className="
          mt-3
          text-3xl
          sm:text-4xl
          font-serif
          text-[#0F2B20]
        ">
          Stay Connected
        </h2>

        <p className="mt-4 text-sm text-gray-600">
          Follow Rajdhani Dry Food on social media.
        </p>

        <div className="
          flex
          flex-wrap
          justify-center
          gap-3
          mt-7
        ">

          <a
            href="https://www.facebook.com/profile.php?id=61592490818386"
            target="_blank"
            rel="noreferrer"
            className="
              w-12 h-12
              rounded-full
              border
              border-[#E5DCCF]
              flex items-center justify-center
              font-bold
              text-[#0F2B20]
              hover:bg-[#0F2B20]
              hover:text-white
              transition
            "
          >
            f
          </a>

          <a
            href="https://www.linkedin.com/company/rajdhani-dryfruits"
            target="_blank"
            rel="noreferrer"
            className="
              w-12 h-12
              rounded-full
              border
              border-[#E5DCCF]
              flex items-center justify-center
              font-bold
              text-sm
              text-[#0F2B20]
              hover:bg-[#0F2B20]
              hover:text-white
              transition
            "
          >
            in
          </a>

          <a
            href="https://www.instagram.com/rajdhanidryfruits"
            target="_blank"
            rel="noreferrer"
            className="
              w-12 h-12
              rounded-full
              border
              border-[#E5DCCF]
              flex items-center justify-center
              font-bold
              text-[#0F2B20]
              hover:bg-[#0F2B20]
              hover:text-white
              transition
            "
          >
            ◎
          </a>

          <a
            href="https://youtube.com/@rajdhanidryfruits-r3s"
            target="_blank"
            rel="noreferrer"
            className="
              w-12 h-12
              rounded-full
              border
              border-[#E5DCCF]
              flex items-center justify-center
              font-bold
              text-[#0F2B20]
              hover:bg-[#0F2B20]
              hover:text-white
              transition
            "
          >
            ▶
          </a>

          <a
            href="https://x.com/rajdhanidryfrui"
            target="_blank"
            rel="noreferrer"
            className="
              w-12 h-12
              rounded-full
              border
              border-[#E5DCCF]
              flex items-center justify-center
              font-bold
              text-[#0F2B20]
              hover:bg-[#0F2B20]
              hover:text-white
              transition
            "
          >
            𝕏
          </a>

        </div>

      </section>


      <Footer />

    </div>
  );
};

export default Contact;