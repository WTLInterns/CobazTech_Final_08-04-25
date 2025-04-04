"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { motion, useScroll, useTransform, useAnimation } from "framer-motion"
import { FaUserTie, FaCogs, FaCheckCircle, FaLightbulb } from "react-icons/fa"
import { useInView } from "react-intersection-observer"

const FeatureItem = ({ icon, title, description }) => (
  <motion.div
    className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="text-orange-500 text-3xl">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
)

const features = [
  {
    icon: <FaUserTie />,
    title: "Expertise",
    description: "Years of experience in digital marketing",
  },
  {
    icon: <FaCogs />,
    title: "Customized Solutions",
    description: "Tailored strategies for maximum impact",
  },
  {
    icon: <FaCheckCircle />,
    title: "Commitment to Quality",
    description: "High-quality results that exceed expectations.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Technology",
    description: "Utilizing cutting-edge tools to drive success.",
  },
]

const CountUpAnimation = ({ target, duration = 2, label }) => {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      })

      let start = 0
      const end = Number.parseInt(target)
      const increment = end / (duration * 60) // 60 FPS

      const timer = setInterval(() => {
        start += increment
        setCount(Math.floor(start))

        if (start >= end) {
          clearInterval(timer)
          setCount(end)
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [inView, target, duration, controls])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls} className="flex flex-col items-center">
      <span className="text-4xl font-bold text-amber-500 mb-2">{count}+</span>
      <span className="text-sm text-gray-600 text-center">{label}</span>
    </motion.div>
  )
}

export default function AboutUs() {
  const [offset, setOffset] = useState(0)
  const { scrollYProgress } = useScroll()
  const pRef = useRef(null)
  const h2Ref = useRef(null)

  useEffect(() => {
    if (pRef.current && h2Ref.current) {
      const tl = gsap.timeline()

      tl.fromTo(
        pRef.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "power3.out" },
      )

      tl.fromTo(
        h2Ref.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "power3.out" },
        "-=0.5",
      )
    }
  }, [])

  const pText = "— About Us"
  const h2Text = "Transforming Businesses With Innovative Technology!"

  useEffect(() => {
    let animationFrame
    const updateOffset = () => {
      setOffset((prev) => (prev - 1) % window.innerWidth)
      animationFrame = requestAnimationFrame(updateOffset)
    }
    animationFrame = requestAnimationFrame(updateOffset)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  const stats = [
    { value: 250, label: "Happy Clients" },
    { value: 50, label: "Team Members" },
    { value: 510, label: "Projects Completed" },
    { value: 12, label: "Awards Won" },
  ]

  const images = [
    { src: "/images/royalty.webp", alt: "Image 1" },
    { src: "/digim.webp", alt: "Image 2" },
    { src: "/images/social.webp", alt: "Image 3" },
    { src: "/images/responsive.webp", alt: "Image 4" },
    { src: "/images/seoptimization.webp", alt: "Image 5" },
  ]

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <>
      <div className="overflow-hidden">
        <motion.div
          className="relative w-full h-[70vh] flex items-center px-4 sm:px-8 lg:px-16"
          style={{
            backgroundImage: "url('/images/aboutus.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            y,
          }}
        >
          <div className="max-w-lg sm:max-w-xl lg:max-w-2xl text-left z-10">
            <p ref={pRef} className="text-yellow-400 font-bold text-lg sm:text-xl md:text-2xl mb-4">
              {pText.split("").map((letter, index) => (
                <span key={index} className="inline-block">
                  {letter}
                </span>
              ))}
            </p>
            <h3 ref={h2Ref} className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
              {h2Text.split(" ").map((word, index) => (
                <span key={index} className="inline-block mr-2">
                  {word}
                </span>
              ))}
            </h3>
          </div>
        </motion.div>

        <section className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center text-gray-800 mb-16"
            >
              Our Achievements
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <CountUpAnimation target={stat.value} label={stat.label} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About CobazTech section */}
        <div className="w-full bg-gradient-to-b from-yellow-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/digital_Team.jpeg"
                alt="Digimedia Solutions Team"
                width={960}
                height={540}
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold text-amber-500 mb-6">About CobazTech</h2>
              <h4 className="text-2xl font-semibold mb-4">Welcome to CobazTech – Where Innovation Meets Excellence!</h4>
              <p className="text-gray-700 mb-4 text-lg">
                CobazTech is a leading digital solutions provider based in Kharadi, Pune. We specialize in App
                Development, Web Development, and Digital Marketing. With a proven track record of success, we have
                successfully completed over 2,000 projects for more than 300 clients, delivering impactful results
                through our insight-driven strategies.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full py-20 flex justify-center items-center overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('/dm.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              animation: "flowEffect 20s linear infinite",
            }}
          ></div>

          <div className="relative flex flex-col md:flex-row gap-8 text-white p-4 max-w-6xl">
            <motion.div
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-xl flex-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-3xl font-bold mb-4">OUR VISION</h2>
              <p className="text-lg">
                📌 To be the leading provider of digital solutions, empowering businesses through innovation and
                cutting-edge technology.
              </p>
            </motion.div>
            <motion.div
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-xl flex-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-3xl font-bold mb-4">OUR MISSION</h2>
              <p className="text-lg">
                🚀 Helping businesses reach their full potential through comprehensive digital strategies and
                personalized solutions.
              </p>
            </motion.div>
          </div>
        </div>

        <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              💡 We provide insights-based solutions to help businesses grow effectively in the digital landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center text-gray-800 mb-12"
            >
              
            </motion.h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Our talented team is the backbone of CobazTech. We encourage adding high-quality photos of our team
              members, along with their names and designations, to showcase the expertise behind our success.
            </p>
            <TeamTabs />
          </div>
        </section>

        <div className="flex flex-col items-center justify-center py-16 px-8 bg-gradient-to-b from-white to-yellow-50">
        <motion.h4
          className="text-amber-600 font-semibold text-lg mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work Process
        </motion.h4>
        {/* <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Google AdWords Process
        </motion.h2> */}
        <motion.p
          className="text-gray-600 text-center mb-12 max-w-3xl text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We follow a systematic approach to ensure the success of your Google
          AdWords campaigns, maximizing efficiency and delivering outstanding
          results.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Research", "Ideate", "Develop", "Launch"].map(
            (step, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold ${
                    index === 0
                      ? "bg-blue-200 text-blue-600"
                      : index === 1
                      ? "bg-green-200 text-green-600"
                      : index === 2
                      ? "bg-purple-200 text-purple-600"
                      : "bg-red-200 text-red-600"
                  }`}
                >
                  {`0${index + 1}`}
                </div>
                <h3 className="text-2xl font-bold mb-2">{step}</h3>
                <p className="text-gray-600">
                  {index === 0 && "📍Analyze market trends and client needs."}
                  {index === 1 && "📍Brainstorm innovative solutions."}
                  {index === 2 && "📍Create and refine the product."}
                  {index === 3 && "📍Deploy and monitor performance."}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>

        <section className="text-center py-20 bg-gradient-to-b from-purple-600 to-indigo-700 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.2, scale: 1.2 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
            }}
            className="absolute w-96 h-96 bg-yellow-300 rounded-full top-0 left-0 blur-3xl opacity-20"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.2, scale: 1.3 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              delay: 1,
            }}
            className="absolute w-96 h-96 bg-blue-300 rounded-full bottom-0 right-0 blur-3xl opacity-20"
          />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl font-extrabold text-white tracking-wide mb-8"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <p className="text-xl text-white mb-12">
              🚀 Schedule a free expert session and discover how we can help you achieve your digital goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#F59E0B" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-amber-500 text-white font-bold text-xl rounded-full shadow-lg transition-all duration-300 focus:outline-none"
            >
              <a
              href="tel:+91 8766922792"
            >
              Book Your Free Session Now
            </a> 
            </motion.button>
          </div>
        </section>
      </div>
    </>
  )
}

function TeamTabs() {
  const [activeTab, setActiveTab] = useState("digital")

  const digitalTeam = [
    {
      name: "Ashutosh Pandey",
      role: "Digital Marketing Manager",
      image: "/Team/Ashutosh.JPG",
    },
    {
      name: "Ankita Shelke",
      role: "Digital Marketing Executive",
      image: "/Team/Ankitashelke.JPG",
    },
    {
      name: "Purva bavale",
      role: "Digital Marketing Executive",
      image: "/Team/PurvaBavale.JPG",
    },
    {
      name: "Tejas Kamath",
      role: "Digital Marketing Executive",
      image: "/Team/Tejas.JPG",
    },
    
    {
      name: "Avinash Kumbharkar",
      role: "Digital Marketing Executive",
      image: "/Team/AvinashKumbharkar.JPG",
    },
    {
      name: "Ankita Wankhade",
      role: "Digital Marketing Executive",
      image: "/Team/AnkitaWankhade.JPG",
    },
  ]

  const itTeam = [
    {
      name: "Rhugved Hegde",
      role: "Team Lead",
      image: "/Team/Rhugved.JPG",
    },
    {
      name: "Waseb Untwale",
      role: "Team Lead",
      image: "/Team/Waseb.JPG",
    },
    {
      name: "Shubham Jagtap",
      role: "Full Stack Developer(Java)",
      image: "/Team/Shubham.JPG",
    },
    {
      name: "Jaywant Mhala",
      role: "Full Stack Developer(Java)",
      image: "/Team/Jaywant.JPG",
    },
    {
      name: "Hrushikesh Kapse",
      role: "Full Stack Developer(MERN)",
      image: "/Team/Hrushikesh.JPG",
    },
    {
      name: "Rohit More",
      role: "Full Stack Developer(Java)",
      image: "/Team/Rohit.JPG",
    },
    {
      name: "Arbaj Shaikh",
      role: "Full Stack Developer(Java)",
      image: "/Team/Arbaj.JPG",
    },
    {
      name: "Pragati Kokare",
      role: "Full Stack Developer(Java)",
      image: "/Team/Pragati.JPG",
    },
    {
      name: "Aakib Ansari",
      role: "Full Stack Developer(MERN)",
      image: "/Team/Aakib.JPG",
    },
    {
      name: "Imran Shaikh",
      role: "React Native Developer",
      image: "/Team/Imran.JPG",
    },
    {
      name: "Gautam Rana",
      role: "Full Stack Developer(Java)",
      image: "/Team/Gautam.JPG",
    },
    {
      name: "Abhishekh Pattekari",
      role: "React Native Developer",
      image: "/Team/Abhishekh.JPG",
    },
    {
      name: "Manasi Tambe",
      role: "Full Stack Developer(MERN)",
      image: "/Team/Manasi.JPG",
    },
    {
      name: "Nisha Takalkar",
      role: "IT Lead Generation",
      image: "/Team/Nisha1.JPG",
    },
    {
      name: "Sonali Salvi",
      role: "Sales Executive",
      image: "/Team/Sonali.JPG",
    }
  ]

  return (
    <div>
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 mr-4 ${
            activeTab === "digital" ? "bg-amber-500 text-white" : "bg-gray-200 text-gray-700"
          } rounded-full`}
          onClick={() => {
            setActiveTab("digital")
          }}
        >
          Digital Marketing Team
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "it" ? "bg-amber-500 text-white" : "bg-gray-200 text-gray-700"
          } rounded-full`}
          onClick={() => {
            setActiveTab("it")
          }}
        >
          IT Team
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(activeTab === "digital" ? digitalTeam : itTeam).map((member, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
          >
            <div className="relative mx-auto mb-3">
              <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-2 border-transparent hover:border-gray-200 transition-all duration-300">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1 transition-colors duration-300 hover:text-gray-700">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

