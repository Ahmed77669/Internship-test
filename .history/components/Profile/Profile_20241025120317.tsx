import React from "react";
import Image from "next/image";
import selectedImage from "@/public/coders photos/coder2.jpg";

const Profile = () => {
  return (
    <section>
      <div className="flex justify-center">
        <div className="w-[1200px]">
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
            width={200}
            height={200}
            style={{
              width: "200px",
              height: "200px",
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
