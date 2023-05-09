import SvgDecoratorBlob1 from "../assets/svg-decorator-blob-7.svg";
import SvgDecoratorBlob2 from "../assets/svg-decorator-blob-8.svg";

const ContentWithPaddingXl = `max-w-screen-xl mx-auto py-20 lg:py-24`;
const Testimonials = `flex flex-col lg:flex-row items-center lg:items-stretch`;
export const SectionHeading = `text-[#243E63] text-4xl sm:text-5xl font-black tracking-wide text-center`;
const TestimonialContainer = `mt-16 lg:w-1/3`;
const Testimonial2 = `px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = `w-20 h-20 rounded-full`;
const Quote = `mt-5 text-[#718096] font-medium leading-loose`;
const CustomerName = `mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;
const HighlightedText = `bg-[#6415FF] text-gray-100 px-4 transform -skew-x-12 inline-block`;
const DecoratorBlob1 = `pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`;
const DecoratorBlob2 = `pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`;

type TestimonialProps = {
  heading2: string;
  heading1: string;
};
const testimonials = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
    quote:
      "I visited this Caribbean restaurant with my family last week and I have to say, it was one of the best dining experiences I've had in a long time! The flavors of the food were absolutely amazing and the portion sizes were generous. ",
    customerName: "Charlotte Hale",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
    quote:
      "I'm a big fan of Caribbean cuisine and this restaurant definitely did not disappoint. The jerk chicken was cooked to perfection and the plantains were the perfect complement. The atmosphere was also great, with lively music and decor that made me feel like I was on an island vacation. ",
    customerName: "Adam Cuppy",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80",
    quote:
      "I recently visited this restaurant for a date night with my partner and it was a great choice! The food was flavorful and delicious, and the presentation was impressive. We also appreciated the wide variety of options available on the menu.",
    customerName: "Steven Marcetti",
  },
];
export const Testimonial = ({ heading1, heading2 }: TestimonialProps) => {
  return (
    <div className="relative">
      <div className={ContentWithPaddingXl}>
        <h2 className={SectionHeading}>
          {heading1} <span className={HighlightedText}>{heading2}</span>
        </h2>
        <div className={Testimonials}>
          {testimonials.map((testimonial, index) => (
            <div className={TestimonialContainer} key={index}>
              <div className={Testimonial2}>
                <img className={Image} src={testimonial.imageSrc} />
                <blockquote className={Quote}>"{testimonial.quote}"</blockquote>
                <p className={CustomerName}>- {testimonial.customerName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-gray-600"></div>
      <img src={SvgDecoratorBlob1} className={DecoratorBlob1} />
      <img src={SvgDecoratorBlob2} className={DecoratorBlob2} />
    </div>
  );
};
export default Testimonial;
