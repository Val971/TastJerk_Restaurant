import SignUpIcon from "../assets/follow.png";

import illustration from "../assets/login-illustration.svg";
import logo from "../assets/logo.svg";
import googleIconImageSrc from "../assets/google-icon.png";
import twitterIconImageSrc from "../assets/twitter-icon.png";

const Container = `min-h-screen text-white font-medium flex justify-center -m-8 py-12`;
const Content = `max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = `lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = ``;
const LogoImage = `h-12 mx-auto`;
const MainContent = `mt-12 flex flex-col items-center`;
const Heading = `text-2xl xl:text-3xl font-extrabold`;
const FormContainer = `w-full flex-1 mt-8`;

const SocialButtonsContainer = `flex flex-col items-center`;
const SocialButton = `w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`;

const DividerTextContainer = `my-12 border-b text-center relative`;
const DividerText = `leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = `mx-auto max-w-xs`;
const Input = `w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = `mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`;
const IllustrationContainer = `sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = `m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`;

const Register = ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Sign Up For Treact",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign Up With Google",
      url: "https://google.com",
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign Up With Twitter",
      url: "https://twitter.com",
    },
  ],
  submitButtonText = "Sign Up",
  SubmitButtonIcon = SignUpIcon,
  tosUrl = "#",
  privacyPolicyUrl = "#",
  signInUrl = "#",
}) => {
  return (
    <div className={Container}>
      <div className={Content}>
        <div className={MainContainer}>
          <a className={LogoLink} href={logoLinkUrl}>
            <img className={LogoImage} src={logo} />
          </a>
          <div className={MainContent}>
            <h1 className={Heading}>{headingText}</h1>
            <div className={FormContainer}>
              <div className={SocialButtonsContainer}>
                {socialButtons.map((socialButton, index) => (
                  <a
                    className={SocialButton}
                    key={index}
                    href={socialButton.url}
                  >
                    <span className="bg-white p-2 rounded-full">
                      <img
                        src={socialButton.iconImageSrc}
                        className="w-4"
                        alt=""
                      />
                    </span>
                    <span className="ml-4">{socialButton.text}</span>
                  </a>
                ))}
              </div>
              <div className={DividerTextContainer}>
                <div className={DividerText}>Or Sign up with your e-mail</div>
              </div>
              <form className={Form}>
                <input className={Input} type="email" placeholder="Email" />
                <input
                  className={Input}
                  type="password"
                  placeholder="Password"
                />
                <button className={SubmitButton} type="submit">
                  <img src={SubmitButtonIcon} className="w-6 h-6 -ml-2" />
                  <span className="ml-3">{submitButtonText}</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by treact's{" "}
                  <a
                    href={tosUrl}
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </a>{" "}
                  and its{" "}
                  <a
                    href={privacyPolicyUrl}
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </a>
                </p>

                <p className="mt-8 text-sm text-gray-600 text-center">
                  Already have an account?{" "}
                  <a
                    href={signInUrl}
                    className="border-b border-gray-500 border-dotted"
                  >
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className={IllustrationContainer}>
          <div
            className={IllustrationImage}
            style={{ backgroundImage: `url(${illustrationImageSrc})` }}
          />
        </div>
      </div>
    </div>
  );
};
export default Register;
