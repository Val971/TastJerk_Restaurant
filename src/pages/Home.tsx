import Hero from "components/Hero";
import TabGrid from "components/TabGrid";

import chefIconImageSrc from "../assets/chef-icon.svg";
import celebrationIconImageSrc from "../assets/celebration-icon.svg";
import shopIconImageSrc from "../assets/shop-icon.svg";
import veganFood from "../assets/vegan-jamaican-bowl-8.jpg";
import heroImg from "../assets/hero-img.jpg";
import jerkImg from "../assets/JerkImg.jpg";
import { MainFeature } from "components/MainFeature";
import Services from "components/Services";
import MainFeature2 from "components/MainFeature2";
import Testimonial from "components/Testimonial";
import DownloadApp from "components/DownloadApp";

const Home = () => {
  return (
    <>
      <Hero
        title="Welcome to the ultimate Caribbean food experience!"
        subTitle="Meals Near You."
        description="Indulge in the flavors and spices of the tropics with our mouth-watering selection of Caribbean cuisine. From succulent jerk chicken to refreshing coconut-infused dishes, our menu is a fusion of cultures and flavors that will transport you straight to the islands."
        buttonUrl="/"
        buttonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
        heroImageUrl={heroImg}
        imageDecoratorBlob={true}
      />
      <MainFeature
        imageSrc={veganFood}
        description1="So sit back, relax, and let us take you on a culinary journey to the
        Caribbean."
        description2="  Browse our menu, place your order, and get ready to experience the
        tastes and aromas of the islands like never before. Come join us and
        taste the sunshine!"
        subheading={`Established Since 2014`}
        heading1="We've been serving for"
        heading2="over 5 years."
        primaryButtonText="Latest Offers"
      />
      <TabGrid heading1="Checkout our" heading2="menu." />
      <Services
        heading1="Amazing"
        heading2="Services."
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "230+ Locations",
            description:
              "If you're looking for a Caribbean restaurant that you can visit in multiple locations, then look no further! ",
            url: "https://google.com",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Professional Chefs",
            description:
              "Our professional chef at the Caribbean restaurant is a true master of his craft. ",
            url: "https://timerse.com",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Birthday Catering",
            description:
              "Celebrate your special day with a touch of the Caribbean by choosing our restaurant for your birthday catering needs!",
            url: "https://reddit.com",
          },
        ]}
      />
      {/* <MainFeature2 /> */}
      <MainFeature2
        subheading="A Reputed Brand"
        heading1="Why"
        heading2="Choose Us ?"
        textOnLeft={true}
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+",
          },
          {
            key: "Chefs",
            value: "1500+",
          },
        ]}
        description="Our chefs use only the freshest ingredients to create each dish, ensuring that every bite is bursting with flavor. Whether you're in the mood for a hearty meal or a light snack, we have something to satisfy every craving."
        primaryButtonText="Order Now"
        primaryButtonUrl="#"
        imageInsideDiv={false}
        imageSrc={jerkImg}
        imageDecoratorBlob={true}
      />
      <Testimonial heading1="Customers" heading2="Love Us." />
      <DownloadApp
        text1="People around you are ordering delicious meals using the"
        text2="Tast Jerk App."
      />
    </>
  );
};

export default Home;
