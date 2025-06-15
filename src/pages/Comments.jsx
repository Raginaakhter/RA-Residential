import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Comments = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Date Time */}
      <div className="text-center text-emerald-600 font-semibold text-xl sm:text-2xl mt-5 pb-5">
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
      </div>

      {/* Carousel Section */}
      <div className="carousel w-full max-w-screen-xl mx-auto rounded-lg overflow-hidden">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full object-cover"
            alt="carousel1"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full object-cover"
            alt="carousel2"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full object-cover"
            alt="carousel3"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full object-cover"
            alt="carousel4"
          />
        </div>
      </div>

      {/* Carousel buttons */}
      <div className="flex w-full justify-center gap-2 max-w-full ">
        {[1, 2, 3, 4].map((num) => (
          <a key={num} href={`#item${num}`} className="btn btn-xs sm:btn-sm">
            {num}
          </a>
        ))}
      </div>

      {/* Collapsible Info Section */}
      <div className="collapse collapse-arrow border border-base-300 bg-emerald-600 mt-10 px-4 md:px-8">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-white text-base md:text-lg peer-checked:bg-blue-700 peer-checked:text-white">
          What type of house do you need?
        </div>
        <div className="collapse-content bg-blue-700 text-white peer-checked:bg-emerald-600 text-sm md:text-base">
          Whether you're dreaming of a cozy apartment, a luxurious villa, a modern duplex, or a spacious single-family home—we’ve got you covered!
          <br /><br />
          At <strong>RA Residential</strong>, we specialize in helping you find the perfect home that fits your lifestyle, budget, and personal preferences.
          <br /><br />
          ✅ Residential house sales & rentals<br />
          ✅ Custom-designed new homes<br />
          ✅ Affordable housing options<br />
          ✅ Luxury properties<br />
          ✅ Property consultation and legal assistance
        </div>
      </div>

      {/* Pricing Section */}
      <div className="relative isolate bg-white px-4 sm:px-6 py-16 sm:py-24 lg:px-8">
        {/* Gradient decoration */}
        <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
          <div
            className="mx-auto w-[1155px] aspect-[1155/678] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
          ></div>
        </div>

        {/* Section Title */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-lg font-semibold text-indigo-600">Pricing</h2>
          <p className="mt-2 text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            Choose the right plan for you
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-base sm:text-lg text-gray-600">
          Choose an affordable plan packed with the best features for engaging your audience and driving results.
        </p>

        {/* Pricing Cards */}
        <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-y-8 sm:mt-16 lg:max-w-4xl lg:grid-cols-2 gap-x-8">
          {/* Hobby Plan */}
          <div className="rounded-3xl bg-white/60 p-6 sm:p-10 ring-1 ring-gray-900/10">
            <h3 className="text-lg font-semibold text-indigo-600">Hobby</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-4xl sm:text-5xl font-semibold text-gray-900">$29</span>
              <span className="text-base text-gray-500">/month</span>
            </p>
            <p className="mt-4 text-gray-600">Perfect if you’re just getting started.</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li>✅ 25 products</li>
              <li>✅ Up to 10,000 subscribers</li>
              <li>✅ Advanced analytics</li>
              <li>✅ 24-hour support response time</li>
            </ul>
            <a href="#" className="mt-6 inline-block text-indigo-600 font-semibold hover:underline">
              Get started today
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-3xl bg-gray-900 p-6 sm:p-10 text-white shadow-2xl ring-1 ring-gray-900/10">
            <h3 className="text-lg font-semibold text-indigo-400">Enterprise</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-4xl sm:text-5xl font-semibold">$99</span>
              <span className="text-base text-gray-400">/month</span>
            </p>
            <p className="mt-4 text-gray-300">For companies that need dedicated support.</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              <li>✅ Unlimited products</li>
              <li>✅ Unlimited subscribers</li>
              <li>✅ Advanced analytics</li>
              <li>✅ Dedicated support</li>
              <li>✅ Marketing automations</li>
              <li>✅ Custom integrations</li>
            </ul>
            <Link
              to="/itempage1"
              className="mt-6 inline-block bg-indigo-500 px-4 py-2 rounded-md font-semibold hover:bg-indigo-400"
            >
              Get started today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
