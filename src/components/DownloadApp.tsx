//import SvgDecoratorBlob1 from "../assets/svg-decorator-blob-7.svg";
import SvgDecoratorBlob2 from "../assets/svg-decorator-blob-8.svg";
import appleIconImageSrc from "../assets/apple-icon.png";
import googlePlayIconImageSrc from "../assets/google-play-icon.png";
import mockupImageSrc from "../assets/app-mockup.png";
import SvgDecoratorBlob1 from "../assets/svg-decorator-blob-9.svg";

const Container = `relative bg-gray-900 -mx-8`;
const Content = `max-w-screen-xl mx-auto py-20 lg:py-24`;
const Row = `px-8 flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left justify-center`;
const HighlightedTextInverse = `bg-gray-100 text-[#6415FF] px-4 transform -skew-x-12 inline-block`;
const ColumnContainer = `max-w-2xl`;
const TextContainer = `max-w-2xl`;
const Text = `text-3xl font-black tracking-wide text-center text-gray-100 lg:text-left max-w-none md:text-3xl leading-snug`;
const SubheadingBase = `font-bold text-[#6415FF]`;
const Subheading = `${SubheadingBase} text-yellow-500 mb-4 tracking-wider`;

const LinksContainer = `mt-8 lg:mt-16 flex flex-col items-center sm:block`;
const Link = `w-56 p-3 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full inline-flex justify-center items-center mt-6 first:mt-0 sm:mt-0 sm:ml-8 first:ml-0 bg-gray-100 hocus:bg-gray-300 text-gray-900 hocus:text-gray-900 shadow hover:shadow-lg focus:shadow-outline focus:outline-none transition duration-300`;

const ImageContainer = `${ColumnContainer} mt-16 lg:mt-0 lg:ml-16 flex justify-end`;

const DecoratorBlobContainer = `absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = `absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-gray-800 opacity-50`;
const DecoratorBlob2 = `absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-gray-800 opacity-50`;

type DownloadAppProps = {
  text1: string;
  text2: string;
  subheading: string;
  link1Text: string;
  link1Url: string;
  link1IconSrc: string;
  link2Text: string;
  link2Url: string;
  link2IconSrc: string;
  imageSrc: string;
};
const DownloadApp = ({
  subheading = "Download App",
  text1,
  text2,
  link1Text = "App Store",
  link1Url = "http://apple.com",
  link1IconSrc = appleIconImageSrc,
  link2Text = "Google Play",
  link2Url = "http://play.google.com",
  link2IconSrc = googlePlayIconImageSrc,
  imageSrc = mockupImageSrc,
}: DownloadAppProps) => {
  return (
    <div className={Container}>
      <div className={Content}>
        <div className={Row}>
          <div className={TextContainer}>
            {subheading && <h5 className={Subheading}>{subheading}</h5>}
            <h2 className={Text}>
              {text1} <span className={HighlightedTextInverse}>{text2}</span>
            </h2>
            <div className={LinksContainer}>
              <a className={Link} href={link1Url}>
                <img
                  className="inline-block h-8 mr-3"
                  src={link1IconSrc}
                  alt=""
                />
                <span className="leading-none inline-block">{link1Text}</span>
              </a>
              <a className={Link} href={link2Url}>
                <img
                  className="inline-block h-8 mr-3"
                  src={link2IconSrc}
                  alt=""
                />
                <span className="leading-none inline-block">{link2Text}</span>
              </a>
            </div>
          </div>
          <div className={ImageContainer}>
            <img src={imageSrc} alt="" className="w-64" />
          </div>
        </div>
        <div className={DecoratorBlobContainer}>
          <img
            src={SvgDecoratorBlob1}
            className="absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-gray-800 opacity-50"
          />
          <img src={SvgDecoratorBlob1} className={DecoratorBlob2} />
        </div>
      </div>
    </div>
  );
};
export default DownloadApp;
