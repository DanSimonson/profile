import React from "react";
import "./Resume.scss";
import Navbar from "../Components/Navbar/Navbar";
import DisplayFooter from "../Components/DisplayFooter/DisplayFooter";

function Resume() {
  return (
    <>
      <Navbar />
      <div className="resumeContainer">
        <div className="resumeWrapper">
          <div className="spacer"></div>
          <div className="resumeTitle">
            <p>Software Engineer</p>
          </div>
          <div className="subTitle">
            <p>Professional Summary</p>
          </div>
          <ul>
            <li>
              <p>
                Over 20 years of IT experience which includes 6+ years as a
                Software Engineer.
              </p>
            </li>
            <li>
              <p>Specializing in front-end development</p>
            </li>
            <li>
              <p>
                Extensive MERN stack development knowledge with MongoDB,
                Express, Node and React
              </p>
            </li>
          </ul>
          <div className="subTitleSkills">
            <p>Skills</p>
          </div>
          <ul>
            <li>
              <p>Programming Languages: JavaScript</p>
            </li>
            <li>
              <p>
                Frameworks: React, Node.js, Express, Vue, Bootstrap, Materialize
              </p>
            </li>
            <li>
              <p>
                Web Technologies: CSS3, FlexBox, CSSGrid, SASS, HTML, Redux,
                Thunk, Axios
              </p>
            </li>
            <li>
              <p>
                Developmnent Tools: Git, Github, Chrome Dev Tools, MongoDB,
                Mongoose, MySql, Jest, React Testing Library
              </p>
            </li>
            <li>
              <p>Methodoligies: Agile, Scrum, Waterfall </p>
            </li>
          </ul>
          <div className="subTitleWork">
            <p>Work History</p>
          </div>
          <div className="work-title">
            <p>TCS (client Verizon)</p>
            <p>February 2023 to August 2023</p>
          </div>
          <ul>
            <li>
              <p>Software Engineer, Austin, TX</p>
            </li>
            <li>
              <p>
                Interfaced with key stakeholders and applied technical
                proficiency across different stages of the Software Development
                Life Cycle, increasing revenue with new promotions for smart
                watches.
              </p>
            </li>
          </ul>
          <div className="work-title">
            <p>Infosys (client American Family Insurance)</p>
            <p>October 2022 to January 2023</p>
          </div>
          <ul>
            <li>
              <p>Software Engineer, Austin, TX</p>
            </li>
            <li>
              <p>
                Deliver high quality code for a new motorcycle insurance page,
                boosting customer engagement
              </p>
            </li>
          </ul>
          <div className="work-title">
            <p>Infosys (client: Allstate Insurance)</p>
            <p>February 2022 to September 2022</p>
          </div>
          <ul>
            <li>
              <p>Software Engineer, Austin, Texas</p>
            </li>
            <li>
              <p>
                Helped create a micro-frontend increasing ease of use and
                adaptability to change for future insurance pages.
              </p>
            </li>
          </ul>
          <div className="work-title">
            <p>TCS (client: Safeway/Albertsons</p>
            <p>February 2021 to January 2022 </p>
          </div>
          <ul>
            <li>
              <p>Software Engineer, Austin, TX</p>
            </li>
            <li>
              <p>
                Developing new user-facing features using React.js, JavaScript,
                Redux, Node.js, CSS. Built reusable components and front-end
                libraries for future use. Optimized components for maximum
                performance. Utilized Redux, Thunk, JWT Authentication.
              </p>
            </li>
          </ul>

          <div className="work-title">
            <p>Matrix (client AuctionOS)</p>
            <p>October 2020 to Dec 2020</p>
          </div>
          <ul>
            <li>
              <p>Software Engineer, Atlanta, GA</p>
            </li>
            <li>
              <p>
                Designed, coded and maintained new features for using HTML, CSS,
                JavaScript, Vue. Full-Stack Development with MySQL and Node.js.
                Created functional applications that feature user-friendly
                design and clear navigation for online car auction software.
                Worked in small collaborative team to successfully deliver
                features.
              </p>
            </li>
          </ul>
          <div className="work-title">
            <p>Cognizant (clients Macys, Bayer)</p>
            <p>February 2020 to September 2020</p>
          </div>
          <ul>
            <li>
              <p>Front-End Developer, Atlanta, GA</p>
            </li>
            <li>
              <p>
                Help create software that tracks logistical shipping data for
                products sent to Macy's Backstage stores. Designed and coded new
                features using HTML, CSS, React, Redux, Thunk and JavaScript,
                creating a sales dashboard allowing Monsanto to organize and
                track their farm business partners.
              </p>
            </li>
          </ul>
          <div className="work-title">
            <p>Charter Global (client Routematch By Uber)</p>
            <p> August 2019 to January 2020</p>
          </div>
          <ul>
            <li>
              <p>Software Engineer, Atlanta, GA</p>
            </li>
            <li>
              <p>
                Designed, coded and maintained rider portal. Created functional
                applications that feature user-friendly design for
                transportation software. Worked in teams using agile development
                with SCRUM methodology to successfully implement user interface
                components using JavaScript and Vue.
              </p>
            </li>
          </ul>
          <div className="work-title">
            <p>Vasavah</p>
            <p>Nov 2018 to June 2019</p>
          </div>
          <ul>
            <li>
              <li>
                <p>Software Engineer, Manila, Philippines</p>
              </li>
              <p>
                Used React framework to create a React-draft-wysiwyg with a
                document control system with complete CRUD (create, read,
                update, delete) functionality. The application included login
                authentication which was created using Firestore authentication
                and allowed stakeholders to limit the document application
                access. Worked in teams using agile development with SCRUM
                methodology to successfully deliver features each sprint.
              </p>
            </li>
          </ul>
          <div className="work-title" style={{ display: "flex" }}>
            <p>mariposaweb</p>
            <p>Sept 2016 to Sept 2018</p>
          </div>
          <ul>
            <li>
              <p>Freelance Web Developer, Philippines</p>
            </li>
            <li>
              <p>
                Designed, coded and maintained websites and applications for
                clients from Businesses to Personal Websites using HTML, CSS,
                Vue, React, Firestore, Node.js, Authentication. Full-Stack
                Development creating functional applications that feature
                user-friendly design and clear navigation for websites
                Management. Maintained client relationships while also managing
                project scope.
              </p>
            </li>
          </ul>
          <div className="education-title">
            <p>Education</p>
          </div>
          <ul>
            <li>
              <p>
                Bachelor of Science: Computer Science, Saint Martin’s University
                (cum laude/3.65 GPA), Olympia, Washington, 2004
              </p>
            </li>
            <li>
              <p>
                Associate of Science: Programming, Pierce College Fort
                Steilacoom, Lakewood, Washington, 2002
              </p>
            </li>
            <li>
              <p>
                Bachelor of Arts: Liberal Arts, Excelsior College, Albany, New
                York, 1997
              </p>
            </li>
          </ul>
          <div className="bottom-spacer"></div>
          {/* <DisplayFooter /> */}
        </div>
      </div>
      <div className="resumeContainerTwo"></div>
    </>
  );
}

export default Resume;
