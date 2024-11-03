import React from "react";
interface IndustryService {
  name: string;
  href: string;
}

const OutlineText: React.FC = () => {
  const industryServices: IndustryService[] = [
    { name: "E-Commerce", href: "/e-commerce" },
    { name: "Technology", href: "/technology" },
    { name: "Healthcare", href: "/healthcare" },
    { name: "Finance", href: "/finance" },
    { name: "Education", href: "/education" },
    { name: "Real Estate", href: "/real-estate" },
    { name: "Hospitality & Tourism", href: "/hospitality-tourism" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Entertainment", href: "/entertainment" },
    { name: "Government", href: "/government" },
    { name: "Fitness And Wellness", href: "/fitness-wellness" },
    { name: "Food And Beverage", href: "/food-beverage" },
    { name: "Fashion", href: "/fashion" },
    { name: "Event Management", href: "/event-management" },
    { name: "Transportation", href: "/transportation" },
  ];

  return (
    <div className="outline-text py-10 xl:py-20 xl:px-20 p-5  ">
      <h1 className="font-medium text-4xl xl:text-7xl text-white pb-5 xl:pb-10">
        Industry That We Serve
      </h1>
      <div className="grid xl:grid-cols-2">
        {industryServices.map((service, index) => (
          <div key={index}>
            <h2 className="outline-fill text-3xl xl:text-6xl ">
              {service.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutlineText;
