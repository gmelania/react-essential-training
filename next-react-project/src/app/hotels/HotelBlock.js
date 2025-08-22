"use client";
import Image from "next/image";

// dymanic component to render inside the page
export default function HotelBlock({ id, name, capacity }) {
  const imageLoader = ({ src }) => {
    return `./hotels/${src}.jpeg`;
  };
  return (
    <div>
      <h2>{name}</h2>
      <p>{capacity}</p>
      <Image src={id} width={200} height={300} loader={imageLoader} />
    </div>
  );
}
