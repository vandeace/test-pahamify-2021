import React, { useState } from "react";
import Login from "components/Modals/Login";
import Search from "components/Modals/SearchManga";

const Navbar = () => {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);

  return (
    <div style={{ borderBottom: "2px solid #E5E5E5" }}>
      <Login modal={modalLogin} setModal={setModalLogin} />
      <Search modal={modalAdd} setModal={setModalAdd} />
      <nav
        className="h-16 flex justify-between items-center bg-white text-blue-primary relative shadow-sm font-mono container mx-auto 2xl:p-2 px-4"
        role="navigation"
      >
        <div className="h6">MANGA</div>
        <div className="md:block hidden">
          <button
            className="py-2 px-4 mr-3 rounded-md bg-blue-primary border border-blue-primary text-white hover:bg-white hover:text-blue-primary focus:outline-none"
            type="submit"
            onClick={() => setModalLogin(!modalLogin)}
          >
            Login
          </button>
          <button
            onClick={() => setModalAdd(!modalAdd)}
            className="py-2 px-4 mr-3 rounded-md bg-white text-blue-primary border border-blue-primary hover:bg-blue-primary hover:text-white focus:outline-none"
          >
            Register
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
