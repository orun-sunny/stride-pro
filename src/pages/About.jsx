// src/About.js

const About = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1683121324022-d039da524194?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white p-6 max-w-lg bg-opacity-75 bg-black rounded-lg">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="mb-4">
            Welcome to our recipe website! We are passionate about sharing
            delicious and easy-to-follow recipes with food enthusiasts around
            the world.
          </p>
          <p className="mb-4">
            Our team is dedicated to bringing you a variety of recipes that are
            perfect for any occasion, whether you're a beginner or an
            experienced cook.
          </p>
          <p>
            Thank you for visiting our site, and we hope you find your next
            favorite recipe here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
