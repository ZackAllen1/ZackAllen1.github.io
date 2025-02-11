import { Grid, Group, Text } from '@mantine/core';
import { IconBrandSnowflake, IconBrandDatabricks, IconChartBarPopular, IconFileTypeXls, IconBrandPython, IconDatabase, IconBrandTypescript, IconBrandReact, IconBrandCpp } from '@tabler/icons-react'
import { BiLogoPostgresql } from "react-icons/bi";
import { SiApachespark, SiTableau } from "react-icons/si";
import SkillBadge from '../components/SkillBadge';

import abtlogo from '../assets/job-imgs/abt_logo.png'
import uflogo from '../assets/job-imgs/uf_logo.png'
import jnjlogo from '../assets/job-imgs/jnj_logo.png'
import sdslogo from '../assets/job-imgs/totalsds_logo.jpg'
import gtlogo from '../assets/job-imgs/gt_logo.svg'
import WorkExpItem from '../components/WorkExpItem';
import profile from '../assets/profile.png';

import classes from './About.module.css';


function About() {

    return (
        <div className={classes.aboutContainer}>
            <div className={classes.workExpContainer}>
                <h1>About Me</h1>
                <div className={classes.abMeContainer}>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 8, lg: 5 }}>
                            <img src={profile} alt="Profile Picture" className={classes.profilePic} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, lg: 6 }} style={{ fontSize: "16px", fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
                            Current Data Scientist 1 at Abt Global and a Master's Student in Analytics at the Georgia Institute of Technology.
                            My work primarily focuses on applying data-driven solutions in the healthcare and environmental sectors, leveraging machine learning,
                            statistical modeling, and big data techniques to drive meaningful insights.
                            <br /><br />
                            Here you'll find my&nbsp;

                            <Text
                                component='span'
                                size="md"
                                fw={900}
                                variant="gradient"
                                gradient={{ from: 'blue', to: 'cyan' }}
                                className={classes.shiningText}
                            >
                                <a href="/projects">
                                    <b>Projects</b>
                                </a>
                            </Text>,&nbsp;

                            <Text
                                component='span'
                                size="md"
                                fw={900}
                                variant="gradient"
                                gradient={{ from: 'blue', to: 'cyan' }}
                                className={classes.shiningText}
                            >
                                <a href="/coursework">
                                    <b>Coursework</b>
                                </a>
                            </Text>, and&nbsp;

                            <Text
                                component='span'
                                size="md"
                                fw={900}
                                variant="gradient"
                                gradient={{ from: 'blue', to: 'cyan' }}
                            >
                                <a href="/resume">
                                    <b>Resume</b>
                                </a>
                            </Text> — feel free to explore and connect!
                        </Grid.Col>
                    </Grid>
                </div>
                <h1>Work Experience</h1>
                <WorkExpItem
                    company={"Abt Global"}
                    title={"Data Scientist 1"}
                    startDate={"Mar. '24"}
                    endDate={"Present"}
                    logo={abtlogo} logoH={45} logoW={45}
                />
                <WorkExpItem
                    company={"University of Florida"}
                    title={"Teaching Assistant for Info & Database Systems 1"}
                    startDate={"Aug."}
                    endDate={"Dec. '23"}
                    logo={uflogo} logoH={30} logoW={45}
                />
                <WorkExpItem
                    company={"Johnson & Johnson"}
                    title={"Data Scientist Co-op"}
                    startDate={"Jan."}
                    endDate={"June '23"}
                    logo={jnjlogo} logoH={45} logoW={45}
                />
                <WorkExpItem
                    company={"TotalSDS"}
                    title={"Data Analyst Intern"}
                    startDate={"June"}
                    endDate={"Aug. '21"}
                    logo={sdslogo} logoH={45} logoW={45}
                />
            </div>
            <div className={classes.workExpContainer}>
                <h1>Skills</h1>
                <h3>💻 Programming Languages and Frameworks</h3>
                <Group gap={4}>
                    <SkillBadge name="Python" color="#4584B6" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width={24} height={24} />} />
                    <SkillBadge name="R" color="#276DC2" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" width={24} height={24} />} />
                    <SkillBadge name="SQL" color="#ff8300" icon={<IconDatabase />} />
                    <SkillBadge name="Julia" icon={<img src="https://cdn.worldvectorlogo.com/logos/julia-1.svg" width={24} height={24} />} />
                    <SkillBadge name="TypeScript" color="#3178C6" icon={<IconBrandTypescript />} />
                    <SkillBadge name="React" color="#58c4dc" icon={<IconBrandReact />} />
                    <SkillBadge name="C++" color="#00589c" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width={24} height={24} />} />
                    <SkillBadge name="Java" color="#007396" icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width={24} height={24} />} />
                </Group>

                <h3>🤖 Data Science & Machine Learning</h3>
                <Group gap={4}>
                    <SkillBadge name="NumPy" color="#352364" />
                    <SkillBadge name="Pandas" color="#150458" />
                    <SkillBadge name="TensorFlow" color="#FFA800" />
                    <SkillBadge name="scikit-learn" color="#9B4600" />
                    <SkillBadge name="Matplotlib" color="#A762B3" />
                    <SkillBadge name="Plotly Dash" color="black" />
                    <SkillBadge name="Streamlit" color="red" />
                    <SkillBadge name="Optuna" color="blue" />
                    <SkillBadge name="Hugging Face" color="yellow" />
                    <SkillBadge name="LangChain" color="#1d3d3c" />
                </Group>

                <h3>📊 Data Engineering & Analytics</h3>
                <Group gap={4}>
                    <SkillBadge name="PostgreSQL" color="#0064a5" icon={<BiLogoPostgresql size={24} />} />
                    <SkillBadge name="Databricks" color="#FF3621" icon={<IconBrandDatabricks />} />
                    <SkillBadge name="Apache Spark" color="#EC5800" icon={<SiApachespark size={20} />} />
                    <SkillBadge name="Snowflake" color="#00A1D9" icon={<IconBrandSnowflake />} />
                    <SkillBadge name="PowerBI" color="#D8B04A" icon={<IconChartBarPopular />} />
                    <SkillBadge name="Tableau" color="#CA1E32" icon={<SiTableau size={20} />} />
                    <SkillBadge name="Power Autosmate" color="blue" icon={<img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Microsoft_Power_Automate.svg" width={24} height={24} />} />
                    <SkillBadge name="Excel" color="#1D6F42" icon={<IconFileTypeXls />} />
                </Group>

                <h3>🔨 Development & Productivity Tools</h3>
                <Group gap={4}>
                    <SkillBadge name="Jupyter Notebook" color="orange" />
                    <SkillBadge name="Docker" color="#1D63ED" />
                    <SkillBadge name="GitHub/Git" color="black" />
                    <SkillBadge name="LaTeX" color="black" />
                    <SkillBadge name="PowerPoint" color="#D35230" />
                </Group>
            </div>
            <div className={classes.workExpContainer}>
                <h1>Education</h1>
                <WorkExpItem
                    company={"Georgia Institute of Technology"}
                    title={"Masters in Analytics (C-Track)"}
                    startDate={"Jan. '25"}
                    endDate={"Present"}
                    logo={gtlogo} logoH={30} logoW={45}
                />
                <WorkExpItem
                    company={"University of Florida"}
                    title={"B.S. Computer Science, Statistics Minor"}
                    lowerText='GPA: 3.88/4.0'
                    endDate={"Dec. 2023"}
                    logo={uflogo} logoH={30} logoW={45}
                />
            </div>



        </div>
    )

}

export default About;