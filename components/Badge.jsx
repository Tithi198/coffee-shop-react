import Image from "next/image";

const Badge = ({ containerStyles }) => {
  return (
    <div className={`relative ${containerStyles}`}>
     <img src="/assets/badge.svg" alt="" className="object-contain" />
    </div>
  );
};

export default Badge;
