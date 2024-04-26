const Features = () => {
    return (
      <>
        <div className="dark:bg-gray-100 dark:text-gray-800">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-5">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Explore Our Exclusive Features
              </h2>
              <p className="mt-4 text-lg dark:text-gray-600">
                Dive into a variety of features tailored to elevate your creative journey.
              </p>
            </div>
            <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Endless Variety</dt>
                  <dd className="mt-2 dark:text-gray-600">
                    Discover an extensive range of products, from home decor to artisanal crafts, catering to all your creative needs.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Express Your Creativity</dt>
                  <dd className="mt-2 dark:text-gray-600">
                    Find everything you need to unleash your imagination, from vibrant paints to premium-quality brushes.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Comprehensive Selection</dt>
                  <dd className="mt-2 dark:text-gray-600">
                    Explore our extensive collection of art supplies and accessories, catering to artists of all skill levels.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 dark:text-violet-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div className="ml-3">
                  <dt className="text-lg font-medium">Unleash Inspiration</dt>
                  <dd className="mt-2 dark:text-gray-600">
                    Find inspiration for your next project through our carefully curated collections, designed to spark creativity.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </>
    );
  };
  
  export default Features;
  