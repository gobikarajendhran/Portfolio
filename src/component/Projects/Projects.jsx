import './Projects.css';





function Projects() {
    return (
        <>   <hr />
           
            <h2>Projects</h2>
            <div className='project'>
                <div className='projectcard'>
                    <h3>Personal Portfoilo</h3>
                    <p>Built with <b>React + Vite</b>.Designed and <br />developed  from scratch to refelect my style and skills.</p>
                     <a href=''>View project</a>
                </div>
                <div className='projectcard'>
                    

                <h3>Quiz App </h3>  
                <p>HTML,CSS,Javascript-based quiz app inspired<br/> by tutorials, customized with my own layout and styling.</p>
                    <a href="https://strong-daifuku-cafa98.netlify.app/" target='_blank'>View Project</a>

                </div>
                <div className='projectcard'>
                    <h3>Responsive Portfolio Website </h3>
                    <p>A responsive and interactive website created during<br /> my training to showcase my projects and skills.<br /> Built step by step while learning frontend <br />technologies like HTML, CSS, JavaScript, and React.js.</p>
                   
                </div>
            </div>
        </>
    )

}
export default Projects;
