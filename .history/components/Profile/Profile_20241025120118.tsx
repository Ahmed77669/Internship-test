import React from "react";
import Image from "next/image";
import selectedImage from "@/public/coders photos/coder2.jpg";

const Profile = () => {
  return (
    <section className="container px-96">
      <div className="">
        <div className="w-[60%]">
          <Image
            src={selectedImage}
            alt="Profile Avatar"
            style={{
              width: "100%",
              height: "300px",
              marginBottom: "24px",
              objectFit: "cover",
            }}
          />
          <Image
            src={selectedImage}
            alt="Profile Avatar"
            width={300}
            height={300}
            style={{
              width: "300px",
              height: "300px",
              marginBottom: "24px",
              borderRadius: "300px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
