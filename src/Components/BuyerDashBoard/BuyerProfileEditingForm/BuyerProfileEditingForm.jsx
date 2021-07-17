import axios from "axios";
import { useState } from "react";
import { useBuyerAuth } from "../../../Context";
import "./BuyerProfileEditingForm.css";

export const BuyerProfileEditingForm = () => {
  const { buyerDetails } = useBuyerAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [techStack, setTechStack] = useState("");
  const [bio, setBio] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [descriptionInDetail, setDescriptionInDetail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const editDetailsHandler = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `https://code-n-mingle-backend.mittalminakshi.repl.co/buyer/${buyerDetails}`,
      {
        firstName,
        lastName,
        email,
        techStack,
        bio,
        profilePictureUrl,
        descriptionInDetail,
        mobileNumber,
      }
    );
    console.log(response);
  };

  return (
    <form className="profile-editing">
      <input
        className="profile-editing-form"
        placeholder="First Name"
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        className="profile-editing-form"
        placeholder="Last Name"
        onChange={(event) => setLastName(event.target.value)}
      />
      <input
        className="profile-editing-form"
        type="email"
        placeholder="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="profile-editing-form"
        placeholder="Enter your tech skills"
        onChange={(event) => setTechStack(event.target.value)}
      />
      <input
        className="profile-editing-form"
        placeholder="bio"
        onChange={(event) => setBio(event.target.value)}
      />
      <input
        className="profile-editing-form"
        placeholder="Enter url to upload profile picture"
        onChange={(event) => setProfilePictureUrl(event.target.value)}
      />
      <input
        className="profile-editing-form"
        placeholder="Talk about yourself"
        onChange={(event) => setDescriptionInDetail(event.target.value)}
      />
      <input
        className="profile-editing-form"
        placeholder="Mobile Number"
        type="number"
        onChange={(event) => setMobileNumber(event.target.value)}
      />
      <button className="profile-editing-submit" onClick={editDetailsHandler}>
        Submit
      </button>
    </form>
  );
};
