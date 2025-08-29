import { Header } from "@/src/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">Welcome to Templates</h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover our comprehensive solutions by exploring the navigation menu above. Hover over any menu item to see
            detailed options and services.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-zinc-200 border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors dark:border-zinc-800"
              >
                Get Started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-zinc-200 border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors dark:border-zinc-800"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Explore Our Mega Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">H</span>
                </div>
                <h3 className="font-semibold text-gray-900">Home</h3>
                <p className="text-sm text-gray-500 mt-1">Account, Components, Tutorials</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">S</span>
                </div>
                <h3 className="font-semibold text-gray-900">Solutions</h3>
                <p className="text-sm text-gray-500 mt-1">Web, Mobile, Analytics</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">S</span>
                </div>
                <h3 className="font-semibold text-gray-900">Services</h3>
                <p className="text-sm text-gray-500 mt-1">Development, Design, Support</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold">C</span>
                </div>
                <h3 className="font-semibold text-gray-900">Companies</h3>
                <p className="text-sm text-gray-500 mt-1">Startups, Enterprise, Agencies</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold">P</span>
                </div>
                <h3 className="font-semibold text-gray-900">Portfolio</h3>
                <p className="text-sm text-gray-500 mt-1">Work, Case Studies, Industries</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
