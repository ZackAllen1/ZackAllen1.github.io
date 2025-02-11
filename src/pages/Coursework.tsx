import { Accordion, Group, List, Progress, Timeline, Title } from '@mantine/core';
import { IconArrowRight, IconCheck, IconMathIntegralX } from '@tabler/icons-react';
import classes from './Coursework.module.css'
import SkillBadge from '../components/SkillBadge';


function Coursework() {
    return (
        <div className={classes.courseContainer}>
            <div className={classes.schoolContainer}>
                <h1>Coursework</h1>
                <span><b>Course Key</b></span>
                <div className={classes.courseKey}>
                    <Group gap={4}>
                        <SkillBadge name="DS/ML/Stats" icon={<Title order={4} style={{ paddingBottom: "3px" }}>📊</Title>} />
                        <SkillBadge name="Computer Science" icon={<Title order={4}>💻</Title>} />
                        <SkillBadge name="Math/Physics" icon={<IconMathIntegralX />} />
                        <SkillBadge name="Business" icon={<Title order={4} style={{ paddingBottom: "5px" }}>💼</Title>} />
                        <SkillBadge name="Communication" icon={<Title order={4} style={{ paddingBottom: "3px" }}>🗣️</Title>} />
                        <SkillBadge name="Internships" icon={<Title order={4} style={{ paddingBottom: "3px" }}>👔</Title>} />
                    </Group>
                </div>

                <Accordion variant='contained' multiple defaultValue={['gt']}>
                    <Accordion.Item value="gt">
                        <Accordion.Control>
                            <h2>Graduate Coursework</h2>
                            <Progress.Root size={22} radius={5}>
                                <Progress.Section value={8} color="#B3A369">
                                    <Progress.Label>0%</Progress.Label>
                                </Progress.Section>
                            </Progress.Root>
                        </Accordion.Control>

                        <Accordion.Panel>
                            <div className={classes.timelineOuter}>
                                <div className={classes.timelineInner}>
                                    <p style={{ textAlign: "left", fontSize: "18px", marginLeft: "10px", width: "100%" }}>
                                        <u><b>Georgia Institute of Technology</b></u><br />
                                        <b>Degree: </b> M.S. in Analytics<br />
                                        <b>Concentration: </b> Computational Data Analytics (C-Track)<br />
                                        <b>GPA: </b> TBD<br />
                                        <b>Start Date: </b> January 2025
                                    </p>
                                    <Timeline color="#B3A369" active={1} bulletSize={24} lineWidth={3} reverseActive>
                                        <Timeline.Item title="Summer 2025">
                                            <List>
                                                <List.Item icon={<Title order={3} style={{ paddingBottom: "5px" }}>💼</Title>}><b>MGT 8803</b> Business Fundamentals for Analytics </List.Item>
                                            </List>
                                        </Timeline.Item>
                                        <Timeline.Item title="Spring 2025" bullet={<IconArrowRight />}>
                                            <List>
                                                <List.Item icon={<Title order={4}>📊</Title>}><b>IYSE 6501</b> Intro to Analytics Modeling </List.Item>
                                            </List>
                                        </Timeline.Item>

                                    </Timeline>
                                </div>
                            </div>
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="uf">
                        <Accordion.Control>
                            <h2>Undergraduate Coursework</h2>
                            <Progress.Root size={22} radius={5}>
                                <Progress.Section value={100} color="#0021A5">
                                    <Progress.Label>100%</Progress.Label>
                                </Progress.Section>
                            </Progress.Root>
                        </Accordion.Control>

                        <Accordion.Panel>
                            <div className={classes.timelineOuter}>
                                <div className={classes.timelineInner}>
                                    <p style={{ textAlign: "left", fontSize: "18px", marginLeft: "10px", width: "100%" }}>
                                        <u><b>University of Florida</b></u><br />
                                        <b>Major: </b> B.S. in Computer Science<br />
                                        <b>College: </b> <em>Herbert Wertheim College of Engineering</em> <br />
                                        <b>Minor: </b> Statistics <br />
                                        <b>GPA: </b> 3.88/4.0<br />
                                        <b>Graduation: </b> December 2023
                                    </p>
                                    <Timeline color="#0021A5" active={12} bulletSize={24} lineWidth={3} reverseActive>
                                        <Timeline.Item title="Fall 2023 🎓" bullet={<IconCheck />}>
                                            <List>
                                                <List.Item icon={<Title order={4}>📊</Title>}><b>STA4211</b> Design of Experiments </List.Item>
                                                <List.Item icon={<Title order={4}>📊</Title>}><b>STA4241</b> Statistical Learning in R </List.Item>
                                                <List.Item icon={<Title order={4}>💻</Title>}><b>CIS4914</b> Senior Design Project</List.Item>
                                                <List.Item icon={<Title order={4}>👔</Title>}><b>Teaching Assistant</b> for Info & Database Systems 1 </List.Item>
                                            </List>
                                        </Timeline.Item>
                                        <Timeline.Item title="Summer 2023" bullet={<IconCheck />}>
                                            <List>
                                                <List.Item icon={<Title order={4}>👔</Title>}> <b>Data Science Co-op</b>  @ Johnson & Johnson</List.Item>
                                            </List>
                                        </Timeline.Item>
                                        <Timeline.Item title="Spring 2023" bullet={<IconCheck />}>
                                            <List>
                                                <List.Item icon={<Title order={4}>👔</Title>}> <b>Data Science Co-op</b>  @ Johnson & Johnson</List.Item>
                                                <List.Item icon={<Title order={4}>📊</Title>}><b>CAP4641</b> Natural Language Processing </List.Item>
                                                <List.Item icon={<Title order={4}>💻</Title>}><b>CNT4007</b> Computer Network Fundamentals </List.Item>
                                                <List.Item icon={<Title order={4}>💻</Title>}><b>CIS4930</b> Enterprise Software Engineering </List.Item>
                                            </List>
                                        </Timeline.Item>

                                        <Timeline.Item title="Fall 2022" bullet={<IconCheck />}>
                                            <List>
                                                <List.Item icon={<Title order={4}>💻</Title>}><b>COP4600</b> Operating Systems </List.Item>
                                                <List.Item icon={<Title order={4}>📊</Title>}><b>STA4210</b> Regression Analysis </List.Item>
                                                <List.Item icon={<Title order={4}>📊</Title>}><b>STA3180</b> Statistical Modeling</List.Item>
                                                <List.Item icon={<Title order={4}>📊</Title>}><b>PHI3681</b> Ethics, Data, & Technology</List.Item>
                                            </List>
                                        </Timeline.Item>

                                        <Timeline.Item title="Summer 2022" bullet={<IconCheck />}>
                                            <List>
                                                <List.Item icon={<Title order={4}>🗣️</Title>}><b>EGS4034</b> Engineering Ethics </List.Item>
                                                <List.Item icon={<Title order={4}>🗣️</Title>}><b>ENC3254</b> Prof Writing Disciplines </List.Item>
                                                <List.Item icon={<Title order={4}>🗣️</Title>}><b>COM1000</b> Communication Studies</List.Item>
                                            </List>
                                        </Timeline.Item>

                                        <Timeline.Item title="Spring 2022" bullet={<IconCheck />}>
                                            <List>
                                                <List.Item icon={<Title order={4}>📊</Title>}><b>CIS4930</b> Applied Machine Learning </List.Item>
                                                <List.Item icon={<Title order={4}>📊</Title>}><b>STA4504</b> Categorical Data Analysis </List.Item>
                                                <List.Item icon={<Title order={4}>📊</Title>}><b>STA3100</b> Programming with Data</List.Item>
                                                <List.Item><b>EEL3872</b> AI Fundamentals </List.Item>
                                            </List>
                                        </Timeline.Item>

                                        <Timeline.Item title="Fall 2021" bullet={<IconCheck />}>
                                            <List>
                                                <List.Item icon={<Title order={4}>📊</Title>}><b>CIS4930</b> Intro to Machine Learning </List.Item>
                                                <List.Item icon={<Title order={4}>📊</Title>}><b>MAS4115</b> Linear Algebra for Data Science</List.Item>
                                                <List.Item icon={<Title order={4}>📊</Title>}><b>STA3032</b> Engineering Statistics </List.Item>
                                                <List.Item icon={<Title order={4}>💻</Title>}><b>CDA3101</b> Intro to Computer Organization </List.Item>
                                            </List>
                                        </Timeline.Item>

                                        <Timeline.Item title="Summer 2021" bullet={<IconCheck />}>
                                            <List>
                                                <List.Item icon={<Title order={4}>👔</Title>}><b>Internship</b> @ TotalSDS (Tampa, FL) </List.Item>
                                            </List>
                                        </Timeline.Item>

                                        <Timeline.Item title="Spring 2021" bullet={<IconCheck />}>
                                            <List>
                                                <List.Item icon={<Title order={4}>📊</Title>}><b>CAP4770</b> Intro to Data Science </List.Item>
                                                <List.Item icon={<Title order={4}>💻</Title>}><b>COP4020</b> Program Language Concepts</List.Item>
                                                <List.Item icon={<IconMathIntegralX />}><b>MAD4401</b> Intro Numerical Analysis </List.Item>
                                                <List.Item icon={<IconMathIntegralX />}><b>PHY2049L</b> Lab for PHY2049 </List.Item>
                                                <List.Item><b>ARH2000</b> Art Apprec Div & Global</List.Item>
                                            </List>
                                        </Timeline.Item>

                                        <Timeline.Item title="Fall 2020" bullet={<IconCheck />}>
                                            <List>
                                                <List.Item icon={<Title order={4}>💻</Title>}><b>CEN3031</b> Intro to Software Engineering </List.Item>
                                                <List.Item icon={<Title order={4}>📊</Title>}><b>CIS4301</b> Info & Database Systems 1</List.Item>
                                                <List.Item icon={<IconMathIntegralX />}><b>MAS3114</b> Computational Linear Algebra </List.Item>
                                                <List.Item icon={<IconMathIntegralX />}><b>PHY2048L</b> Lab for PHY2048 </List.Item>
                                                <List.Item><b>CGS2531</b> Prob Solving w Computer Software</List.Item>
                                            </List>
                                        </Timeline.Item>

                                        <Timeline.Item title="Summer 2020" bullet={<IconCheck />}>
                                            <List>
                                                <List.Item icon={<Title order={4}>💻</Title>}><b>COP3530</b> Data Struc/Algorithms</List.Item>
                                                <List.Item icon={<IconMathIntegralX />}><b>PHY2049</b> Physics w Calc 2</List.Item>
                                            </List>
                                        </Timeline.Item>

                                        <Timeline.Item title="Spring 2020" bullet={<IconCheck />}>
                                            <List>
                                                <List.Item icon={<Title order={4}>💻</Title>}><b>COT3100</b> Applied Discrete Structures </List.Item>
                                                <List.Item icon={<IconMathIntegralX />}><b>MAC2313</b> Anlyt Geom & Calc 3</List.Item>
                                                <List.Item icon={<IconMathIntegralX />}><b>PHY2048</b> Physics w Calc 1</List.Item>
                                                <List.Item icon={<Title order={4}>🗣️</Title>}><b>ENC3246</b> Prof. Communication for Engineers</List.Item>
                                            </List>
                                        </Timeline.Item>

                                        <Timeline.Item title="Fall 2019" bullet={<IconCheck />}>
                                            <List>
                                                <List.Item icon={<Title order={4}>💻</Title>}><b>COP3503</b> Prog. Fundamentals 2</List.Item>
                                                <List.Item icon={<IconMathIntegralX />}><b>MAC2312</b> Anlyt Geom & Calc 2 </List.Item>
                                                <List.Item><b>CHM2045/L</b> Gen. Chem. 1 + Lab </List.Item>
                                                <List.Item><b>IDS1161</b> What is the Good Life </List.Item>
                                            </List>
                                        </Timeline.Item>


                                    </Timeline>
                                </div>
                            </div>
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>

    )
}

export default Coursework;