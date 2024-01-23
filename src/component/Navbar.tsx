import React from "react";
import { useMyContext } from "../GlobalVariable";
import { Link } from "react-router-dom";

const navbarList = ["crew", "technology"];

const Navbar: React.FC = () => {
    const { trigger, updateData } = useMyContext();
  
    const handleButtonClick = () => {
      updateData(!trigger);
    };
  
    return (
      <nav>
        <ul>
          {
          navbarList.map((data, i) => (
            <li key={i}>
              <Link to={data}>{data}</Link>
            </li>
          ))
          }
        </ul>
      </nav>
    );
  };

export default Navbar;
