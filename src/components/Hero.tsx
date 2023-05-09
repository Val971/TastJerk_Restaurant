import { useState } from "react";

import SvgDecoratorBlob2 from "../assets/dot-pattern.svg";
import SvgDecoratorBlob1 from "../assets/svg-decorator-blob-1.svg";

type HeroProps = {
  title: string;
  subTitle: string;
  description: string;
  buttonUrl: string;
  buttonText: string;
  watchVideoButtonText: string;
  heroImageUrl: string;
  imageDecoratorBlob: boolean;
};

const Hero = ({
  title,
  subTitle,
  description,
  buttonUrl,
  buttonText,
  watchVideoButtonText,
  heroImageUrl,
  imageDecoratorBlob = false,
}: HeroProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const TwoColumn = `flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
  const LeftColumn = `relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
  const RightColumn = `relative mt-12 lg:mt-0 flex flex-col justify-center`;
  const Heading = `font-black text-[#243E63] text-3xl md:text-4xl leading-snug max-w-3xl`;
  const HighlightedText = `bg-[#6415FF] mt-4 text-gray-100 px-4 py-1  transform -skew-x-12 inline-block`;
  const Paragraph = `my-5 lg:my-8 text-sm lg:text-base font-medium text-[#718096] max-w-lg mx-auto lg:mx-0`;
  const Actions = `flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
  const PrimaryButton = `font-bold px-8 lg:px-10 py-3 rounded bg-[#6415FF] text-gray-100 hover:bg-[#511660] hocus:bg-[#511660] focus:shadow-outline focus:outline-none transition duration-300`;
  const WatchVideoButton = `mt-4 sm:mt-0 sm:ml-8 flex items-center text-[#718096] transition duration-300 hocus:text-primary-400 focus:outline-none`;
  const IllustrationContainer = `flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;
  const DecoratorBlob2 = `pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`;
  const DecoratorBlob1 = `pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`;

  return (
    <div className="relative">
      <div className={TwoColumn}>
        <div className={LeftColumn}>
          <h1 className={Heading}>
            {title}
            <span className={HighlightedText}>{subTitle}</span>
          </h1>

          <p className={Paragraph}>{description}</p>
          <div className={Actions}>
            <a className={PrimaryButton} href={buttonUrl}>
              {buttonText}
            </a>
          </div>
        </div>
        <div className={RightColumn}>
          <div className={IllustrationContainer}>
            <img className=" rounded-[2.5rem]" src={heroImageUrl} alt="Hero" />
            {imageDecoratorBlob && (
              <img className={DecoratorBlob2} src={SvgDecoratorBlob2} />
            )}
          </div>
        </div>
      </div>
      <img src={SvgDecoratorBlob1} className={DecoratorBlob1} alt="" />
    </div>
  );
};
export default Hero;
