import React from 'react';

const Accordion = () => {
  const faqData = [
    {
      question: "How do I create an account?",
      answer: 'Click the "Sign Up" button in the top right corner and follow the registration process.',
    },
    {
      question: "I forgot my password. What should I do?",
      answer: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
    },
    {
      question: "How do I update my profile information?",
      answer: 'Go to "My Account" settings and select "Edit Profile" to make changes.',
    },
    {
      question: "Can I change my email address later?",
      answer: 'Yes, you can update it from the profile settings.',
    },
  ];

  return (
    <div className="px-4 py-8 bg-white text-black">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-green-600 text-3xl sm:text-4xl font-bold mb-3">
          Meet Our Team
        </h1>
        <h3 className="text-green-600 text-base sm:text-lg leading-relaxed">
          Our expert team is made up of creatives with <br className="hidden sm:block" />
          technical know-how, strategists who think outside the box, and developers who push innovation.
        </h3>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center max-w-6xl mx-auto">
        {/* Accordion Section */}
        <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Ragina Akter is the main founder of this RA Residential company
          </h2>
          <p className="mb-6 text-sm">
            Our expert team is made up of creatives with technical know-how, strategists who think outside the box, and developers who push innovation.
          </p>

          {/* FAQ Accordions */}
          {faqData.map((item, index) => (
            <div key={index} className="collapse collapse-arrow border border-gray-300 bg-white rounded-md mb-2">
              <input type="radio" name="faq" defaultChecked={index === 0} />
              <div className="collapse-title font-medium">{item.question}</div>
              <div className="collapse-content text-sm">{item.answer}</div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <img
            className="w-full h-auto rounded-3xl shadow-lg"
            src="https://i.ibb.co/6JZ3KvrZ/image.jpg"
            alt="Team"
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
