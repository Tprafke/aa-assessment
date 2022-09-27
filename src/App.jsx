import "./App.css";
import { useState, useEffect } from "react";

import DropdownBtn from "./components/Dropdown/DropdownBtn";
import DropdownMenu from "./components/Dropdown/DropdownMenu";

function App() {
  const [isShowing, setIsShowing] = useState(false);
  const [identities, setIdentities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredIdentities = filterIdentities(identities, searchTerm);
  const currentUser = {
    name: "Jane Doe",
    email: "jane@advisoryalpha.com",
    photoURL: "https://randomuser.me/api/portraits/women/2.jpg",
    IdentityName: "AA - Admin",
    dropdownRole: "AA / Home Office Admin",
    role: "Administrator",
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  function filterIdentities(identities, searchTerm) {
    if (!searchTerm) {
      return identities;
    }

    return identities.filter((identity) => {
      const identityName = identity.name.toLowerCase();
      return identityName.includes(searchTerm);
    });
  }

  useEffect(() => {
    fetch("https://advisoryalpha.github.io/skill-assessments/identities.json")
      .then((response) => response.json())
      .then((data) => setIdentities(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='container flex justify-center items-center mx-auto'>
      <div className='mt-5 flex items-center md:order-2'>
        <DropdownBtn
          currentUser={currentUser}
          isShowing={isShowing}
          setIsShowing={setIsShowing}
        />
        <DropdownMenu
          currentUser={currentUser}
          isShowing={isShowing}
          filteredIdentities={filteredIdentities}
          handleChange={handleChange}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
}

export default App;
