import classes from './ProjectDetails.module.css'

import { NavLink } from 'react-router';
import { Blockquote, Button, Group } from '@mantine/core';
import { IconArrowLeft, IconInfoCircle } from '@tabler/icons-react';
import ExternalLink from '../components/ExternalLink';

import header from '../assets/proj-imgs/parentinvolve/header.jpg';
import fig1 from '../assets/proj-imgs/parentinvolve/fig1.png';
import table1 from '../assets/proj-imgs/parentinvolve/table1.png';
import report from '../assets/proj-docs/parentinvolve/Fall_2022_USCLAP_Report.pdf';
import { useEffect } from 'react';

function ParentInvolve() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.projectContainer}>
            <div className={classes.projectDetailsContainer}>
                <NavLink to="/projects">
                    <Button
                        variant='default'
                        leftSection={<IconArrowLeft />}
                        radius="xl"
                        className={classes.backButton}
                    >
                        Back to All Projects
                    </Button>
                </NavLink>

                <h1>Analysis of Student Exam Preferences Under Various Conditions</h1>


                <img src={header} alt="header banner" width="75%" />

                <Group>
                    <ExternalLink
                        url={report}
                        iconName='pdf'
                        description='Report'
                        color="tan"
                    />
                    <ExternalLink
                        url={"https://github.com/ZackAllen1/AfterTheBell"}
                        iconName='github'
                        description='GitHub Repo'
                        color="tan"
                    />
                </Group>

                <h2>Introduction</h2>
                <p>This project stems from the American Statistical Association's "This is Statistics" Fall 2022
                    Data Challenge titled <b>After The Bell</b> which had the following prompt:</p>
                <p><em>"Imagine you are serving as a consultant to a school district. Your team has been engaged
                    to provide insights to the district on enhancing family involvement. Using the 2022 Fall
                    Data Challenge dataset, how will you advise the district?"</em></p>
                <p>This challenge was taken on as part of a semester long group project for STA3180 - Statistical
                    Modeling with groupmates: Luke Androski, Anthony Hernandez, and Finian Hanley. Although we were
                    unable to make a submission for the <b>After The Bell</b> competition, we found that our findings
                    were significant enough to submit to the <b>Undergraduate Statistics Class Project (USCLAP)</b> competition
                    at the Intermediate Level held by the Consortium for the Advancement of Undergraduate Statistics Education (CAUSE).
                </p>
                <p>The following is a general overview for how we formed our specific research question and what my approach was, as well as
                    some results and limitations. The submitted USCLAP report and full project code can be accessed using the links above.
                </p>
                <h2>Forming a Research Question</h2>
                <p>The dataset used comes from the Parent and Family Involvement in Education (PFI) survey which asks parents of
                    K-12 students about school choice and various aspects of parent involvement in their education (homework help, volunteering,
                    etc.). After some literature review from Luke, we found that there are many formal definitions for "parent involvement"
                    created by researchers, however, we decided on using Dr. Joyce Epstein's six types of parent involvement (<em>Parenting,
                        Communicating, Volunteering, Decision-Making, Learning at Home, and Collaborating with Community</em>) as they best
                    categorized the PFI survey questions. Additionally, we wanted to see if we could analyze how these types of parent
                    involvement vary across school levels, geographic locations, and demographic communities. Unfortunately, we were
                    limited to the parent reporting of their child's grades as our best available response variable (the limitations
                    of which will be discussed later), but nevertheless we were able to arrive at our formal research question fairly
                    quickly:
                </p>
                <Blockquote mt="xl" p="md" icon={<IconInfoCircle />}>
                    <ol>
                        <li>Which types of Parental Involvement have the <b>most positive impact</b> on student grades at each school level?</li>
                        <li>Are the positive Parental Involvement types <b>more or less present in certain geographic regions?</b></li>
                    </ol>
                </Blockquote>

                <h2>Exploratory Data Analysis and Methods</h2>
                <p>Almost all of the variables in our dataset were categorical and many were binary, so it made sense to use
                    categorical methods in our analysis. We started by going through each survey question and determining whether it
                    reflects one of the six types of parent involvement, and found 16 binary predictors that represent five of the parental
                    involvement types (<em>Learning at Home</em> was not considered as it had a continuous and non-binary categorical variable
                    that would disrupt interpretations). The number of "Yes" responses to each question were summed per each parental involvement
                    type and used as a final predictor (parenSum, commSum, volSum, dmSum, and collabSum). The school level of each student
                    (Elementary, Middle, or High School) were used to split the dataset and fit three separate models.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={table1} alt="" />
                </div>

                <p>Since the final five predictors and response variable are all categorical we landed on the Cumulative Logit Model to provide
                    the clearest estimations and interpretations. Thus, any coefficient estimates with significantly positive value indicate
                    that the corresponding type of parental involvement has a positive impact on student grades. Predictors with such positive
                    values were further examined across geographical location (Northeast, South, Midwest, West) and demographic community (City,
                    Suburb, Town, Rural) using chi-squared tests and their plotted residuals.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={fig1} style={{ width: "85%" }} alt="" />
                </div>
                <h2>Results and Recommendations</h2>
                <p>Ultimately, what we found was that the <em>Parenting</em> and <em>Communicating</em> types of parent involvement have
                    the greatest impact on improving student grades, with the <em>Parenting</em> type impact increasing from Elementary to High
                    School whereas <em>Communicating</em> is generally more effective in earlier years. The geographical analysis revelaed that
                    holding all other parental involvement types constant, the <em>Parenting</em> type has a significantly greater impact on students
                    in the Midwest compared to other regions. However, the chi-squared residual plots indicate that both rural and Midwest locations
                    have a significantly less amount of <em>Parenting</em> than what would be expected under independence.
                </p>
                <p>
                    Therefore, there are two primary recommendations for school districts looking to apply the results of this study:
                </p>
                <ol>
                    <li>Ensure parents are maintaining a postive outlook towards their child's education and establishing home
                        environments that allow the child to succeed by requiring schools to have consistent communication between
                        the parent and school that discuss current parent involvement and the academic status/future of the student
                    </li>
                    <li>
                        Allocate extra resources to schools within rural and Midwest locations as they are performing poor in the aforementioned
                        categories
                    </li>
                </ol>
                <h2>Limitations</h2>
                <p>
                    Some limitations of this study that could be addressed in future research include:
                </p>
                <ul>
                    <li>Student grades are used as a proxy for child success</li>
                    <ul>
                        <li>This results in estimated coefficients that contradict decades of research</li>
                    </ul>
                    <li>The distribution of student grades show an overwhelming majority of students at all school
                        levels have Mostly A's or B's, making it more difficult to observe the true impact of each parental
                        involvement type
                    </li>
                    <li>Student grades are reported by the parent instead of directly from the school which may cause inaccuracies</li>
                </ul>
                <h2>Conclusion</h2>
                <p>This project has served as a great way to utilize statistical methods on real-world data and presenting comprehensive
                    findings in a digestible manner. Working in a group has also reinforced the idea that there are many ways to approach
                    a problem and being able to collaborate with others and explore different ideas is important for making progress in
                    these data science related projects.
                </p>
            </div>
        </div>
    )
}

export default ParentInvolve;