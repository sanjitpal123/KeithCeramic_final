import { useState, useEffect } from "react";
import FetchQuality from "../services/Quality/FetchQuality";
import LoadingPage from "./LoadingPage";
import { motion } from "framer-motion";

function Quality() {
  const [QualityData, setQualityData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data function
  async function fetchquality() {
    try {
      const get = await FetchQuality();
      setQualityData(get);
      console.log("get", get);
    } catch (error) {
      console.log("error", error);
    }
  }

  const allphysicaltesting = QualityData?.filter(
    (item) => item.typeofproduct === "Physical Testing"
  );
  const welcemicalmachine = QualityData?.filter(
    (item) => item.typeofproduct === "Wet Chemical Laboratory Equipment"
  );
  const sandtestingmachine = QualityData?.filter(
    (item) => item.typeofproduct === "SAND TESTING EQUIPMENT"
  );

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // Simulate a delay
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    fetchquality();
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
        <div className="w-full min-h-screen pt-[120px] bg-gray-100 sm:pt-[150px] flex flex-col items-center py-10 animate-fadeIn">
          <h1 className="text-xl self-start ml-4 sm:ml-16 md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4 md:mb-10 animate-fadeIn">
            QUALITY
          </h1>

          {/* Physical Testing Equipment Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ amount: "some" }}
            className="w-[90%] md:w-[80%] bg-white shadow-lg rounded-lg p-6 mb-10 animate-fadeIn"
          >
            <h2 className="font-semibold mb-4 text-center text-md sm:text-2xl text-[#FD5D14]">
              Physical Testing Equipment
            </h2>

            {/* Mapping over filtered array to display equipment cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allphysicaltesting?.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 hover:cursor-pointer rounded-lg shadow-lg overflow-hidden relative group"
                >
                  <img
                    src={item.image || "./assets/images/default.jpg"} // Default image if none is provided
                    alt={item.name || "Equipment Image"}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4">
                      {item.description || "Equipment Name"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Wet Chemical Laboratory Equipment Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeRight}
            viewport={{ amount: "some" }}
            className="w-[90%] md:w-[80%] bg-white shadow-lg rounded-lg p-6 mb-10 animate-fadeIn"
          >
            <h2 className="font-semibold mb-4 text-center text-md sm:text-2xl text-[#FD5D14]">
              Wet Chemical Laboratory Equipment
            </h2>

            {/* Mapping over filtered array to display equipment cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {welcemicalmachine?.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 hover:cursor-pointer rounded-lg shadow-lg overflow-hidden relative group"
                >
                  <img
                    src={item.image || "./assets/images/default.jpg"} // Default image if none is provided
                    alt={item.name || "Equipment Image"}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4">
                      {item.description || "Equipment Name"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sand Testing Equipment Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ amount: "some" }}
            className="w-[90%] md:w-[80%] bg-white shadow-lg rounded-lg p-6 mb-10 animate-fadeIn"
          >
            <h2 className="font-semibold mb-4 text-center text-md sm:text-2xl text-[#FD5D14]">
              SAND TESTING EQUIPMENT
            </h2>

            {/* Mapping over filtered array to display equipment cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sandtestingmachine?.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 hover:cursor-pointer rounded-lg shadow-lg overflow-hidden relative group"
                >
                  <img
                    src={item.image || "./assets/images/default.jpg"} // Default image if none is provided
                    alt={item.name || "Equipment Image"}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4">
                      {item.description || "Equipment Name"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default Quality;
