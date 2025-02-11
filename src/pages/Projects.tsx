import classes from './Projects.module.css';
import ProjectCard from "../components/ProjectCard";
import { Grid } from "@mantine/core";

import maistroLogo from '../assets/proj-imgs/maistro/maistro.png';
import examprefLogo from '../assets/proj-imgs/exampref/exams.jpg';
import pitchpredLogo from '../assets/proj-imgs/pitchpred/astros.png';
import parentLogo from '../assets/proj-imgs/parentinvolve/parentInvolvement.png';
import mkpisLogo from '../assets/proj-imgs/mkpis/mkpis.png';
import transitLogo from '../assets/proj-imgs/transit/bus.png';

function Projects() {
    return (
        <div className={classes.projectContainer}>
            <div className={classes.projectCardContainer}>
                <h1>Projects</h1>

                <Grid className={classes.gridRow}>
                    <ProjectCard
                        size={"lg"}
                        image={maistroLogo}
                        title={"MAISTRO"}
                        url={"maistro"}
                        period={"Fall 2023"}
                        description={"Full-stack application employing NLP techniques to interpret user-conversations and recommend songs based on current mood or activities with Spotify's Recommendation API. Completed as part of Fall 2023 Senior Design Project."}
                        badges={[{ label: "NLP" }, { label: "GROUP PROJECT" }, { label: "SENIOR DESIGN" }]} />
                </Grid>
                <Grid className={classes.gridRow}>
                    <ProjectCard
                        size={"sm"}
                        image={examprefLogo}
                        title={"Student Exam Preferences"}
                        url={"exam-preferences"}
                        period={"Fall 2023"}
                        description={"Analyzing college student preferences for courses based on exam formats and scores using techniques learned in an Experimental Design Course."}
                        badges={[{ label: "EXPERIMENT DESIGN" }, { label: "STATISTICAL ANALYSIS" }]}
                    />
                    <ProjectCard
                        size={"sm"}
                        image={pitchpredLogo}
                        title={"Pitch Type Prediction"}
                        url={"pitch-prediction"}
                        period={"Fall 2023"}
                        description={"Analysis of Binary Classifiers that predict an upcoming pitch type based on game state and are fit to individual pitcher data."}
                        badges={[{ label: "STATISTICAL LEARNING" }, { label: "NAIVE BAYES" }, { label: "BOOSTING TREES" }]}
                    />
                </Grid>
                <Grid className={classes.gridRow}>
                    <ProjectCard
                        size={"lg"}
                        image={parentLogo}
                        title={"Statistical Analysis of Parent Involvement and Child Academic Achievement"}
                        url={"parent-involvement"}
                        period={"Fall 2022"}
                        description={`Semester long group project to analyze how different parent involvement types impact student
                                        grades across various school levels, geographic locations, and community demographics. Final report submitted
                                        to Consortium for the Advancement of Undergraduate Statistics Education (CAUSE) for their Undergraduate
                                        Statistics Class Project (USCLAP) Competition.`}
                        badges={[{ label: "GROUP PROJECT" }]} />
                </Grid>
                <Grid className={classes.gridRow}>
                    <ProjectCard
                        size={"sm"}
                        image={mkpisLogo}
                        title={"GitHub Productivity Tracker"}
                        url={"mkpis"}
                        period={"Summer 2021"}
                        description={"Modified MKPIS repo to provide queryable Github project statistics and exportable data for internship Power BI reports."}
                        badges={[{ label: "GITHUB" }, { label: "POWER BI" }, { label: "KPI TRACKER" }]}
                    />
                    <ProjectCard
                        size={"sm"}
                        image={transitLogo}
                        title={"Rapid Transit Simulator"}
                        url={"rapid-transit"}
                        period={"Summer 2020"}
                        description={"An efficient bus and ride pickup GUI which implements A* and Djikstra Pathfinding, Min-Heap Scoring Functions, and Large Random Graph Generators."}
                        badges={[{ label: "DATA STRUCTURES" }, { label: "ALGORITHMS" }, { label: "TEAM-PROJECT" }]}
                    />
                </Grid>

            </div>
        </div>
    )
}

export default Projects;