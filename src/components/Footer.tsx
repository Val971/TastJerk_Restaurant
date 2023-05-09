import LogoImage from "../assets/logo.svg";
import FacebookIcon from "../assets/facebook.png";
import TwitterIcon from "../assets/twitter.png";
import YoutubeIcon from "../assets/youtube.png";

export const Footer = () => {
  const Container = `relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
  const Content = `max-w-screen-xl mx-auto relative z-10`;
  const SixColumns = `flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

  const Column = `px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

  const ColumnHeading = `uppercase font-bold`;

  const LinkList = `mt-6 text-sm font-medium`;
  const LinkListItem = `mt-3`;
  const Link = `border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;

  const SubscribeNewsletterColumn = `${Column} text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
  const SubscribeNewsletterContainer = `max-w-sm mx-auto lg:mx-0 `;
  const SubscribeText = `mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
  const SubscribeForm = `mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
  const Input = `bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-[#6415FF] focus:outline-none transition duration-300 w-full`;
  const PrimaryButtonBase = `px-8 py-3 font-bold rounded bg-[#6415FF] text-gray-100 hover:bg-[#511660] hocus:bg-[#511660] hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
  const SubscribeButton = `${PrimaryButtonBase} mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

  const Divider = `my-16 border-b-2 border-gray-300 w-full`;

  const ThreeColRow = `flex flex-col md:flex-row items-center justify-between`;

  const LogoContainer = `flex items-center justify-center md:justify-start`;
  const LogoImg = `w-8`;
  const LogoText = `ml-2 text-xl font-black tracking-wider text-gray-800`;

  const CopywrightNotice = `text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

  const SocialLinksContainer = `mt-8 md:mt-0 flex`;
  const SocialLink = `cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`;
  return (
    <div className={Container}>
      <div className={Content}>
        <div className={SixColumns}>
          <div className={Column}>
            <div className={ColumnHeading}>Main</div>
            <ul className={LinkList}>
              <li className={LinkListItem}>
                <a className={Link} href="#">
                  Blog
                </a>
              </li>
              <li className={LinkListItem}>
                <a className={Link} href="#">
                  FAQs
                </a>
              </li>
              <li className={LinkListItem}>
                <a className={Link} href="#">
                  Support
                </a>
              </li>
              <li className={LinkListItem}>
                <a className={Link} href="#">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className={Column}>
            <div className={ColumnHeading}>Product</div>
            <ul className={LinkList}>
              <li className={LinkListItem}>
                <a className={Link} href="#">
                  Log In
                </a>
              </li>
              <li className={LinkListItem}>
                <a className={Link} href="#">
                  Personal
                </a>
              </li>
              <li className={LinkListItem}>
                <a className={Link} href="#">
                  Business
                </a>
              </li>
              <li className={LinkListItem}>
                <a className={Link} href="#">
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div className={Column}>
            <div className={ColumnHeading}>Press</div>
            <ul className={LinkList}>
              <li className={LinkListItem}>
                <a className={Link} href="#">
                  Logos
                </a>
              </li>
              <li className={LinkListItem}>
                <a className={Link} href="#">
                  Events
                </a>
              </li>
              <li className={LinkListItem}>
                <a className={Link} href="#">
                  Stories
                </a>
              </li>
              <li className={LinkListItem}>
                <a className={Link} href="#">
                  Office
                </a>
              </li>
            </ul>
          </div>
          <div className={Column}>
            <div className={ColumnHeading}>Legal</div>
            <ul className={LinkList}>
              <li className={LinkListItem}>
                <a className={Link} href="#">
                  GDPR
                </a>
              </li>
              <li className={LinkListItem}>
                <a className={Link} href="#">
                  Privacy Policy
                </a>
              </li>
              <li className={LinkListItem}>
                <a className={Link} href="#">
                  Terms of Service
                </a>
              </li>
              <li className={LinkListItem}>
                <a className={Link} href="#">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          <div className={SubscribeNewsletterColumn}>
            <div className={SubscribeNewsletterContainer}>
              <div className={ColumnHeading}>Subscribe to our Newsletter</div>
              <p className={SubscribeText}>
                We deliver high quality blog posts written by professionals
                weekly. And we promise no spam.
              </p>
              <form className={SubscribeForm} method="get" action="#">
                <input
                  className={Input}
                  type="email"
                  placeholder="Your Email Address"
                />
                <button className={SubscribeButton} type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={Divider} />
        <div className={ThreeColRow}>
          <div className={LogoContainer}>
            <img className={LogoImg} src={LogoImage} />
            <h5 className={LogoText}>Tast Jerk Inc.</h5>
          </div>
          <p className={CopywrightNotice}>
            &copy; 2018 Test Jerk Inc. All Rights Reserved.
          </p>
          <div className={SocialLinksContainer}>
            <a className={SocialLink} href="https://facebook.com">
              <img className="w-4 h-4" src={FacebookIcon} />
            </a>
            <a className={SocialLink} href="https://twitter.com">
              <img className="w-4 h-4" src={TwitterIcon} />
            </a>
            <a className={SocialLink} href="https://youtube.com">
              <img className="w-4 h-4" src={YoutubeIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
