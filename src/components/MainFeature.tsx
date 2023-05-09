import React from "react";
import SvgDecoratorBlob2 from "../assets/dot-pattern.svg";

type MainFeatureProps = {
  imageSrc: string;
  subheading: string;
  heading1: string;
  heading2: string;
  description1: string;
  description2: string;
  primaryButtonText: string;
};

export const MainFeature = ({
  imageSrc,
  description1,
  description2,
  subheading,
  heading1,
  heading2,
  primaryButtonText,
}: MainFeatureProps) => {
  const TwoColumn = `flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
  const Column = `w-full max-w-md mx-auto md:max-w-none md:mx-0`;
  const ImageColumn = `${Column} md:w-6/12 flex-shrink-0 relative`;
  const imageCss = `rounded-[2.5rem]`;
  const imageDecoratorBlobCss = `left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25 w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`;
  const TextColumn = `${Column} md:w-6/12 mt-16 md:mt-0 md:ml-12 lg:ml-16 md:order-last`;
  const TextContent = `lg:py-8 text-center md:text-left`;
  const Subheading1 = `font-bold text-[#6415FF]`;
  const Subheading = `${Subheading1} text-center md:text-left`;
  const SectionHeading = `text-4xl sm:text-5xl font-black tracking-wide text-center`;
  const Heading = `${SectionHeading} text-[#243E63] mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
  const Description = `mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-[#718096]`;
  const PrimaryButtonBase = `px-8 py-3 font-bold rounded bg-[#6415FF] text-gray-100 hover:bg-[#511660] hocus:bg-[#511660] hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
  const PrimaryButton = `${PrimaryButtonBase} mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`;
  return (
    <div className="relative">
      <div className={TwoColumn}>
        <div className={ImageColumn}>
          <img className={imageCss} src={imageSrc} />
          <img
            src={SvgDecoratorBlob2}
            className={imageDecoratorBlobCss}
            alt=""
          />
        </div>
        <div className={TextColumn}>
          <div className={TextContent}>
            <h5 className={Subheading}>
              <span className="tracking-wider text-sm font-medium">
                {subheading}
              </span>
            </h5>
            <h2 className={Heading}>
              <span className=" w-9">{heading1}</span> <wbr />
              <span className="bg-[#6415FF] py-2 text-gray-100 px-4 transform -skew-x-12 inline-block">
                {heading2}
              </span>
            </h2>
            <p className={Description}>
              <span className="inline-block mt-8">{description1}</span>
              <span className="inline-block mt-8">{description2}</span>
            </p>
            <button className={PrimaryButton}>{primaryButtonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
