import restaurant from "../assets/restaurant.jpg";

const TwoColumn = `flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = `w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = `${Column} md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = `${Column} md:w-6/12 mt-8 md:mt-0 md:ml-8 lg:ml-16 md:order-last`;

const Image = `rounded bg-cover bg-center h-full`;

const TextContent = `lg:py-8`;

const Heading = `text-4xl sm:text-5xl text-[#243E63] font-black tracking-wide text-center text-left text-xl sm:text-2xl lg:text-3xl text-center md:text-left leading-tight`;
const Description = `text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-[#7C8BA1] mt-4`;

const Statistics = `mt-6 lg:mt-8 xl:mt-16 flex flex-wrap`;
const Statistic = `text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left`;
const Value = `font-bold text-[#6415FF]`;
const Key = `font-medium text-gray-700`;

export const About = () => {
  const statistics = [
    {
      key: "Countries",
      value: "5",
    },
    {
      key: "Workers",
      value: "+100",
    },
  ];

  return (
    <div className="relative">
      <div className={TwoColumn}>
        <div className={ImageColumn}>
          <div
            style={{ backgroundImage: `url(${restaurant})` }}
            className={Image}
          ></div>
        </div>
        <div className={TextColumn}>
          <div className={TextContent}>
            <h2 className={Heading}>
              Welcome to our Caribbean restaurant, where we bring the flavors
              and culture of the Caribbean to your table!
            </h2>
            <p className={Description}>
              Our restaurant is a vibrant and lively space where you can enjoy
              the tastes and aromas of the tropics. Our menu is a fusion of
              Caribbean cuisines, drawing inspiration from the rich culinary
              traditions of Jamaica, Trinidad, Cuba, and more. We use only the
              freshest and finest ingredients to create our dishes, ensuring
              that every bite is bursting with flavor.
            </p>
            <p className={Description}>
              Our talented chefs take great pride in their craft and are
              committed to delivering an authentic and memorable dining
              experience. From savory jerk chicken to spicy curries and
              refreshing seafood dishes, our menu has something for everyone. We
              also offer a variety of vegetarian and vegan options, ensuring
              that all of our guests are catered for.
            </p>
            <div className={Statistics}>
              {statistics.map((statistic, index) => (
                <div className={Statistic} key={index}>
                  <div className={Value}>{statistic.value}</div>
                  <div className={Key}>{statistic.key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
