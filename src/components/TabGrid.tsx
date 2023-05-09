import styled from "styled-components";
import { motion } from "framer-motion";

import pholourie from "../assets/pholourie.jpg";
import caribeanSalad from "../assets/caribeanSalad.jpg";
import caribeanCornBread from "../assets/caribean-cornbread.jpg";
import cassavaBread from "../assets/CassavaBread.jpg";
import bacalaitos from "../assets/Bacalaitos.jpg";
import JamaicanCocoBread from "../assets/JamaicanCocoBread.jpg";
import caribbeanSweetPotatoSoup from "../assets/CaribbeanSweetPotatoSoup.jpg";
import sorullitosdeMaiz from "../assets/sorullitosdeMaiz.jpg";

import belizeanFudge from "../assets/BelizeanFudge.jpg";
import caribeanCoconutMilk from "../assets/caribeanCoconutMilk.jpg";
import chocolatedemami from "../assets/chocolatedemami.jpg";
import caribbeanBreadPudding from "../assets/caribbeanBreadPudding.jpg";
import blackCake from "../assets/blackCake.jpg";
import caramelizedPlantains from "../assets/caramelizedPlantains.jpg";
import caribbeanCoconutSugarCakes from "../assets/CaribbeanCoconutSugarCakes.jpg";
import jamaicanCornmealPudding from "../assets/JamaicanCornmealPudding.jpg";
import { useState } from "react";

import SvgDecoratorBlob1 from "../assets/svg-decorator-blob-5.svg";
import SvgDecoratorBlob2 from "../assets/svg-decorator-blob-7.svg";
import starIcon from "../assets/star.png";

type TabCrdGridProps = {
  heading1: string;
  heading2: string;
};
const TabGrid = ({ heading1, heading2 }: TabCrdGridProps) => {
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  const DecoratorBlob1 = `pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`;

  const DecoratorBlob2 = `pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`;
  const ContentWithPaddingXl = `max-w-screen-xl mx-auto py-20 lg:py-24`;
  const HeaderRow = `flex justify-between items-center flex-col xl:flex-row`;
  const Header = `text-4xl text-[#243E63] sm:text-5xl font-black tracking-wide text-center`;
  const TabsControl = `flex flex-wrap bg-[#edf2f7] px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
  const TabControl = `
  ${`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-[#718096] font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  }
`;
  const TabContent = `mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
  const CardContainer = `mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
  const Card = `bg-[#edf2f7] rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;

  const CardImageContainer1 = `h-56 xl:h-64 bg-center bg-cover relative rounded-t`;
  const CardRatingContainer = `leading-none absolute inline-flex bg-gray-100 gap-2 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
  const CardRating = styled.div`
    ${`mr-1 text-sm font-bold flex items-end`}
    svg {
      ${`w-4 h-4 fill-current text-orange-400 mr-1`}
    }
  `;

  const CardHoverOverlay = `bg-white/50 absolute inset-0 flex justify-center items-center`;

  const CardButton = `text-sm px-8 py-3 font-bold rounded bg-[#6415FF] text-gray-100 hover:bg-[#511660] hocus:bg-[#511660] hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
  const CardReview = `font-medium text-xs text-gray-600`;
  const CardText = `p-4 text-gray-900`;
  const CardTitle = `text-lg font-semibold group-hover:text-primary-500`;
  const CardContent = `mt-1 text-sm font-medium text-gray-600`;
  const CardPrice = `mt-4 text-xl font-bold`;
  const HighlightedText = `bg-[#6415FF] text-gray-100 px-4 transform -skew-x-12 inline-block`;

  return (
    <div className="relative">
      <div className={ContentWithPaddingXl}>
        <div className={HeaderRow}>
          <h2 className={Header}>
            {heading1} <span className={HighlightedText}>{heading2}</span>
          </h2>
          <div className={`${TabsControl}`}>
            {Object.keys(tabs).map((tabName, index) => (
              <div
                className={` md:hover:bg-gray-300 ${TabControl} ${
                  activeTab === tabName ? "bg-[#6415FF] text-[#f7fafc]" : ""
                }`}
                key={index}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </div>
            ))}
          </div>
        </div>

        {tabsKeys.map((tabKey: any, index: any) => (
          <motion.div
            className={TabContent}
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card: any, index: any) => (
              <div className={CardContainer} key={index}>
                <motion.a
                  className={`group ${Card}`}
                  href={card.url}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <div
                    style={{ backgroundImage: `url(${card.imageSrc})` }}
                    className={`${CardImageContainer1} `}
                  >
                    <div className={CardRatingContainer}>
                      <CardRating>
                        <img src={starIcon} alt="" />
                      </CardRating>
                      <div className={CardReview}>
                        <span className="font-bold">{card.rating}</span> (
                        {card.reviews})
                      </div>
                    </div>
                    <motion.div
                      className={CardHoverOverlay}
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto",
                        },
                        rest: {
                          opacity: 0,
                          height: 0,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <button className={CardButton}>Buy Now</button>
                    </motion.div>
                  </div>
                  <div className={CardText}>
                    <h5 className={CardTitle}>{card.title}</h5>
                    <p className={CardContent}>{card.content}</p>
                    <p className={CardPrice}>{card.price}</p>
                  </div>
                </motion.a>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      <img src={SvgDecoratorBlob1} className={DecoratorBlob1} alt="" />
      <img src={SvgDecoratorBlob2} className={DecoratorBlob2} alt="" />
    </div>
  );
};
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chicken Chilled",
      content: "Chicken Main Course",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Samsa Beef",
      content: "Fried Mexican Beef",
      price: "$3.99",
      rating: "4.5",
      reviews: "34",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Carnet Nachos",
      content: "Chilli Crispy Nachos",
      price: "$3.99",
      rating: "3.9",
      reviews: "26",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Guacamole Mex",
      content: "Mexican Chilli",
      price: "$3.99",
      rating: "4.2",
      reviews: "95",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chillie Cake",
      content: "Deepfried Chicken",
      price: "$2.99",
      rating: "5.0",
      reviews: "61",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Nelli",
      content: "Hamburger & Fries",
      price: "$7.99",
      rating: "4.9",
      reviews: "89",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Jalapeno Poppers",
      content: "Crispy Soyabeans",
      price: "$8.99",
      rating: "4.6",
      reviews: "12",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Cajun Chicken",
      content: "Roasted Chicken & Egg",
      price: "$7.99",
      rating: "4.2",
      reviews: "19",
      url: "#",
    },
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
const tabs = {
  Starters: [
    {
      imageSrc: pholourie,
      title: "Pholourie",
      content: "Split pea  & Curry powder",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: "#",
    },
    {
      imageSrc: caribeanSalad,
      title: "Caribean salad",
      content: "Pineapple & Mandarin oranges ",
      price: "$2.99",
      rating: "4.8",
      reviews: "32",
      url: "#",
    },
    {
      imageSrc: caribeanCornBread,
      title: "Corn bread",
      content: "Corn & Crushed pineapple",
      price: "$7.99",
      rating: "4.9",
      reviews: "89",
      url: "#",
    },
    {
      imageSrc: cassavaBread,
      title: "Cassava Bread",
      content: "Crispy Soyabeans",
      price: "$8.99",
      rating: "4.6",
      reviews: "12",
      url: "#",
    },
    {
      imageSrc: bacalaitos,
      title: "Bacalaitos (Codfish Fritters)",
      content: "Pollock",
      price: "$7.99",
      rating: "4.2",
      reviews: "19",
      url: "#",
    },
    {
      imageSrc: sorullitosdeMaiz,
      title: "Sorullitos de Maiz",
      content: "Chicken",
      price: "$2.99",
      rating: "5.0",
      reviews: "61",
      url: "#",
    },
    {
      imageSrc: JamaicanCocoBread,
      title: "Jamaican Coco Bread",
      content: "Meats & cheeses",
      price: "$3.99",
      rating: "4.2",
      reviews: "95",
      url: "#",
    },
    {
      imageSrc: caribbeanSweetPotatoSoup,
      title: "Sweet Potato Soup",
      content: "Sweet potato & Coconut milk",
      price: "$3.99",
      rating: "3.9",
      reviews: "26",
      url: "#",
    },
  ],
  Main: getRandomCards(),
  // Soup: getRandomCards(),
  Desserts: [
    {
      imageSrc: belizeanFudge,
      title: "Belizean Fudge",
      content: "Raisins & Nutmeg",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: "#",
    },
    {
      imageSrc: caribeanCoconutMilk,
      title: "Caribean coconut cake",
      content: "Coconut milk & Eggs ",
      price: "$2.99",
      rating: "4.8",
      reviews: "32",
      url: "#",
    },
    {
      imageSrc: chocolatedemami,
      title: "Chocolate de Mani",
      content: "Corn & Crushed pineapple",
      price: "$7.99",
      rating: "4.9",
      reviews: "89",
      url: "#",
    },
    {
      imageSrc: caribbeanBreadPudding,
      title: "Caribbean Bread Pudding",
      content: "Raisins & Cinnamon",
      price: "$8.99",
      rating: "4.6",
      reviews: "12",
      url: "#",
    },
    {
      imageSrc: blackCake,
      title: "Caribbean Christmas Cake (Known As Black Cake)",
      content: "Cherries & Lemon",
      price: "$7.99",
      rating: "4.2",
      reviews: "19",
      url: "#",
    },
    {
      imageSrc: caramelizedPlantains,
      title: "Coconut Sugar Caramelized Plantains",
      content: "Plantains && coconut sugar",
      price: "$2.99",
      rating: "5.0",
      reviews: "61",
      url: "#",
    },
    {
      imageSrc: caribbeanCoconutSugarCakes,
      title: "Caribbean Coconut Sugar Cakes",
      content: "Meats & cheeses",
      price: "$3.99",
      rating: "4.2",
      reviews: "95",
      url: "#",
    },
    {
      imageSrc: jamaicanCornmealPudding,
      title: "Jamaican Cornmeal Pudding",
      content: "Raisins & Coconut milk",
      price: "$3.99",
      rating: "3.9",
      reviews: "26",
      url: "#",
    },
  ],
};
export default TabGrid;
