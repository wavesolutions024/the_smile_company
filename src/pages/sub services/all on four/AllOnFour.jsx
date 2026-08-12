import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./AllOnFour.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/general_service/img.webp";
import gallery1 from "../../../assets/about_page/after1.webp";
import apointment from "../../../assets/aapointment.webp";
import PageTop from "../../../comp/page_top/PageTop";
import { Helmet } from "react-helmet";


const whyChooseData = [
  {
    icon: "👨‍⚕️",
    title: "Experienced Team",
    description:
      "AO Dentistry boasts a team of skilled and experienced dentists who specialize in various fields of dentistry. From general dental check-ups in Pune to more complex treatments, you can be sure you're in good hands.",
  },
  {
    icon: "🦷",
    title: "Advanced Technology",
    description:
      "The clinic is equipped with the latest dental technologies to ensure that every dental check-up is thorough and accurate. Digital X-rays, intraoral cameras, and advanced diagnostic tools help in identifying even the smallest issues during the dental examination.",
  },
  {
    icon: "💰",
    title: "Affordable Packages",
    description:
      "AO Dentistry offers a range of affordable packages for dental check-ups in Pune. The clinic understands that dental care should be accessible to everyone and provides flexible payment options to make it easier for patients.",
  },
  {
    icon: "😊",
    title: "Patient-Centric Approach",
    description:
      "What truly sets AO Dentistry apart is its patient-centric approach. Every patient receives personalized care based on their specific needs. Our dentists take the time to understand your concerns, explain procedures, and ensure you're comfortable throughout.",
  },
];

const services = [
  {
    title: "Quick Discussion",
    description:
      "The dentist talks with you about any pain, concerns, or changes you’ve noticed. This helps focus on what matters most to you. ",
  },
  {
    title: "Mouth Check ",
    description:
      "Your teeth, gums, and overall oral health are carefully checked to spot cavities, gum issues, or other problems early. ",
  },
  {
    title: "X-rays (Only if Needed)",
    description:
      "If required, X-rays are taken to see what’s happening beneath the surface, like hidden decay or jaw issues.",
  },
  {
    title: " Deep Cleaning ",
    description:
      "Plaque and tartar are removed, and your teeth are polished to make them feel clean and smooth.",
  },
  {
    title: "Next Steps & Advice ",
    description:
      "You’ll get clear guidance on your dental health, tips to improve your routine, and recommendations if any treatment is needed. ",
  },
];

const faqs = [
  {
    question: "Which is better, All-on-4 or All-on-6 dental implants?",
    answer:
      " It depends on your bone condition and oral health. All-on-4 is suitable for most patients, while All-on-6 offers extra support for patients with lower bone density. ",
  },
  {
    question: "Are All-on-6 dental implants worth it?",
    answer:
      "Yes, they provide better stability, durability, and support, especially for patients needing full-mouth rehabilitation with reduced bone density.  ",
  },
  {
    question: "Can you eat with All-on-4 dental implants?",
    answer:
      "Yes, once healing is complete, you can eat most foods comfortably, just like with natural teeth. ",
  },

];

const AllOnFour = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
    });
    AOS.refresh();
  }, []);


  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>
          All-on-4 & All-on-6 Dental Implants in
          Kharadi, Pune | Denza Dental Center
        </title>
        <meta
          name="description"
          content="All-on-4 and All-on-6 dental 
implants in Kharadi, Pune at Denza Dental 
Center. Explore full-arch implant treatment, 
procedure, benefits, suitability, cost considerations 
and FAQs."
        />

        <link
          rel="canonical"
          href="https://denzadental.com/all-on-four"
        />

        <meta
          name="keywords"
          content=" 
All on 4 dental implants Kharadi, 
All on 4 dental implants Pune, 
All on 4 implants Kharadi, 
All on 4 implants Pune, 
All on 6 dental implants Kharadi, 
All on 6 dental implants Pune, 
All on 6 implants Kharadi, 
All on 6 implants Pune, 
All on four dental implants Pune, 
All on six dental implants Pune, 
full mouth dental implants Pune, 
full arch dental implants Pune, 
full arch implants Kharadi, 
full mouth implant treatment Pune, 
full mouth dental restoration Pune, 
full arch tooth replacement Pune, 
dental implants for full mouth Pune, 
dental implants for missing teeth Pune, 
fixed teeth implants Pune, 
fixed full arch teeth Pune, 
implant supported full arch Pune, 
implant supported teeth Pune, 
full mouth rehabilitation implants Pune, 
All on 4 cost Pune, 
All on 6 cost Pune, 
All on 4 dental implant cost Kharadi, 
All on 6 dental implant cost Kharadi, 
All on 4 dentist Pune, 
All on 6 dentist Pune, 
All on 4 dental implant clinic Pune, 
All on 6 dental implant clinic Pune, 
full mouth implants Kharadi, 
full arch implants Kharadi, 
dental implants near me Kharadi, 
full mouth dental implants near me, 
All on 4 vs All on 6, 
All on 4 or All on 6, 
All on 4 treatment Pune, 
All on 6 treatment Pune, 
Denza Dental Center, 
Denza Dental, 
Denza Dental Kharadi, 
Denza Dental Pune 
"
        />

        <meta
          name="geo.region"
          content="IN-MH"
        />
        <meta
          name="geo.placename"
          content="Kharadi, Pune, Maharashtra, India"
        />

        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:site_name"
          content="Denza Dental Center"
        />
        <meta
          property="og:title"
          content="All-on-4 & All-on-6 Dental Implants 
in Kharadi, Pune | Denza Dental Center"
        />
        <meta
          property="og:description"
          content="Explore All-on-4 and All-on-6 
full-arch dental implant treatment at Denza Dental 
Center in Kharadi, Pune, including treatment 
options, procedure, benefits and FAQs."
        />
        <meta
          property="og:url"
          content="https://denzadental.com/all-on-four"
        />
        <meta
          property="og:image"
          content="https://denzadental.com/og-image.jpg"
        />
        <meta
          property="og:image:alt"
          content="All-on-4 and All-on-6 dental implant 
treatment at Denza Dental Center in Kharadi 
Pune"
        />
        <meta
          property="og:locale"
          content="en_IN"
        />
      </Helmet>
      <PageTop title="All-on-4 & All-on-6 Dental Implants Services" />

      <div className="brace_treat_parent parent">
        <div className="brace_treat_cont cont">
          <h2>All-on-4 & All-on-6 Dental Implants in Kharadi, Pune | Denza Dental</h2>
          <div>
            <p>
              Missing teeth can affect your confidence, eating ability, and speech. At Denza Dental, Kharadi,
              we offer advanced full-mouth restoration solutions with All-on-4 and All-on-6 dental implants
              in Pune.
            </p>

            <p>
              These modern implant techniques are designed to replace a full arch of missing teeth using only
              4 or 6 implants, providing a fixed, stable, and natural-looking smile.
            </p>

            <p>
              Many patients have regained their confidence and improved their quality of life through our
              All-on-4 and All-on-6 implant treatments.
            </p>
          </div>
        </div>
      </div>

      <div className="parent second_parent">
        <div className="cont second_cont">
          <div className="general_left">
            <img src={img1} alt="General Dental Service" />
          </div>
          <div className="general_right">
            <h2>What Are All-on-4 and All-on-6 Dental Implants?</h2>

            <p>
              All-on-4 and All-on-6 dental implants are advanced full-mouth restoration solutions
              designed to replace multiple missing teeth using a minimal number of implants.
            </p>

            <p>
              <strong>All-on-4 Dental Implants</strong>In this technique, 4 strategically placed implants are used to support a full arch of teeth.
              This reduces the need for multiple implants while restoring complete function and
              aesthetics.
            </p>

            <p>
              <strong>All-on-6 Dental Implants</strong>Similar to All-on-4, this method uses 6 implants instead of 4, providing extra support
              and stability. It is often recommended for patients with lower bone density or higher bite
              force requirements.
            </p>

            <p>
              These implants are fixed and do not need to be removed like traditional dentures. They
              function like natural teeth, allowing you to eat, speak, and smile with confidence.
            </p>
          </div>
        </div>
      </div>

      <div className="parent dental_implants_procedures_parent">
        <div className="cont dental_implants_procedures_cont">
          <h2>Benefits of All-on-4 & All-on-6 Dental Implants</h2>
          <p>
            These advanced full-mouth implant solutions offer several life-changing benefits:
          </p>

          <div className="dental_implants_cards_main1">
            <div className="dental_implants_cards_wrap">
              <h3>Immediate Results </h3>
              <ul>
                <li>Same-day temporary teeth in many cases </li>
                <li>
                  Faster healing compared to traditional dentures
                </li>
              </ul>
            </div>

            <div className="dental_implants_cards_wrap">
              <h3>Bone Preservation</h3>
              <ul>
                <li>
                  Stimulates jawbone and prevents bone loss after tooth loss
                </li>
                <li>Maintains natural facial structure</li>
              </ul>
            </div>

            <div className="dental_implants_cards_wrap">
              <h3>Restored Functionality</h3>
              <ul>
                <li>
                  Fixed teeth with no slipping or movement
                </li>
                <li>Ability to eat, speak, and smile confidently </li>
              </ul>
            </div>

            <div className="dental_implants_cards_wrap">
              <h3>Long-Lasting Solution</h3>
              <ul>
                <li>Can last 15–20+ years with proper care</li>
                <li>Highly durable and stable</li>
              </ul>
            </div>

            <div className="dental_implants_cards_wrap" >
              <h3>Improved Facial Aesthetics</h3>
              <ul>
                <li>
                  Custom-designed teeth for a natural-looking smile
                </li>
                <li>Enhances overall facial appearance</li>
              </ul>
            </div>

            <div className="dental_implants_cards_wrap">
              <h3>Implants vs Traditional Dentures</h3>
              <ul>
                <li>
                  Fixed and permanent (no removal required)
                </li>
                <li>No adhesives needed </li>
                <li>Eat almost all types of food comfortably</li>
                {/* <li>Restores near-natural chewing efficiency (~90–100%) </li>
                <li>More stable and natural compared to dentures (~50% chewing ability)</li>
                <li>Lower long-term maintenance and replacement </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="after_care_parent parent">
        <div className="after_care_cont cont">
          <h2>Why Choose Denza Dental for All-on-4 & All-on-6 Dental Implants in Pune? </h2>

          <p>
            Choosing the right clinic for All-on-4 or All-on-6 dental implants in Pune is the most
            important step for successful treatment and long-term results. At Denza Dental,
            Kharadi, we ensure advanced care in a comfortable and patient-friendly environment.
          </p>

          <p>
            We understand that full-mouth implant treatment is a major decision, and our team is
            here to guide you toward a confident, natural-looking smile.
          </p>

          <h2>Why Us?</h2>
          <p>
            <strong>Experienced Dentists with Global Exposure </strong>Our dental team has extensive experience in handling complex implant cases and has
            gained global exposure through advanced training and international clinical practices,
            ensuring world-class treatment standards in Pune.
          </p>

          <p>
            <strong>Advanced Technology </strong>We use modern tools like 3D imaging and computer-guided implant placement for
            accurate, safe, and predictable results.
          </p>

          <p>
            <strong>Comfort-Focused Experience</strong>Our clinic is designed to provide a relaxing experience throughout your treatment:
          </p>

          <ul>
            <li>Comfortable treatment setup</li>
            <li> Patient relaxation-focused environment</li>
            <li>Entertainment options during procedures</li>
          </ul>

          <h2>Patient-Centric Approach</h2>

          <ul>
            <li>Friendly and transparent communication</li>
            <li>Clear explanation of every step </li>
            <li>Focus on comfort and trust</li>
          </ul>
          <p>
            <strong>Advanced Treatment Techniques</strong>We follow modern global protocols to ensure safe, efficient, and long-lasting implant
            outcomes
          </p>
        </div>
      </div>




      <div className="faq_section1">
        <div className="faq_header">
          <h2>FAQs</h2>
          <p>
            Answers to the most common questions about our general dental care.
          </p>
        </div>

        <div className="faq_list">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className={`faq_item ${isOpen ? "open" : ""}`}
                onClick={() => toggleFaq(index)}

              >
                <button className="faq_question" type="button">
                  <span>{item.question}</span>
                  <span className="faq_toggle">{isOpen ? "▲" : "▼"}</span>
                </button>
                <div className="faq_answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="parent gallery_parent">
        <div className="cont gallery_cont">
          <div className="gallery_header">
            <h2>Clinic Gallery</h2>

          </div>
          <div className="gallery_slider">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={4}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 16 },
                600: { slidesPerView: 2, spaceBetween: 18 },
                900: { slidesPerView: 3, spaceBetween: 20 },
                1200: { slidesPerView: 4, spaceBetween: 24 },
              }}
            >
              {[gallery1, gallery1, gallery1, gallery1].map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="gallery_card" data-aos="fade-up" data-aos-delay={index * 100}>
                    <img src={src} alt={`Clinic slide ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOnFour;
