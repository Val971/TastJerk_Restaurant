import styled from "styled-components";
import SvgDotPattern from "../assets/dot-pattern.svg";

const Container = `relative`;
const TwoColumn = `flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 md:items-center`;
const Column = `w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = `${Column} md:w-5/12 flex-shrink-0 h-80 md:h-auto relative md:w-1/2 h-auto`;
const TextColumn = `${Column} md:w-7/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first`;

const Image = styled.div((props: any) => [
  `background-image: url("${props.imageSrc}");`,
  `rounded bg-contain bg-no-repeat bg-center h-full rounded-4xl`,
]);
const TextContent = `lg:py-8 text-center md:text-left`;
export const SubheadingBase = `font-bold text-primary-500`;
const Subheading = `${SubheadingBase} text-[#6415FF] text-center md:text-left`;
const SectionHeading = `text-4xl sm:text-5xl font-black tracking-wide text-center`;
const Heading = `${SectionHeading} mt-4 font-black text-[#243E63] text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = `mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-[#718096]`;
const HighlightedText = `bg-[#6415FF] text-gray-100 px-4 transform -skew-x-12 inline-block`;
const Statistics = `flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Statistic = `text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const Value = `font-bold text-lg sm:text-xl lg:text-2xl text-[#243E63] tracking-wide`;
const Key = `font-medium text-[#6415FF]`;
const PrimaryButtonBase = `px-8 py-3 font-bold rounded bg-[#6415FF] text-gray-100 hover:bg-[#511660] hocus:bg-[#511660] hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
const PrimaryButton = `${PrimaryButtonBase} mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const imageCss = `rounded-[2.5rem] bg-cover`;
const DecoratorBlob = `w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-[#6415FF] -z-10 left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`;

type MainFeature2Props = {
  heading2: string;
  heading1: string;
  imageDecoratorBlob: boolean;
  imageSrc: string;
  imageInsideDiv: boolean;
  textOnLeft: boolean;
  subheading: string;
  primaryButtonUrl: string;
  primaryButtonText: string;
  description: string;
  statistics: any;
};

export const MainFeature2 = ({
  heading1,
  heading2,
  subheading,
  statistics,
  description,
  primaryButtonText,
  primaryButtonUrl,
  textOnLeft = false,
  imageSrc,
  imageInsideDiv,
  imageDecoratorBlob,
}: MainFeature2Props) => {
  return (
    <div className={Container}>
      <div className={TwoColumn}>
        <div className={ImageColumn}>
          {imageInsideDiv ? (
            <img src={imageSrc} className={Image} />
          ) : (
            <img src={imageSrc} className={imageCss} alt="" />
          )}
          {imageDecoratorBlob && (
            <img src={SvgDotPattern} className={DecoratorBlob} />
          )}
        </div>
        <div className={TextColumn}>
          <div className={TextContent}>
            {subheading && <h5 className={Subheading}>{subheading}</h5>}
            <h2 className={Heading}>
              {heading1} <span className={HighlightedText}>{heading2}</span>
            </h2>
            <p className={Description}>{description}</p>
            <div className={Statistics}>
              {statistics.map((statistic: any, index: any) => (
                <div className={Statistic} key={index}>
                  <div className={Value}>{statistic.value}</div>
                  <div className={Key}>{statistic.key}</div>
                </div>
              ))}
            </div>
            <button className={PrimaryButton} as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainFeature2;
