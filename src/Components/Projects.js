import React, { useState, forwardRef } from "react";

function Projects(props, ref) {
  const data = {
    webdesign: [
      {
        picture: "/webdesign1.png",
        type: "Web Design",
        title: "AirCalling Landing Page Design",
      },
      {
        picture: "/webdesign2.png",
        type: "Web Design",
        title: "Business Landing Page Design",
      },
      {
        picture: "/webdesign3.png",
        type: "Web Design",
        title: "Ecom Web Page Design",
      },
    ],
    uiux: [
      {
        picture: "/uiux1.png",
        type: "UI/UX",
        title: "HR UI/UX Design",
      },
      {
        picture: "/uiux2.png",
        type: "UI/UX",
        title: "Task Management Platform",
      },
      {
        picture: "/uiux3.png",
        type: "UI/UX",
        title: "Fintech App UI",
      },
    ],
    appdesign: [
      {
        picture: "/appdesign1.png",
        type: "App Design",
        title: "Voum App Design",
      },
      {
        picture: "/appdesign2.png",
        type: "App Design",
        title: "Home Care App Design",
      },
      {
        picture: "/appdesign3.png",
        type: "App Design",
        title: "Mobile Banking App Design",
      },
    ],
    graphicdesign: [
      {
        picture: "/graphicdesign1.png",
        type: "Graphic Design",
        title: "HR Management Dashboard",
      },
      {
        picture: "/graphicdesign2.png",
        type: "Graphic Design",
        title: "Suplement Product Card Design",
      },
      {
        picture: "/graphicdesign3.png",
        type: "Graphic Design",
        title: "NORTE Graphic Design",
      },
    ],
  };

  const [projectsToShow, setProjectsToShow] = useState(
    Object.values(data).flat() // Default: semua konten
  );

  function showProject(project) {
    if (project === "1") {
      setProjectsToShow(Object.values(data).flat()); // Semua data
    } else if (project === "2") {
      setProjectsToShow(data.uiux); // Hanya UI/UX
    } else if (project === "3") {
      setProjectsToShow(data.webdesign); // Hanya Web Design
    } else if (project === "4") {
      setProjectsToShow(data.appdesign); // Hanya App Design
    } else if (project === "5") {
      setProjectsToShow(data.graphicdesign); // Hanya Graphic Design
    }
  }

  return (
    <div className="mt-20 pt-[65px] h-auto" ref={ref}>
      <h1
        className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        data-aos="fade-up"
        data-aos-duration="4000"
        data-aos-delay="100"
      >
        My Projects
      </h1>
      <p
        className="w-full sm:w-[70%] md:w-[65%] text-center mt-4 mx-auto"
        data-aos="fade-up"
        data-aos-duration="4000"
        data-aos-delay="400"
      >
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
        est risus lectus. Phasellus consequat urna tellus
      </p>

      {/* Tombol Radio */}
      <div className="flex mt-10 justify-center gap-4 flex-wrap">
        <input
          type="radio"
          onChange={() => showProject("1")}
          name="filter"
          id="all"
          defaultChecked="true"
          className="hidden peer/all"
        />
        <label
          htmlFor="all"
          className="border-[#545454] border-[0.4px] bg-[#f5f0f0] py-[5px] px-[15px] rounded-md hover:bg-[#FD6F00] hover:text-white hover:cursor-pointer hover:border-[#FD6F00] peer-checked/all:text-white peer-checked/all:cursor-pointer peer-checked/all:border-[#FD6F00] peer-checked/all:bg-[#FD6F00]"
          data-aos="zoom-in"
          data-aos-duration="4000"
          data-aos-delay="700"
        >
          All
        </label>
        <input
          type="radio"
          onChange={() => showProject("2")}
          name="filter"
          id="uiux"
          className="hidden peer/uiux"
        />
        <label
          htmlFor="uiux"
          className="border-[#545454] border-[0.4px] bg-[#f5f0f0] py-[5px] px-[15px] rounded-md hover:bg-[#FD6F00] hover:text-white hover:cursor-pointer hover:border-[#FD6F00] peer-checked/uiux:text-white peer-checked/uiux:cursor-pointer peer-checked/uiux:border-[#FD6F00] peer-checked/uiux:bg-[#FD6F00]"
          data-aos="zoom-in"
          data-aos-duration="4000"
          data-aos-delay="900"
        >
          UI/UX
        </label>
        <input
          type="radio"
          onChange={() => showProject("3")}
          name="filter"
          id="webdesign"
          className="hidden peer/webdesign"
        />
        <label
          htmlFor="webdesign"
          className="border-[#545454] border-[0.4px] bg-[#f5f0f0] py-[5px] px-[15px] rounded-md hover:bg-[#FD6F00] hover:text-white hover:cursor-pointer hover:border-[#FD6F00] peer-checked/webdesign:text-white peer-checked/webdesign:cursor-pointer peer-checked/webdesign:border-[#FD6F00] peer-checked/webdesign:bg-[#FD6F00]"
          data-aos="zoom-in"
          data-aos-duration="4000"
          data-aos-delay="1000"
        >
          Web Design
        </label>
        <input
          type="radio"
          onChange={() => showProject("4")}
          name="filter"
          id="appdesign"
          className="hidden peer/appdesign"
        />
        <label
          htmlFor="appdesign"
          className="border-[#545454] border-[0.4px] bg-[#f5f0f0] py-[5px] px-[15px] rounded-md hover:bg-[#FD6F00] hover:text-white hover:cursor-pointer hover:border-[#FD6F00] peer-checked/appdesign:text-white peer-checked/appdesign:cursor-pointer peer-checked/appdesign:border-[#FD6F00] peer-checked/appdesign:bg-[#FD6F00]"
          data-aos="zoom-in"
          data-aos-duration="4000"
          data-aos-delay="1100"
        >
          App Design
        </label>
        <input
          type="radio"
          onChange={() => showProject("5")}
          name="filter"
          id="graphicdesign"
          className="hidden peer/graphicdesign"
        />
        <label
          htmlFor="graphicdesign"
          className="border-[#545454] border-[0.4px] bg-[#f5f0f0] py-[5px] px-[15px] rounded-md hover:bg-[#FD6F00] hover:text-white hover:cursor-pointer hover:border-[#FD6F00] peer-checked/graphicdesign:text-white peer-checked/graphicdesign:cursor-pointer peer-checked/graphicdesign:border-[#FD6F00] peer-checked/graphicdesign:bg-[#FD6F00]"
          data-aos="zoom-in"
          data-aos-duration="4000"
          data-aos-delay="1200"
        >
          Graphic Design
        </label>
      </div>

      {/* Konten Proyek */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
      data-aos="fade-up"
      data-aos-duration="4000"
      data-aos-delay="1400"
      >
        {projectsToShow.map((project, index) => (
          <div
            key={index}
            className="border rounded-md p-4 text-center shadow-sm hover transform transition-all duration-300 hover:scale-100 hover:translate-y-[-10px] hover:shadow-lg hover:cursor-pointer"
          >
            <img
              src={project.picture}
              alt={project.title}
              className="w-full h-40 object-contain rounded-md"
            />
            <p className="text-[#FD6F00] mt-5 text-sm sm:text-base">{project.type}</p>
            <h3 className="font-bold text-lg sm:text-xl mt-2">{project.title}</h3>
            <button className="bg-[#FD6F00] text-white mt-5 px-[50px] py-[5px] rounded-md text-[15px]">Detail</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default forwardRef(Projects);
