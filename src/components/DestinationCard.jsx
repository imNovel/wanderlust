import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";

const DestinationCard = ({ destination }) => {
  const {_id, imageUrl, price, destinationName, duration, country } = destination;
  return (
    <div className="border">
      <Image src={imageUrl} alt={destinationName} height={400} width={400} />
      <div>
        <div className="flex items-center gap-1">
          <LuMapPin /> <span>{country}</span>
        </div>
        <div className="flex justify-between p-2">
          <div>
            <div>
              <h2 className="text-xl font-bold">{destinationName}</h2>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCalendar />
              {duration}
            </div>
          </div>
          <div><h3 className="text-2xl font-bold">{price}</h3></div>
        </div>
        <Link href={`/destination/${_id}`}>
      <Button variant="ghost" className={'text-cyan-500 flex items-center'}
      ><FiExternalLink/> Book Now</Button>
      </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
