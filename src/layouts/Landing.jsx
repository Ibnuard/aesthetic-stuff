import { Button } from "@material-tailwind/react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className=" h-screen w-full bg-primary flex justify-center place-items-center">
      <div className=" flex flex-col gap-y-4 items-center">
        <div className=" text-center gap-y-2">
          <div className=" font-poppins text-2xl text-brown-500">
            aestheticStuff
          </div>
          <Typewriter
            options={{
              wrapperClassName: "font-poppins text-sm text-brown-300",
              cursorClassName: "text-sm text-brown-500",
              delay: 75,
              loop: true,
              autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Order semua barang estetik dan termurah")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Belanja sekarang...")
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
        <Button
          className=" w-80 text-brown-500 border-brown-300 normal-case font-poppins focus: shadow-none"
          variant={"outlined"}
          onClick={() => navigate("dashboard")}
        >
          Mulai Belanja
        </Button>
      </div>
    </div>
  );
};

export default Landing;
