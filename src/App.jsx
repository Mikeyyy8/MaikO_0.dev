import React from "react"
import Link from "./components/Link"
import Project from "./components/Project"

function App() {
  const myLinks = [
    {
      name: "Github",
      url: "https://Github.com/Mikeyyy8",
    },
    {
      name: "Twitter",
      url: "https://x.com/kellThe1st",
    },
    {
      name: "Mail",
      url: "mailto:mikeyyyglo12@gmail.com",
    },
  ]

  const myProjects = [
    {
      name: "PencilBoy",
      url: "https://pencil-boy.vercel.app/",
      dscr: "Ecommerce API",
      src: "",
    },
    {
      name: "Qshare",
      url: "",
      dscr: "A simple text sharing API with auth.",
      src: "https://github.com/Mikeyyy8/Qshare",
    },
  ]

  const linkElements = myLinks.map(link => <Link key={link.name} name={link.name} url={link.url} />)
  const projectElements = myProjects.map(project => <Project key={project.name}
     name={project.name} url={project.url} dscr={project.dscr} src={project.src} />)

  return (
    <div className="flex justify-center items-center bg-neutral-950 text-neutral-500 ">
      <section className="md:max-w-1/2 m-5 space-y-10 my-10 md:text-justify md:my-30">
        <div className="space-y-10">
          <h1 className="text-2xl text-neutral-50">
            Hey there, My name's Michael.
          </h1>
          <div className="space-y-8">
            <p>
              I'm a computer Engineer with a drive for
              solving problems by building responsive and user-friendly software.
            </p>
            <p>I'm currently working on <a href="https://pencil-boy.vercel.app/" target="_blank" 
            rel="noopener noreferrer" className="text-orange-500 decoration-1 underline">PencilBoy</a>.</p>
            <p>
              I'm a multidisciplinary programmer that works primarily with Javascript,
              TypeScript and PHP. I also have interest and experience in
              languages like C++ and Python.
            </p>
            <p className="italic text-sky-200">
              "My goal is to solve problems and build cool things"
            </p>
          </div>
        </div>
        <div className="flex  md:flex-row gap-2 md:gap-5 text-neutral-50">
          {linkElements}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl text-neutral-300">Projects</h3>
          {myProjects.length === 0 && <p>No projects yet!</p>}
          <div className="space-y-2">{projectElements}</div>
        </div>

        <footer className="border-t border-neutral-900 text-center p-5">
          <p>©2025 MaikO_0.</p>
        </footer>
      </section>
    </div>
  );
}

export default App;
