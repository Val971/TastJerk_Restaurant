import ArrowRightIcon from "../assets/right-arrow.png";
import SvgDecoratorBlob3 from "../assets/svg-decorator-blob-3.svg";

const Heading = `text-4xl sm:text-5xl font-black tracking-wide text-center`;
const Subheading = `font-bold text-primary-500 text-center mb-3`;
const Description = `mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl text-center mx-auto`;
const ThreeColumnContainer = `mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`;

const Column = `lg:w-1/3 max-w-xs`;

const Card = `flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `;

const imageContainer = `text-center rounded-full p-4 bg-gray-100 p-2`;
const title = `mt-4 text-[#243E63] font-bold text-xl leading-none`;
const link = `mt-auto inline-flex items-center pt-5 text-sm font-bold text-[#6415FF] leading-none hocus:text-primary-900 transition duration-300`;
const desc = `mt-4 text-sm font-medium text-[#506582]`;

const DecoratorBlob = `pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`;
const HighlightedText = `bg-[#6415FF] text-gray-100 px-4 transform -skew-x-12 inline-block`;
const ContentWithPaddingXl = `max-w-screen-xl mx-auto py-20 lg:py-24`;

type ServicesProps = {
  subheading?: string;
  heading1?: string;
  heading2?: string;
  description?: string;
  cards: any;
};

const Services = ({
  cards,
  subheading,
  heading1,
  heading2,
  description,
}: ServicesProps) => {
  return (
    <div className="relative">
      <div className={ContentWithPaddingXl}>
        {subheading && <h5 className={Subheading}>{subheading}</h5>}
        {heading1 && (
          <h2 className={Heading}>
            {heading1} <span className={HighlightedText}>{heading2}</span>
          </h2>
        )}
        {description && <p className={Description}>{description}</p>}
        <div className={ThreeColumnContainer}>
          {cards.map((card: any, i: number) => (
            <div className={Column} key={i}>
              <a className={Card} href={card.url}>
                <span className={imageContainer}>
                  <img src={card.imageSrc} alt="" className="w-20 h-20" />
                </span>
                <span className={title}>{card.title}</span>
                <p className={desc}>{card.description}</p>

                <span className={link}>
                  <span>Learn More</span>
                  <img src={ArrowRightIcon} className="ml-2" alt="" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <img src={SvgDecoratorBlob3} className={DecoratorBlob} alt="" />
    </div>
  );
};
export default Services;
