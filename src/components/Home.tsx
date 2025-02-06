import React, { useState } from "react";
import Button from "./Button";

const Home: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100">
      {/* Left-side logo */}
      <a href="" className="text-xl font-bold text-blue-500">
        <img src="https://www.pokharainternet.com.np/wp-content/uploads/2020/01/logo-647.png" alt="Logo" className="h-10" />
      </a>
      
      {/* Right-side navigation */}
      <div className="flex space-x-4">
        <Button label="Home" onClick={() => console.log("Home clicked")} variant="primary" />
        <Button label="About Us" onClick={() => console.log("About Us clicked")} variant="primary" />
        
        <div className="relative">
          <Button label="Package" variant="primary" onClick={() => setDropdownOpen(!isDropdownOpen)} />
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg flex flex-col space-y-2">
              <Button label="Residential" onClick={() => console.log("Residential clicked")} variant="secondary" size="sm" />
              <Button label="SME" onClick={() => console.log("SME clicked")} variant="secondary" size="sm" />
              <Button label="Corporate" onClick={() => console.log("Corporate clicked")} variant="secondary" size="sm" />
            </div>
          )}
        </div>
        
        <Button label="Contact" onClick={() => console.log("Contact clicked")} variant="primary" />
        <Button label="Offers" onClick={() => console.log("Offer clicked")} variant="danger" /> 
      </div>
    </nav>
  );
};

export default Home;
