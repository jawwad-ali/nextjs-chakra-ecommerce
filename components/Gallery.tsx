"use client";
import React from "react";
import style from "./gallery.module.css";

import HeadPhone from "../assets/headphones.webp";
import Shoes from "../assets/shoes.webp";
import Dice from "../assets/dice.webp";
import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <div className={style.body}>
        <div className={style.container}>
          {/* @ts-ignore */}
          <Image src={HeadPhone} alt="headphone" className={style.image} />
          <div className={style.overlay}>
            <div className={style.textTwo}>Wireless HeadPhone</div>
          </div>
        </div>

        <div className={style.containerTwo}>
          {/* @ts-ignore */}
          <Image src={Shoes} alt="shoe" className={style.image} />
          <div className={style.overlayTwo}>
            <div className={style.textTwo}>Wireless HeadPhone</div>
          </div>
        </div>

        <div className={style.containerThree}>
          {/* @ts-ignore */}
          <Image src={Dice} alt="Dice" className={style.image} />
          <div className={style.overlayThree}>
            <div className={style.textTwo}>Wireless HeadPhone</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
