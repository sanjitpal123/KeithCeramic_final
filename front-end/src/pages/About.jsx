import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Awards from "../components/Awards";
import History from "../components/History";
import MissionVision from "../components/MissionVision";
import Principles from "../components/Principles";
import TeamManagement from "../components/TeamManagement";
import WhyUs from "../components/WhyUs";
import Getseo from "../services/FetchSeo";
import LoadingPage from "./LoadingPage";
import FetchAboutHeading from "../services/AboutPage/FetchAboutHeading";
import { motion } from "framer-motion";

function About() {
  const [metadata, setMetadata] = useState(null);
  const [whoweare, setWhoweare] = useState("");
  const [Aboutdata, setAboutdata] = useState("");

  async function fetchAbout() {
    try {
      const res = await FetchAboutHeading();
      setAboutdata(res);
    } catch (error) {
      console.log("error", error);
    }
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    fetchAbout();
  }, []);

  useEffect(() => {
    async function fetchSeo() {
      try {
        const res = await Getseo();
        const seoforabout = res.find(
          (data) => data.typesofseo === "seo for about page"
        );
        setMetadata(seoforabout || {});
      } catch (error) {
        console.error("Error fetching SEO data", error);
      }
    }
    fetchSeo();
  }, []);

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <section className="pt-[150px] bg-gray-100 px-4 md:px-8">
          {metadata && (
            <Helmet>
              <title>{metadata.title || "About Us"}</title>
              <meta
                name="description"
                content={metadata.description || "Learn more about us"}
              />
              <meta
                name="keywords"
                content={metadata.keywords || "About Us, Company, Team"}
              />
              <meta
                name="author"
                content={metadata.author || "Keith Ceramic"}
              />
            </Helmet>
          )}

          {/* Heading */}
          <div>
            <h1 className="text-3xl font-bold text-[#02245B] mb-4">About Us</h1>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ amount: "some" }}
          ></motion.div>

          {/* Who We Are Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ amount: "some" }}
            className="max-w-7xl mx-auto mt-10 md:mt-20 px-4 md:px-8 lg:px-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Text Section */}
              <div className="order-2 lg:order-1">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeRight}
                  viewport={{ amount: "some" }}
                >
                  <h1 className="text-2xl md:text-4xl font-bold border-l-4 border-blue-800 pl-4 text-[#FD5D14] mb-6 md:mb-8 tracking-tight">
                    Who We Are?
                  </h1>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeLeft}
                  viewport={{ amount: "some" }}
                  className="space-y-4 md:space-y-6"
                >
                  <div className="prose prose-base md:prose-lg text-gray-800 leading-relaxed md:leading-loose">
                    <p className="text-justify md:text-left">
                      <strong className="text-blue-800">
                        Keith Ceramic (KTC)
                      </strong>{" "}
                      is a leading manufacturer & exporter of grey iron castings
                      with over three decades of excellence since 1992.
                    </p>

                    <p className="text-justify md:text-left">
                      As a family-owned enterprise, we combine traditional
                      craftsmanship with modern technology to deliver
                      world-class quality castings. Our annual production
                      capacity of <strong>30,000 MT</strong> is supported by a
                      dedicated team of skilled professionals committed to
                      timely delivery and competitive pricing.
                    </p>

                    <div className="mt-6 space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800">
                        <h3 className="font-semibold text-blue-900 mb-2">
                          Strategic Advantages
                        </h3>
                        <ul className="list-disc space-y-2 pl-5">
                          <li>
                            Prime location near major ports & railway networks
                          </li>
                          <li>
                            Direct access to national highway for seamless
                            logistics
                          </li>
                          <li>
                            Proximity to raw material sources (pig iron, hard
                            coke, scrap)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Image Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeRight}
                viewport={{ amount: "some" }}
                className="order-1 lg:order-2"
              >
                <div className="relative h-full w-full">
                  <img
                    className="rounded-xl shadow-xl w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                    src="/assets/images/sssss.jpg"
                    alt="Keith Ceramic Team"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl" />
                </div>
              </motion.div>
            </div>
               
          </motion.div>

          {/* Other Components with scroll-based animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ amount: "some" }}
          >
            <History />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeRight}
            viewport={{ amount: "some" }}
          >
            <MissionVision />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ amount: "some" }}
          >
            <Principles />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeRight}
            viewport={{ amount: "some" }}
          >
            <TeamManagement />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ amount: "some" }}
          >
            <WhyUs />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeRight}
            viewport={{ amount: "some" }}
          >
            <Awards />
          </motion.div>
        </section>
      )}
    </>
  );
}

export default About;
