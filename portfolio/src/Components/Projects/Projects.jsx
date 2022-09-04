import React from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";
import {
  ProjectDiv,
  Row,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxP,
  A,
  BoxDiv,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiRedux } from "react-icons/si";
const Projects = () => {
  const projects = [
    // {
    //   id: 0,
    //   project_name: "MaskIt Store",
    //   image: "/project_images/maskit.png",
    //   project_desc:
    //     "MaskIt Store is an E-commerce web app that allows users to search, buy and review masks.",
    //   deploy_link: "https://maskit.vercel.app/",
    //   repo_link: "https://github.com/ajmalmiyan/maskit-store",
    //   tech_stack: [
    //     <FaReact />,
    //     <FaNodeJs />,
    //     <SiMongodb />,
    //     <SiRedux />,
    //     <FaJs />,
    //     <FaCss3 />,
    //   ],
    // },
    // {
    //   id: 1,
    //   project_name: "Indeed Clone",
    //   image: "/project_images/indeed.png",
    //   project_desc:
    //     "Indeed is a web app that allows users to search jobs, apply jobs and add reviews about employers.",
    //   deploy_link: "https://indeed.vercel.app/",
    //   repo_link: "https://github.com/ajmalmiyan/indeed-clone",
    //   tech_stack: [<FaReact />, <SiRedux />, <FaJs />, <FaHtml5 />, <FaCss3 />],
    // },
    {
      id: 1,
      project_name: "apollo farmacy",
      image: "/project_images/project-1.png",
      project_desc:
        "In Cult.Fit you can schedule a workout session of your choice as per the date and time slot provided.",
      deploy_link: "https://quirky-neumann-18c833.netlify.app",
      repo_link: "https://github.com/SakethReddy1111/Apollo-247",
      tech_stack: [
        
        <FaJs />,
        <FaHtml5 />,
        <FaCss3 />,
      ],
    },

    
    // {
    //   id: 2,
    //   project_name: "Netflix Clone",
    //   image: "/project_images/netflix.png",
    //   project_desc:
    //     "An OTT platform that allows users to watch a wide variety of shows and movies. This is a personal project.",
    //   deploy_link: "https://netflix-psi-murex.vercel.app/",
    //   repo_link: "https://github.com/ajmalmiyan/netflix",
    //   tech_stack: [<FaReact />, <FaJs />, <FaHtml5 />, <FaCss3 />],
    // },
    //
    {
      id: 2,
      project_name: "fragrance outnet",
      image: "/project_images/project-2.png",
      project_desc:
        "An online E library built using React JS, Express js, Node JS and Mongodb.",
      deploy_link: "https://fragrance-outlet-mastered.netlify.app",
      repo_link: "https://github.com/Pranjal7777/Fragranceoutlet",
      tech_stack: [
        <SiMongodb />,
        <FaNodeJs />,
        <FaReact />,
        <FaNodeJs />,
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
      ],
    },
    {
      id: 3,
      project_name: "food website",
      image: "/project_images/project-3.png",
      project_desc:
        "An online stocks trading web app. Built using JS, Express js, Node js and MongoDB.",
      deploy_link: "https://growww-clone.netlify.app/",
      repo_link: "https://github.com/saikiran11461/foodwebsite",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
       
      ],
    },
    // {
    //   id: 4,
    //   project_name: "Bluemercury Clone",
    //   image: "/project_images/bluemercury.png",
    //   project_desc:
    //     "Bluemercury is an US based Cosmetics store. Built using HTML, CSS and JavaScript. ",
    //   deploy_link: "https://bluemercuryclone.netlify.app/",
    //   repo_link: "https://github.com/Vishal-080/Bluemercury",
    //   tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    // },

        
    {
      id: 5,
      project_name: "FATHOME Clone",
      image: "/project_images/project-5.png",
      project_desc:
        "A site Build on Cost, speed, and accuracy. No need to make trade-offs, choose all three. Cost.",
      deploy_link: "https://lying-powder-9405.vercel.app/",
      repo_link: "https://github.com/saikiran11461/lying-powder-9405",
      tech_stack: [<FaReact />, <FaJs />, <FaHtml5 />, <FaCss3 />,<SiRedux />],
    },

    {
      id: 6,
      project_name: "Photo Graph",
      image: "/project_images/project-6.png",
      project_desc:
        "A site Build to showcase our trends on Editing Pics and videous.",
      deploy_link: "https://photograph-webpage.vercel.app/",
      repo_link: "https://github.com/saikiran11461/photograph",
      tech_stack: [<FaReact />, <FaJs />, <FaHtml5 />, <FaCss3 />,<SiRedux />],
    },

    {
      id: 7,
      project_name: "Sticky notes",
      image: "/project_images/project-7.png",
      project_desc:
        "Made a site about notes we can make sticky notes",
      deploy_link: "https://new-sticky-notes.vercel.app/",
      repo_link: "https://github.com/saikiran11461/new_sticky-notes",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaReact />,
       
      ],
    },

    {
      id: 8,
      project_name: " Birthday Presentation",
      image: "/project_images/project-8.png",
      project_desc:
        "Made a site about Showing the birthdays",
      deploy_link: "https://react-birthday.vercel.app/",
      repo_link: "https://github.com/saikiran11461/react-birthday",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
       
      ],
    },
    {
      id: 9,
      project_name: " Movies app",
      image: "/project_images/project-9.png",
      project_desc:
        "Made a site about showing movies",
      deploy_link: "https://new-movies-app.vercel.app/",
      repo_link: "https://github.com/saikiran11461/new_movies_app",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
       
      ],
    },
    {
      id: 10,
      project_name: " Calculator app",
      image: "/project_images/project-10.png",
      project_desc:
        "Created a calculator app",
      deploy_link: "https://calc-new-three.vercel.app/",
      repo_link: "https://github.com/saikiran11461/calc_new",
      tech_stack: [
        <FaHtml5 />,
        <FaCss3 />,
        <FaJs />,
       
      ],
    }
    //https://seekho-frontend-vcow10kar.vercel.app/
  ];

  return (
    <Container className="projects">
      <ProjectDiv>
        <Common>
          <H1>Projects</H1>
        </Common>
        <Row>
          {projects.map((item) => (
            <BoxDiv key={item.id}>
              <ServiceBox>
                <img src={item.image} alt="icon" style={{ width: "100%" }} />
                <div style={{ margin: "15px" }}>
                  <ServiceBoxHeader style={{ textAlign: "center" }}>
                    {item.project_name}
                  </ServiceBoxHeader>
                  <ServiceBoxP>{item.project_desc}</ServiceBoxP>
                  {/* <a href="">Read more</a> */}
                  <div
                    style={{
                      margin: "15px 20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.tech_stack.map((item) => (
                      <div className="iconsTechStack">{item}</div>
                    ))}
                  </div>
                  <A
                    href={item.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </A>
                  <A
                    href={item.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink /> Demo
                  </A>
                </div>
              </ServiceBox>
            </BoxDiv>
          ))}
        </Row>
      </ProjectDiv>
    </Container>
  );
};

export default Projects;
