import React from 'react';

const Accordion = () => {
  return (
   
   <div>
    <div className='text-center'>
      <h1 className=' text-green-600 text-4xl'>
        
        Meet Our Team
      </h1>

      <h3 className=' text-green-600 text-20'>
        Our expert team is made up of creatives with  
technical know-how, strategist who think <br /> outside the box, and developers who push innovation
      </h3>
    </div>
     <div className='flex mt-8 '>
     
   
      <div className="join join-vertical bg-base-100">
         <h1 className='text-2xl mb-2 mt-2'>
        Ragina Akter is the main founder of this RA Residential company


      </h1>
        <p>Meet Our Team
          Our expert team is made up of creatives with
          technical know-how, strategist who think outside the box, and developers who push innovation</p>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title font-semibold">How do I create an account?</div>
          <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
          <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
        </div>
         <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
          <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
        </div>
         <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
          <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
        </div>
         <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
          <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">How do I update my profile information?</div>
          <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
        </div>
      </div>

      <div>
        <img className='h-100 w-100 rounded-3xl' src="https://i.ibb.co/6JZ3KvrZ/image.jpg" alt="" />
      </div>


    </div>
   </div>
  );
};

export default Accordion;