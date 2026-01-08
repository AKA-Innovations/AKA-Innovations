"use client";

import { FC, SVGProps } from "react";

interface ServiceCardProps {
  icon: FC<SVGProps<SVGElement>>;
  title: string;
  description: string;
  backgroundImage?: string;
  iconBorderColor: string;
  size?: "large" | "medium" | "small";
  variant?: "gradient" | "dark";
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  backgroundImage,
  iconBorderColor,
  size = "medium",
  variant = "dark"
}: ServiceCardProps) {
  const sizeClasses = {
    large: "row-span-2 h-[615px]",
    medium: "h-[615px]",
    small: "h-[299px]"
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} rounded-3xl  group cursor-pointer transition-transform hover:scale-[1.02]`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${variant === 'gradient' ? 'gradient-overlay-dark-blue' : 'gradient-overlay-dark'}`} />

      {/* Content */}
      <div className="relative h-full flex flex-col p-8 md:p-12">
        {/* Icon */}
        <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-auto border-[1.5px] ${iconBorderColor}`}>
          <Icon className="w-6 h-6" style={{ color: iconBorderColor.includes('cyan') ? '#38bdf8' : iconBorderColor.includes('pink') ? '#f472b6' : '#34d399' }} />
        </div>

        {/* Title and Description */}
        <div className="mt-auto">
          <h3 className="text-white font-extrabold font-inter text-2xl mb-3">
            {title}
          </h3>
          <p className="text-slate-400 font-normal font-inter text-base leading-7">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}