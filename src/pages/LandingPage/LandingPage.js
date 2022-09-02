import React, { useEffect } from "react";
import className from "classnames/bind";
import styles from "./LandingPage.module.scss";
import { Carousel } from "antd";

const cx = className.bind(styles);

function LandingPage() {
  useEffect(() => {
    const handleScroll = (e) => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        if (section.classList.contains("active")) {
          section.classList.remove("active");
        }
        if (scrollY < 561) {
          sections[0].classList.add("active");
        } else if (scrollY > 560 && scrollY < 1121) {
          sections[1].classList.add("active");
        } else if (scrollY > 1120 && scrollY < 1681) {
          sections[2].classList.add("active");
        } else if (scrollY > 1680 && scrollY < 2241) {
          sections[3].classList.add("active");
        } else if (scrollY > 2240 && scrollY < 2801) {
          sections[4].classList.add("active");
        } else if (scrollY > 2800 && scrollY < 3001) {
          sections[5].classList.add("active");
        } else if (scrollY > 3000 && scrollY < 3921) {
          sections[6].classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("home")}>NotionCrew</div>
      <div className={cx("video")}>
        <div>
          <iframe
            className={cx("content")}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JxBnLmCOEJ8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className={cx("infomation")}>
        <Carousel dots={false} autoplay>
          <div className={cx("carousel-1")}>
            <div className={cx("carousel-content")}>
              <h3 className={cx("title")}>GRAPHIC DESIGN</h3>
              <p>
                In order world, graphic design in synonymous with advertising
                industry.This is because the nature of advertising is such that
                is thrives visual representations of products, services, concept
                and ideas.
              </p>
            </div>
            <div className={cx("carousel-content")}>
              <h3 className={cx("title")}>PHOTOGRAPHY</h3>
              <p>
                The basic elements of photography are to capture a mood, emotion
                or feeling that can elicit in a viewer.Our photographers
                approach their work as artists whose job is to tell a
                captivating story.
              </p>
            </div>
          </div>
          <div className={cx("carousel-2")}>
            <div className={cx("carousel-content")}>
              <h3 className={cx("title")}>PHOTOGRAPHY</h3>
              <p>
                The basic elements of photography are to capture a mood, emotion
                or feeling that can elicit in a viewer.Our photographers
                approach their work as artists whose job is to tell a
                captivating story.
              </p>
            </div>
            <div className={cx("carousel-content")}>
              <h3 className={cx("title")}>GRAPHIC DESIGN</h3>
              <p>
                In order world, graphic design in synonymous with advertising
                industry.This is because the nature of advertising is such that
                is thrives visual representations of products, services, concept
                and ideas.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
      <div className={cx("projects")}>
        <h3>OUR PROJECTS</h3>
        <h5>GRAPHICS</h5>
      </div>
      <div className={cx("projects")}>
        <h3>OUR PROJECTS</h3>
        <h5>PHOTOGRAPHY</h5>
      </div>
      <div className={cx("projects")}>
        <h3>OUR PROJECTS</h3>
        <h5>VFX & VIDEO</h5>
      </div>
      <div className={cx("contact")}>
        <form>
          <h4>Contact us</h4>
          <input type="text" placeholder="FirstName" />
          <input type="text" placeholder="LastName" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="PhoneNumber" />
          <textarea
            rows="3"
            type="text"
            placeholder="Type Your Message Here... "
          />
          <button type="button">Send</button>
        </form>
      </div>
      <div className={cx("pages")}>
        <div className={cx("page", "section", "active")}></div>
        <div className={cx("page", "section")}></div>
        <div className={cx("page", "section")}></div>
        <div className={cx("page", "section")}></div>
        <div className={cx("page", "section")}></div>
        <div className={cx("page", "section")}></div>
        <div className={cx("page", "section")}></div>
      </div>
    </div>
  );
}

export default LandingPage;
