import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amy Barker",
      message: "I have been able to save more money since joining Swift pay. Their Target Savings is Amazing. I have been able to save more money since joining Swift pay. Their Target Savings is Amazing.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amy",
      rating: 5
    },
    {
      name: "John Williams",
      message: "The customer service is exceptional. They responded to all my inquiries promptly and resolved my issues efficiently. Highly recommend their services to anyone looking for reliability.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      rating: 4
    },
    {
      name: "Sarah Miller",
      message: "Swift pay has revolutionized how I manage my finances. The interface is intuitive and the features are exactly what I needed. The target savings feature is a game-changer!",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 5
    },
    {
      name: "Robert Chen",
      message: "After trying multiple financial services, I can confidently say Swift pay stands out from the crowd. Their attention to detail and user experience is unmatched in the industry.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
      rating: 5
    },
    {
      name: "Emma Thompson",
      message: "The security features give me peace of mind knowing my finances are protected. Swift pay has thought of everything to ensure a safe and seamless experience.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      rating: 4
    },
    {
      name: "Michael Rodriguez",
      message: "As a freelancer, keeping track of my finances used to be a nightmare. Swift pay simplified everything. Now I can focus on my work instead of worrying about money management.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 5
    },
    {
      name: "Jessica Wang",
      message: "The automatic savings feature has helped me build an emergency fund without even thinking about it. Swift pay really understands what modern consumers need.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
      rating: 5
    },
    {
      name: "David Okafor",
      message: "The mobile app is flawless. I can manage my finances on the go, which is essential for my busy lifestyle. Swift pay has become an indispensable tool in my daily routine.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      rating: 4
    },
    {
      name: "Laura Martinez",
      message: "I've recommended Swift pay to all my friends and family. The referral program is generous, and everyone I've referred has thanked me for introducing them to such a fantastic service.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laura",
      rating: 5
    },
    {
      name: "Thomas Johnson",
      message: "The investment options are diverse and well-explained. As someone new to investing, I appreciate how Swift pay makes it accessible and understandable.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
      rating: 4
    },
    {
      name: "Olivia Patel",
      message: "Swift pay's budgeting tools have completely transformed how I think about spending. I'm more aware of my habits and have been able to eliminate unnecessary expenses.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
      rating: 5
    },
    {
      name: "William Lee",
      message: "The integration with other financial platforms is seamless. I can get a holistic view of my finances without juggling multiple apps or websites.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=William",
      rating: 4
    },
    {
      name: "Sophia Kim",
      message: "As a small business owner, Swift pay has simplified my accounting process. The business features are robust yet easy to use, saving me both time and money.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
      rating: 5
    },
    {
      name: "Daniel Brown",
      message: "The customer support team went above and beyond to help me resolve an issue. Their dedication to customer satisfaction is evident in every interaction.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
      rating: 5
    },
    {
      name: "Ava Johnson",
      message: "Swift pay's alerts and notifications keep me informed about my financial status. I'm never caught off guard by unexpected charges or low balances.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ava",
      rating: 4
    },
    {
      name: "James Wilson",
      message: "The bill payment feature is a lifesaver. I've never missed a payment since I started using Swift pay. The reminders are timely and the process is straightforward.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      rating: 5
    },
    {
      name: "Mia Garcia",
      message: "Swift pay's currency conversion features are essential for my international lifestyle. The rates are competitive and the process is transparent.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",
      rating: 4
    },
    {
      name: "Ethan Davis",
      message: "The goal-setting feature has helped me save for major purchases. I'm more disciplined with my spending knowing I have specific financial targets to reach.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ethan",
      rating: 5
    },
    {
      name: "Isabella Martinez",
      message: "Swift pay's educational resources have improved my financial literacy. I feel more confident making financial decisions thanks to their comprehensive guides.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella",
      rating: 4
    },
    {
      name: "Noah Anderson",
      message: "The joint account feature has simplified household finances for my partner and me. We can track our spending together while maintaining individual accounts.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Noah",
      rating: 5
    },
    {
      name: "Charlotte Taylor",
      message: "Swift pay has the best rewards program I've encountered. I earn points on everyday purchases that I can redeem for meaningful rewards.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlotte",
      rating: 5
    },
    {
      name: "Benjamin Robinson",
      message: "The spending analysis tools have revealed patterns I wasn't aware of. Swift pay has helped me identify areas where I can cut back and save more.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Benjamin",
      rating: 4
    },
    {
      name: "Amelia Nelson",
      message: "The tax preparation features saved me hours of work and stress. Swift pay organized all my financial information in one place, making tax season much more manageable.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amelia",
      rating: 5
    },
    {
      name: "Lucas Hill",
      message: "Swift pay's retirement planning tools have given me a clear picture of my financial future. I feel more prepared and less anxious about retirement.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
      rating: 5
    },
    {
      name: "Harper King",
      message: "The debt management features helped me develop a realistic plan to become debt-free. I'm making progress that would have been impossible without Swift pay.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Harper",
      rating: 4
    },
    {
      name: "Alexander Wright",
      message: "Swift pay's expense tracking is incredibly detailed yet easy to use. I can categorize and analyze my spending with minimal effort.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander",
      rating: 5
    },
    {
      name: "Evelyn Lopez",
      message: "The Swift pay community forum has been an unexpected benefit. I've learned so much from other users sharing their financial strategies and experiences.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Evelyn",
      rating: 4
    },
    {
      name: "Mason Scott",
      message: "The credit score monitoring feature has helped me improve my score significantly. Swift pay provides actionable advice tailored to my financial situation.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mason",
      rating: 5
    },
    {
      name: "Abigail Green",
      message: "Swift pay's subscription tracking has revealed several services I was paying for but not using. I've saved hundreds by cancelling unnecessary subscriptions.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abigail",
      rating: 5
    },
    {
      name: "Elijah Adams",
      message: "The cashback offers are relevant to my spending habits and easy to activate. I appreciate how Swift pay helps me save money on purchases I would make anyway.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elijah",
      rating: 4
    },
    {
      name: "Elizabeth Baker",
      message: "Swift pay's financial health score gives me a quick snapshot of my overall financial situation. It's motivating to see the score improve as I make better decisions.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elizabeth",
      rating: 5
    },
    {
      name: "Henry Carter",
      message: "The recurring payment feature ensures I never miss a bill. Swift pay has saved me from late fees and maintained my good standing with service providers.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Henry",
      rating: 5
    },
    {
      name: "Scarlet Mitchell",
      message: "Swift pay's customer service is available 24/7, which is crucial for my schedule. I've received assistance at odd hours without any delay or inconvenience.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Scarlet",
      rating: 4
    },
    {
      name: "Sebastian Hall",
      message: "The financial calendar helps me plan for upcoming expenses. Swift pay ensures I'm prepared for bills, subscriptions, and other regular payments.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sebastian",
      rating: 5
    },
    {
      name: "Chloe Rivera",
      message: "Swift pay's app is fast and reliable, even on older devices. I appreciate that they've designed it to be accessible to everyone, regardless of their technology.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chloe",
      rating: 5
    },
    {
      name: "Julian Campbell",
      message: "The biometric authentication gives me peace of mind. Swift pay prioritizes security without sacrificing convenience.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julian",
      rating: 4
    },
    {
      name: "Penelope Brooks",
      message: "Swift pay's customer loyalty program has rewarded me for my continued use. The perks improve with time, which encourages long-term engagement.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Penelope",
      rating: 5
    },
    {
      name: "Theodore Kelly",
      message: "The customizable dashboard allows me to prioritize the features I use most. Swift pay adapts to my needs rather than forcing me to adapt to the app.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Theodore",
      rating: 5
    },
    {
      name: "Zoe Cooper",
      message: "Swift pay's financial insights are personalized and actionable. The suggestions have helped me optimize my spending and saving habits.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe",
      rating: 4
    },
    {
      name: "Jayden Price",
      message: "The automated savings rules have helped me build wealth without thinking about it. Swift pay makes saving money effortless and painless.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jayden",
      rating: 5
    },
    {
      name: "Lily Reed",
      message: "Swift pay's gift card management feature is a hidden gem. I can keep track of all my gift cards in one place and never let them expire unused.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lily",
      rating: 5
    },
    {
      name: "Aiden Bailey",
      message: "The financial reports are comprehensive yet easy to understand. Swift pay provides me with insights that would require an accountant otherwise.",
      picture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aiden",
      rating: 4
    }
    // ... Include all testimonials here
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Function to handle next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  // Function to handle previous testimonial
  const previousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Function to handle testimonial selection when clicking an image
  const selectTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  // Generate star rating display
  const renderStars = (rating) => {
    return Array(rating)
      .fill()
      .map((_, index) => (
        <img key={index} src="./src/assets/star.svg" alt="star rating" className="w-4 h-4" />
      ));
  };

  // Column pattern array for diamond-like formation
  const columnPattern = [6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6];
  
  // Organize testimonials into columns based on the pattern
  const testimonialColumns = [];
  let testimonialIndex = 0;
  
  for (let i = 0; i < columnPattern.length; i++) {
    const count = columnPattern[i];
    const column = [];
    
    for (let j = 0; j < count && testimonialIndex < testimonials.length; j++) {
      column.push(testimonials[testimonialIndex % testimonials.length]);
      testimonialIndex++;
    }
    
    testimonialColumns.push(column);
  }

  // Create a flat array of all testimonials for mobile view
  const flatTestimonials = testimonials.slice(0, testimonialIndex);

  return (
    <div className="bg-white p-4">
      <div className="text-center md:-mb-28">
        <p className="bg-gray-200 w-max m-auto p-2 rounded-full text-sm my-4">Testimonials</p>
        <h3 className="text-xl font-bold my-2">
          We are Trusted by creatives and <br />leaders from different industries.
        </h3>
        <p className="text-[14px]">Over 2000+ Average 4-star rating.</p>
        <div className="flex justify-center">
          <img src="./src/assets/star.svg" alt="star" />
          <img src="./src/assets/star.svg" alt="star" />
          <img src="./src/assets/star.svg" alt="star" />
          <img src="./src/assets/star.svg" alt="star" />
        </div>
      </div>

      {/* Mobile view - horizontal scroll with all testimonials in a row */}
      <div className="md:hidden overflow-x-auto py-8">
        <div className="flex flex-row space-x-4 min-w-max px-4">
          {flatTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                index === currentTestimonial % flatTestimonials.length
                  ? 'scale-110 border-2 border-blue-500 shadow-md'
                  : 'border border-gray-200'
              } rounded-xl w-16 h-16`}
              onClick={() => selectTestimonial(index % flatTestimonials.length)}
            >
              <img
                src={testimonial.picture}
                alt={testimonial.name}
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop view - Diamond pattern display with centered columns */}
      <div className="hidden md:block py-8">
        <div className="flex flex-row justify-center items-center space-x-4">
          {/* Columns arranged horizontally */}
          {testimonialColumns.map((column, columnIndex) => (
            <div 
              key={columnIndex} 
              className="flex flex-col items-center gap-4 transition-all duration-500 ease-in-out"
            >
              {column.map((testimonial, itemIndex) => {
                // Calculate the overall index for this testimonial
                const overallIndex = testimonialColumns.slice(0, columnIndex).reduce((sum, c) => sum + c.length, 0) + itemIndex;
                
                return (
                  <div 
                    key={itemIndex}
                    className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                      overallIndex === currentTestimonial % testimonials.length
                        ? 'scale-110 border-2 border-blue-500 shadow-md'
                        : 'border border-gray-200'
                    } rounded-xl w-20 h-20`}
                    onClick={() => selectTestimonial(overallIndex % testimonials.length)}
                  >
                    <img
                      src={testimonial.picture}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Testimony display section with smooth transition */}
      <div className="bg-gray-200 rounded-[15px] w-[90%] md:w-2/4 md:-mt-20 mx-auto p-4 mb-6 transition-all duration-500 ease-in-out">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                src={testimonials[currentTestimonial].picture} 
                alt={testimonials[currentTestimonial].name}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>
            <div>
              <div className="flex">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <div className="font-medium transition-all duration-300">{testimonials[currentTestimonial].name}</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
              onClick={previousTestimonial}
              aria-label="Previous testimonial"
            >
              <img src="./src/assets/arrow-left.svg" alt="Previous" />
            </button>
            <button 
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <img src="./src/assets/arrow-right.svg" alt="Next" />
            </button>
          </div>
        </div>
        <div className="text-justify text-sm transition-opacity duration-300">
          {testimonials[currentTestimonial].message}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;