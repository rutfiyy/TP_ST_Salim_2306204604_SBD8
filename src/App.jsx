import React, { useState } from "react";
import Header from "./components/header";
import Topic from "./components/topic";

import Logo from "./assets/logo.svg";
import OSLogo from "./assets/oslogo.svg";
import SBDLogo from "./assets/sbdlogo.svg";
import DMJLogo from "./assets/dmjlogo.svg";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col overflow-hidden">
      <Header setActiveSection={setActiveSection} />
      <main className="p-8 flex-grow">
        {activeSection === "home" && (
          <Topic image={Logo} title="WELCOME TO NETLAB">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.<br /><br />
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
          </Topic>
        )}
        {activeSection === "sbd" && (
          <Topic image={SBDLogo} title="NETLAB SBD">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.<br /><br />
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
          </Topic>
        )}
        {activeSection === "dmj" && (
          <Topic image={DMJLogo} title="NETLAB DMJ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.<br /><br />
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
          </Topic>
        )}
        {activeSection === "os" && (
          <Topic image={OSLogo} title="NETLAB OS">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.<br /><br />
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
          </Topic>
        )}
      </main>
    </div>
  );
}

export default App;