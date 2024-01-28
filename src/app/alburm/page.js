import Image from "next/image";
import React from "react";
import profileImg from "@/assets/manik.jpeg";

const AlburmPage = () => {
  return (
    <div>
      <h3>Using Image components</h3>
      <Image
        src="https://i.ibb.co/gWQwV4K/saidur.jpg"
        alt="profile picture"
        width={200}
        height={200}
      />
      <Image src={profileImg} alt="profile picture" width={200} height={200} />
      <img
        src="https://i.ibb.co/gWQwV4K/saidur.jpg"
        alt="profile picture"
        width="200px"
        height="200px"
      />
    </div>
  );
};

export default AlburmPage;
