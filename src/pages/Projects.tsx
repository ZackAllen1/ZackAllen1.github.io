import classes from './Projects.module.css';
import ProjectCard from "../components/ProjectCard";
import { Grid } from "@mantine/core";

import superCDMSLogo from '../assets/proj-imgs/superCDMS/superCDMSLogo.png'
import entityResolutionLogo from '../assets/proj-imgs/entityResolution/entityResolutionLogo.png'
import balatroLogo from '../assets/proj-imgs/balatro/balatro.jpg'
import bdchLogo from '../assets/proj-imgs/bdch/bdch.png';
import maistroLogo from '../assets/proj-imgs/maistro/maistro.png';
import examprefLogo from '../assets/proj-imgs/exampref/exams.jpg';
import pitchpredLogo from '../assets/proj-imgs/pitchpred/astros.png';
import parentLogo from '../assets/proj-imgs/parentinvolve/parentInvolveLogo.jpg';
import mkpisLogo from '../assets/proj-imgs/mkpis/mkpis.png';
import transitLogo from '../assets/proj-imgs/transit/bus.png';

function Projects() {
    return (
        <div className={classes.projectContainer}>
            <div className={classes.projectCardContainer}>
                <h1>Projects</h1>
                <Grid className={classes.gridRow}>
                    <ProjectCard
                        size={"sm"}
                        image={superCDMSLogo}
                        title={"SuperCDMS ML/DL Techniques"}
                        url={"supercdms"}
                        period={"Spring 2026"}
                        description={"Using ML/DL to accurately reconstruct interaction locations of Weakly Interacting Massive Particles (WIMPs) in the Super Cryogenic Dark Matter Search (SuperCDMS) experiment."}
                        badges={[{ label: "PYTHON" }, { label: "DEEP LEARNING" }, { label: "PHYSICS" }]}
                    />
                    <ProjectCard
                        size={"sm"}
                        image={entityResolutionLogo}
                        title={"Evaluating Entity Resolution Methods"}
                        url={"entity-resolution-patient-records"}
                        period={"Fall 2025"}
                        description={"Evaluting three different entity resolution methods on 150,000+ synthetic patient records created with SyntheticMass."}
                        badges={[{ label: "RECORD LINKAGE" }, { label: "PYTHON" }, { label: "COMPUTATIONAL DATA ANALYTICS" }]}
                    />
                </Grid>
                <Grid className={classes.gridRow}>
                    {/* <ProjectCard
                        size={"sm"}
                        image={webpLogo}
                        title={"React Web Portfolio 2.0"}
                        url={"react-web-portfolio"}
                        period={"Spring 2025"}
                        description={"What you're looking at! Refreshed web portfolio using React, TypeScript, Vite, and Mantine Components. Now publicly available!"}
                        badges={[{ label: "WEB PORTFOLIO" }, { label: "REACT" }, { label: "TYPESCRIPT" }]}
                    /> */}
                    <ProjectCard
                        size={"sm"}
                        image={balatroLogo}
                        title={"Balatro Starting Strategy Simulation"}
                        url={"balatro-simulation"}
                        period={"Summer 2025"}
                        description={"Determining which of eight different Balatro starting strategies can survive the longest across various difficulties with SimPy."}
                        badges={[{ label: "PYTHON" }, { label: "SIMULATION" }, { label: "SIMPY" }]}
                    />
                    <ProjectCard
                        size={"sm"}
                        image={bdchLogo}
                        title={"Talk: Big Data Challenges in Healthcare"}
                        url={"big-data-challenges-healthcare"}
                        period={"Fall 2024"}
                        description={"Talk to University of Florida Data Science, Statistics, and Actuarial Clubs on Big Data Challenges in Healthcare with a project deep-dive on using GLMMs to evaluate home-health providers."}
                        badges={[{ label: "PRESENTATION" }, { label: "DATABRICKS" }, { label: "GLMM" }, { label: "JULIA" }]}
                    />
                </Grid>
                {/* <Grid className={classes.gridRow}>
                    <ProjectCard
                        size={"lg"}
                        image={maistroLogo}
                        title={"MAISTRO"}
                        url={"maistro"}
                        period={"Fall 2023"}
                        description={"Full-stack application employing NLP techniques to interpret user-conversations and recommend songs based on current mood or activities with Spotify's Recommendation API. Completed as part of Fall 2023 Senior Design Project."}
                        badges={[{ label: "NLP" }, { label: "GROUP PROJECT" }, { label: "SENIOR DESIGN" }]}
                    />
                </Grid> */}
                <Grid className={classes.gridRow}>
                    <ProjectCard
                        size={"sm"}
                        image={maistroLogo}
                        title={"MAISTRO"}
                        url={"maistro"}
                        period={"Fall 2023"}
                        description={"Full-stack application employing NLP techniques to interpret user-conversations and recommend songs based on current mood or activities with Spotify's Recommendation API. Completed as part of Fall 2023 Senior Design Project."}
                        badges={[{ label: "NLP" }, { label: "GROUP PROJECT" }, { label: "SENIOR DESIGN" }]}
                    />
                    <ProjectCard
                        size={"sm"}
                        image={examprefLogo}
                        title={"Student Exam Preferences"}
                        url={"exam-preferences"}
                        period={"Fall 2023"}
                        description={"Analyzing college student preferences for courses based on exam formats and scores using techniques learned in an Experimental Design Course."}
                        badges={[{ label: "EXPERIMENT DESIGN" }, { label: "STATISTICAL ANALYSIS" }]}
                    />
                    {/* <ProjectCard
                        size={"sm"}
                        image={pitchpredLogo}
                        title={"Pitch Type Prediction"}
                        url={"pitch-prediction"}
                        period={"Fall 2023"}
                        description={"Analysis of Binary Classifiers that predict an upcoming pitch type based on game state and are fit to individual pitcher data."}
                        badges={[{ label: "STATISTICAL LEARNING" }, { label: "NAIVE BAYES" }, { label: "BOOSTING TREES" }]}
                    /> */}
                </Grid>
                <Grid className={classes.gridRow}>
                    <ProjectCard
                        size={"sm"}
                        image={pitchpredLogo}
                        title={"Pitch Type Prediction"}
                        url={"pitch-prediction"}
                        period={"Fall 2023"}
                        description={"Analysis of Binary Classifiers that predict an upcoming pitch type based on game state and are fit to individual pitcher data."}
                        badges={[{ label: "STATISTICAL LEARNING" }, { label: "NAIVE BAYES" }, { label: "BOOSTING TREES" }]}
                    />
                    <ProjectCard
                        size={"sm"}
                        image={parentLogo}
                        title={"Parent Involvement Impact Analysis"}
                        url={"parent-involvement"}
                        period={"Fall 2022"}
                        description={`Semester long group project to analyze how different parent involvement types impact student
                                        grades across various school levels, geographic locations, and community demographics. `}
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