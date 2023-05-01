// pages/index.js
import Navbar from "../components/Navbar";

// Import anime.js
import anime from "animejs/lib/anime.es.js";

// Run animation when component is mounted
useEffect(() => {
  anime({
    targets: ".animate-this",
    translateX: "13rem",
    scale: [0.3, 0.9],
    rotate: "1turn",
    duration: 800,
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine",
  });
}, []);

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <a
            className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
            href="#"
          >
            Welcome to Whimsylabs
          </a>
          <p className="text-lg text-gray-600">
            ... Whimsylabs short description ...
          </p>
        </div>
      </header>

      <main className="w-full flex flex-col h-screen overflow-y-hidden">
        <div className="w-full flex flex-col h-screen overflow-x-hidden">
          <div className="w-full overflow-x-hidden">
            <video
              controls
              autoplay
              className="mx-auto lg:px-40 sm:px-20 py-12"
            >
              <source src="promo-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </source>
            </video>
          </div>

          <section className="bg-white py-8">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
              <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                Product Features
              </h1>
              <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
              </div>

              <div className="scroll-container flex overflow-x-scroll pb-10 hide-scrollbar">
                <div className="flex flex-nowrap">
                  {/* Add your screenshots here */}
                  <div className="inline-block px-3">
                    <img
                      className="w-48 h-32 object-cover rounded"
                      src="screenshot/screenshot1.png"
                      alt="screenshot 1"
                    />
                  </div>
                  <div className="inline-block px-3">
                    <img
                      className="w-48 h-32 object-cover rounded"
                      src="screenshot/screenshot2.png"
                      alt="screenshot 2"
                    />
                  </div>
                  {/* Add more screenshots if needed */}
                </div>
              </div>

              {/* Placeholder for product feature. Replace with actual data */}
              <div className="flex flex-wrap">
                <div className="w-5/6 sm:w-1/2 p-6">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    Feature 1
                  </h3>
                  <p className="text-gray-600 mb-8">
                    ... Description for Feature 1 ...
                  </p>
                </div>
                <div className="w-full sm:w-1/2 p-6">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    Feature 2
                  </h3>
                  <p className="text-gray-600 mb-8">
                    ... Description for Feature 2 ...
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
