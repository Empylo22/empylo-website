import { useState, useRef, useEffect } from "react";
import "./faqs.css";
import { BallTriangle } from "react-loader-spinner";
import img1 from "./ArrowCircleUpRight.png";
import img2 from "./ArrowCircleDownRight (1).svg";
import img4 from "./email-website-icon-email-png-88334ac4e37df5f11bdfcd467f36ed95 1.svg";
import axios from "axios";
import { apiURL } from "../../apiURL";
const FAQ = () => {
  const initialStates = Array(8).fill(false);
  const [isClickArray, setIsClickArray] = useState(initialStates);

  const handleClick = (index) => {
    const newIsClickArray = [...isClickArray];
    newIsClickArray[index] = !newIsClickArray[index];
    setIsClickArray(newIsClickArray);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${apiURL}/contact/mailing-list`,
        formData
      );

      if (response?.data?.status === true) {
        setIsLoading(false);
        alert(response?.data?.message);
      } else {
        alert("There is error submitting this form please submit again");
      }
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const revealcallbk = function (entries) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.remove("section-hidden");
    };

    const revealSection = new IntersectionObserver(revealcallbk, {
      root: null,
      threshold: 0.15,
    });

    if (sectionRef.current) {
      revealSection.observe(sectionRef.current);
      sectionRef.current.classList.add("section-hidden");
    }
  }, []);

  return (
    <>
      <div className="faq" ref={sectionRef} id="faqs">
        <div className="faq-left">
          <div className="faq-left-pad">
            <h1 className="faq-left-pad-header">FAQS</h1>
            <p className="faq-left-pad-text">
              We have compiled a list of the most common questions we get asked,
              if you have any other questions please feel free to reach out to
              us.
            </p>
          </div>
        </div>
        <div className="faq-right">
          <div className="faq-right-pad">
            <div
              className="faq-right-pad-headers"
              onClick={() => handleClick(0)}
            >
              <h1 className="faq-right-pad-header">
                1. What is Empylo Health?
              </h1>
              <i className="faq-right-pad-icon">
                {!isClickArray[0] ? (
                  <img src={img2} alt="img" />
                ) : (
                  <img src={img1} alt="img" />
                )}
              </i>
            </div>
            <div>
              <p
                className={`${
                  !isClickArray[0] ? "none" : "faq-right-pad-text"
                }`}
              >
                Empylo Health is a clinician-led technology and consulting
                company dedicated to addressing global health challenges and
                mitigating associated risks. Our solutions utilise advanced data
                analytics to facilitate meaningful social connections, drive
                behavior change, and promote positive health outcomes for
                individuals and organisations.
              </p>
            </div>
          </div>

          <div className="faq-right-pad">
            <div
              className="faq-right-pad-headers"
              onClick={() => handleClick(1)}
            >
              <h1 className="faq-right-pad-header">
                2. What solutions does Empylo Health offer?
              </h1>
              <i className="faq-right-pad-icon">
                {!isClickArray[0] ? (
                  <img src={img2} alt="img" />
                ) : (
                  <img src={img1} alt="img" />
                )}
              </i>
            </div>
            <p
              className={`${!isClickArray[1] ? "none" : "faq-right-pad-text"}`}
            >
              Empylo Health offers a range of innovative solutions designed for
              both individuals and organisations. Our core offerings include the
              Circles Health App for personal use and the Circles Health App
              Client for organisations. We also offer training and consultancy
              services for organisations.{" "}
            </p>
          </div>

          <div className="faq-right-pad">
            <div
              className="faq-right-pad-headers"
              onClick={() => handleClick(2)}
            >
              <h1 className="faq-right-pad-header">
                3. How does the Circles Health App benefit individuals?
              </h1>
              <i className="faq-right-pad-icon">
                {!isClickArray[0] ? (
                  <img src={img2} alt="img" />
                ) : (
                  <img src={img1} alt="img" />
                )}
              </i>
            </div>
            <p
              className={`${!isClickArray[2] ? "none" : "faq-right-pad-text"}`}
            >
              The Circles Health App is designed to empower individuals to
              manage their social, psychological and physical health
              effectively. Through features such as health assessments, daily
              check-ins, personalised insights, and access to AI-generated
              self-development activities, users can gain valuable insights and
              support for their health journeys.
            </p>
          </div>

          <div className="faq-right-pad">
            <div
              className="faq-right-pad-headers"
              onClick={() => handleClick(3)}
            >
              <h1 className="faq-right-pad-header">
                4. How can organizations benefit from the Circles Health App
                Client?
              </h1>
              <i className="faq-right-pad-icon">
                {!isClickArray[0] ? (
                  <img src={img2} alt="img" />
                ) : (
                  <img src={img1} alt="img" />
                )}
              </i>
            </div>
            <p
              className={`${!isClickArray[3] ? "none" : "faq-right-pad-text"}`}
            >
              The Circles Health App Client provides organisations with a
              comprehensive solution for promoting a culture of health within
              the organisation. Features include employee engagement tools,
              health assessments, and customisable resources to support
              organisational wellbeing initiatives.
            </p>
          </div>

          <div className="faq-right-pad">
            <div
              className="faq-right-pad-headers"
              onClick={() => handleClick(4)}
            >
              <h1 className="faq-right-pad-header">
                5. Is my data secure with Empylo Health?
              </h1>
              <i className="faq-right-pad-icon">
                {!isClickArray[0] ? (
                  <img src={img2} alt="img" />
                ) : (
                  <img src={img1} alt="img" />
                )}
              </i>
            </div>
            <p
              className={`${!isClickArray[4] ? "none" : "faq-right-pad-text"}`}
            >
              Absolutely, protecting the privacy and security of our users' data
              is a top priority at Empylo Health. We employ robust security
              measures and adhere to strict data protection protocols and laws
              including GDPR to ensure that user information remains safe and
              confidential. We are working towards appropriate certifications.
            </p>
          </div>

          <div className="faq-right-pad">
            <div
              className="faq-right-pad-headers"
              onClick={() => handleClick(5)}
            >
              <h1 className="faq-right-pad-header">
                6. How does Empylo Health use data analytics to drive behavior
                change?
              </h1>
              <i className="faq-right-pad-icon">
                {!isClickArray[0] ? (
                  <img src={img2} alt="img" />
                ) : (
                  <img src={img1} alt="img" />
                )}
              </i>
            </div>
            <p
              className={`${!isClickArray[5] ? "none" : "faq-right-pad-text"}`}
            >
              Empylo Health uses advanced data analytics to analyse data
              inputted by users and to provide actionable insights that support
              individual and group behavior change. By identifying health
              patterns, trends, and opportunities for improvement, we empower
              individuals and organisations to make insightful decisions and
              achieve positive health outcomes, all whilst breaking social
              barriers and stigma, and building stronger connections.{" "}
            </p>
          </div>

          <div className="faq-right-pad">
            <div
              className="faq-right-pad-headers"
              onClick={() => handleClick(6)}
            >
              <h1 className="faq-right-pad-header">
                7. Can I customise the Circles Health App Client for my
                organisation's needs?
              </h1>
              <i className="faq-right-pad-icon">
                {!isClickArray[0] ? (
                  <img src={img2} alt="img" />
                ) : (
                  <img src={img1} alt="img" />
                )}
              </i>
            </div>
            <p
              className={`${!isClickArray[6] ? "none" : "faq-right-pad-text"}`}
            >
              Absolutely, the Circles Health App Client is fully customisable to
              meet the unique needs and preferences of your organisation. Our
              team works closely with clients to tailor the platform to their
              specific goals, objectives, and branding requirements. Please note
              this may incur additional charges.{" "}
            </p>
          </div>

          <div className="faq-right-pad">
            <div
              className="faq-right-pad-headers"
              onClick={() => handleClick(7)}
            >
              <h1 className="faq-right-pad-header">
                8. How can I get started with Empylo Health's solutions?
              </h1>
              <i className="faq-right-pad-icon">
                {!isClickArray[0] ? (
                  <img src={img2} alt="img" />
                ) : (
                  <img src={img1} alt="img" />
                )}
              </i>
            </div>
            <p
              className={`${!isClickArray[7] ? "none" : "faq-right-pad-text"}`}
            >
              Getting started with Empylo Health is easy! Simply visit our
              website to learn more about our solutions and schedule a
              consultation with us. We'll work with you to assess your needs and
              develop a customised plan to support your goals. For personal
              users, simply follow the download link on website to download our
              free app on the Apple App Store and Google Play store.
              <br />
              For any support, email{" "}
              <span className="fs">admin@empylo.com</span>
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="faq-flex">
        <img src={img4} alt="img" className="faq-flex-img2" />
        <p className="faq-flex-text">
          Sign up to get exclusive access to our latest products and services
          before anyone else.
        </p>
        <form className="faq-flex-div-1" onSubmit={handleSubmit}>
          <input
            placeholder="Enter your email"
            type="email"
            className="faq-flex-input"
            name="email"
            onChange={handleChange}
          />
          <button className="faq-flex-btn" type="submit">
            {isLoading ? (
              <BallTriangle
                height={80}
                width={80}
                radius={5}
                color="#0F2C7D"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
              />
            ) : (
              <>Subscribe</>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default FAQ;
