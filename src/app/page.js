"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import "../../styles/landing.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import certficate from "../../public/assets/certificate.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Footer from './footer';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import DiscountNotification from './discountnotification/page';
import ScrollButton from './scrollButton/page';
import Link from 'next/link';
import Navbar from './navbar';



const images = [
  '/assets/banner1.png',
  '/assets/banner2.png',
  '/assets/banner3.png',
];



export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is JSMaster?",
      answer: "JSMaster is an online platform designed to help you master JavaScript through hands-on courses, real-time problem-solving, and project building. Whether you are a beginner or looking to deepen your knowledge, we have the right course for you.",
    },
    {
      question: "Who are the courses for?",
      answer: "Our courses are designed for everyone! Whether you are a complete beginner or an experienced developer looking to expand your knowledge, JSMaster has something to offer. We provide courses that cater to different skill levels.",
    },
    {
      question: "How do I access the courses?",
      answer: "Once you sign up, you will get access to our courses directly on the platform. You can watch video tutorials, complete coding challenges, and work on projects at your own pace.",
    },
    {
      question: "Do I receive a certificate upon completion?",
      answer: "Yes! After successfully completing any of our courses, you will receive a certificate of completion. This certificate can be shared on your LinkedIn profile, resume, or any other professional platform to showcase your skills.",
    },
    {
      question: "Are the courses free?",
      answer: "JSMaster offers both free and paid courses. Our free courses cover the basics, while our advanced courses offer more in-depth knowledge and additional features such as real-time problem solving and coding tests.",
    },
    {
      question: "How can I get support if I need help?",
      answer: "We offer 24/7 support through our platform. If you encounter any issues or need help with your coursework, you can reach out to our support team via email or live chat, and we’ll be happy to assist you.",
    },
  ];

  return (
    <div className="home_container">
      <Navbar />
      <DiscountNotification />
      <div className="hero_section">
        <div className="hero_image">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="swiper-container"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="slider_image">
                  <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="hero_content">
            <h1>Wel<span>come</span> to <span>JSM</span>aster</h1>
            <p>Your journey to <span>mastering</span> JavaScr<span>ipt st</span>arts here.</p>
            <Link href="/signup">
              <button className="cta_button">Get Started</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="courses_section">
        <h2>Ou<span>r Cou</span>rses</h2>
        <div className="course_list">
          <div className="course_item" data-aos="fade-right">
            <h3>Java<span>Script</span> Ba<span>sic</span>s</h3>
            <p>Learn the <span>fundamentals</span> of JavaScript, the language that <span>powers</span> the web.</p>
          </div>
          <div className="course_item" data-aos="fade-left">
            <h3>Advan<span>ced</span> Jav<span>aScr</span>ipt</h3>
            <p>Deep dive into <span>advanced</span> concepts and <span>techniques</span> to become a JavaScript <span>expert</span>.</p>
          </div>
          <div className="course_item" data-aos="fade-up-right">
            <h3>Prac<span>tice Real</span> Ti<span>me Probl</span>ems</h3>
            <p>Enhance your <span>skills</span> by solving <span>real-world</span> JavaScript challenges.</p>
          </div>
          <div className="course_item" data-aos="fade-up-left">
            <h3>Buil<span>d Pro </span><span>jects</span></h3>
            <p>Apply your knowledge by <span>building</span> full-fledged <span>JavaScript projects</span>.</p>
          </div>
          <div className="course_item" data-aos="fade-down-right">
            <h3>Cod<span>in</span>g <span>Te</span>st</h3>
            <p>Prepare for <span>interviews</span> with hands-on <span>coding te</span>sts and assessments.</p>
          </div>
          <div className="course_item" data-aos="fade-down-left">
            <h3>Get Cert<span>ifica</span>te</h3>
            <p>Earn a <span>recognized cert</span>ificate to showcase your Java<span>Script</span> skills.</p>
          </div>
        </div>
      </div>
      <div className="certificate_section">
        <h2>Certi<span>fica</span>tion</h2>
        <p>Earn a certificate upon completing each course to showcase your skills.</p>
        <Image src={certficate} alt="Certificate Image" className="certificate_image" data-aos="flip-right" />
      </div>
      <div className="my_plans">
        <h2>Our <span>Pla</span>ns</h2>
        <div className="plans_table_wrapper" data-aos="flip-up">
          <table className="plans_table">
            <thead>
              <tr data-aos="fade-down">
                <th>Module</th>
                <th>Free</th>
                <th>Advance</th>
              </tr>
            </thead>
            <tbody>
              <tr data-aos="fade-down">
                <td>Basic Concepts</td>
                <td><span className="check_icon">✔️</span></td>
                <td><span className="check_icon">✔️</span></td>
              </tr>
              <tr data-aos="fade-down">
                <td>Advanced Concepts</td>
                <td><span className="check_icon">✔️</span></td>
                <td><span className="check_icon">✔️</span></td>
              </tr>
              <tr data-aos="fade-down">
                <td>Real-Time Problems</td>
                <td><span className="check_icon col_r">Not all</span></td>
                <td><span className="check_icon">✔️</span></td>
              </tr>
              <tr data-aos="fade-down">
                <td>Project Building</td>
                <td><span className="check_icon col_r">Not all</span></td>
                <td><span className="check_icon">✔️</span></td>
              </tr>
              <tr data-aos="fade-down">
                <td>Coding Tests</td>
                <td><span className="check_icon">✔️</span></td>
                <td><span className="check_icon">✔️</span></td>
              </tr>
              <tr data-aos="fade-down">
                <td>Certification</td>
                <td><span className="check_icon">❌</span></td>
                <td><span className="check_icon">✔️</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="testimonial_container">
        <h2><u>What Ou<span>r Stu</span>dents Say</u></h2>
        <div className="testimonials">
          <div className="testimonial_item" data-aos="zoom-out-down">
            <p className="testimonial_quote">JSMaster helped me land my first job as a web developer. The courses were easy to follow, and the instructors were always there to help!</p>
            <p className="testimonial_name">Ajit Kumar</p>
            <p className="testimonial_role">Full-Stack Developer</p>
          </div>
          <div className="testimonial_item" data-aos="zoom-out-right">
            <p className="testimonial_quote">I loved the certification program! It gave me the confidence to apply for jobs and showcase my skills to potential employers.</p>
            <p className="testimonial_name">Girija Shankar</p>
            <p className="testimonial_role">Frontend Developer</p>
          </div>
          <div className="testimonial_item" data-aos="zoom-out-left">
            <p className="testimonial_quote">The advanced JavaScript course was exactly what I needed to take my skills to the next level. The real-time problems and projects made learning so much more effective.</p>
            <p className="testimonial_name">Nikhil Shokeen</p>
            <p className="testimonial_role">Full-Stack Developer</p>
          </div>

        </div>
      </div>
      <div className="faq_container" >
        <h2><u>Frequen<span>tly A</span>sked Quest<span>ion</span>s</u></h2>
        {faqData.map((faq, index) => (
          <div
            className={`faq_item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleFAQ(index)}
            data-aos="flip-up"
          >
            <div className="faq_question">
              <h3>{faq.question}</h3>
              <FontAwesomeIcon
                icon={activeIndex === index ? faChevronUp : faChevronDown}
                className="dropdown_icon"
              />
            </div>
            <div className="faq_answer" style={{ display: activeIndex === index ? 'block' : 'none' }}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      <ScrollButton />
    </div>
  );
}
