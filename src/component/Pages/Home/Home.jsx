import Content from "../../Content/Content";
import ExpertiseCard from "../../ExpertiseCard/ExpertiseCard";
import SkillsCard from "../../SkillsCard/SkillsCard";
import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";
function Home() {
    return (
        <>
            
           
            <div style={{padding:"50px"}}>
                <Content/>
                <ExpertiseCard />
                <SkillsCard />
                <Projects/>
                <Contact />
                
            </div>
        </>
    );

}
export default Home;