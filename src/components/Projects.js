import { projects } from "../data";

const Projects = () => {
    return (
    <section id="projects" className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Some of the projects I have been working on over the years.
            </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center items-center">
            {projects.map((project) => (
            <div className="project lg:w-1/2 p-4">
                <div className="image">
                <img
                    alt="gallery"
                    className="image-img inset-0 object-cover object-center"
                    src={project.image}
                />
                <div className="image-overlay px-8 py-10 relative z-10 w-full border-4">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                    </h2>
                    <h1 className="image-title sm:text-lg">
                    {project.title}
                    </h1>
                    <p className="image-description">{project.description}</p>
                    {project.link ? 
                    <div className="lg:py-3">
                        <a className="btn btn-success text-sm" href={project.link}>Check it out</a>
                    </div>
                    : ""}
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
        <p><a className="btn btn-outline-success" href="index.html" role="button">See more</a></p>
    </section>
    );
}

export default Projects;
