import React from "react";
import "./nombtn.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NomBtn = () => {
  const navigate = useNavigate();
  const handleNominateClick = (e) => {
    e.preventDefault();
    Swal.fire({
      title:
        "Are you attending in person at the HR Summit Awards on 28th September 2024 at New Delhi?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/hreduskills/register");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Handle the case when the user cancels
      }
    });
  };
  return (
    <div>
      <div className="gradient-button">
        <Link onClick={handleNominateClick} to={"/register"} id="" href="">
          <i className="fa fa-sign-in-alt"></i> Nominate
        </Link>
      </div>
    </div>
  );
};

export default NomBtn;
