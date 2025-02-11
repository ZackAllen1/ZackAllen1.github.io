import { NavLink } from 'react-router';
import classes from './ProjectDetails.module.css';
import { MathJax } from 'better-react-mathjax';
import { Button, Group } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import ExternalLink from '../components/ExternalLink';

import examImg from "../assets/proj-imgs/ExamPref/exams.jpg"
import examPrefReport from '../assets/proj-docs/ExamPref/ExamPreferenceReport.pdf'
import examPrefSlides from '../assets/proj-docs/ExamPref/ExamPreferenceSlides.pdf'
import highlowCIP from "../assets/proj-imgs/exampref/highlowCIP.png"
import fosCIP from "../assets/proj-imgs/exampref/fosCIP.png"
import highlowQQ from "../assets/proj-imgs/exampref/highlowQQ.png"
import highlowHist from "../assets/proj-imgs/exampref/highlowHist.png"
import fosQQ from "../assets/proj-imgs/exampref/fosQQ.png"
import fosHist from "../assets/proj-imgs/exampref/fosHist.png"
import { useEffect } from 'react';


function ExamPref() {
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


                <img src={examImg} alt="header banner" width="75%" />

                <Group>
                    <ExternalLink
                        url={examPrefReport}
                        iconName='pdf'
                        description='Report'
                        color="red"
                    />
                    <ExternalLink
                        url={examPrefSlides}
                        iconName='presentation'
                        description='Presentation'
                        color="red"
                    />
                    <ExternalLink
                        url={"https://github.com/ZackAllen1/exam-preferences"}
                        iconName='github'
                        description='GitHub Repo'
                        color="red"
                    />
                </Group>

                <h2>Introduction</h2>
                <p>As part of the final course for my Statistics Minor, STA4211 - Design of Experiments, I undertook a data analysis project focused on an experimental or observational study. While the option to use pre-existing datasets was available, I chose to challenge myself by designing and conducting an original observational study in the form of a survey.

                    Earlier in the semester, I noticed that a take-home midterm in another course I was enrolled in, STA4241 - Statistical Learning, had a relatively low class average of 61%, despite being weighted at 40% of the final grade. This observation inspired me to investigate whether students at the University of Florida (UF) preferred such a take-home midterm format or a traditional in-person exam alternative.

                    To explore this, I developed a Qualtrics survey, collecting 51 responses over two weeks. My analysis revealed a statistically significant interaction between a student’s primary field of study and their academic standing, demonstrating these factors’ combined influence on their preferred exam format.
                </p>

                <p>The following is a detailed overview for how I approached this analysis as well as the results, conclusions and limitations found.
                    The submitted written report, presentation slides, and project code can be accessed using the links above.
                </p>
                <h2>Survey Format</h2>
                <p>The survey covered the following six questions. For the exact wording of each question, see the <b>Appendix</b> of
                    the <a href={examPrefReport} target="_blank" rel="noreferrer">report</a>. For the full dataset, see my{" "}
                    <a href="https://github.com/ZackAllen1/exam-preferences" target="_blank" rel="noreferrer">GitHub Repo</a> </p>
                <ol>
                    <li>Educational Status at UF (6 options, 1st year Undergrad through Masters/PhD)</li>
                    <li>Primary Field of Study (Computer Science, Stats/Data Science, Math, Other)</li>
                    <li>Would you prefer a course with a 1 week long take-home (open-book) midterm worth 40% of your grade [<b>Format A</b>] or
                        3 timed in-person and closed-book exams worth 75% of your grade [<b>Format B</b>].</li>
                    <li>Rate your preference over the alternative from 1 to 5 (or 0 if no preference)</li>
                    <li>Format A has a midterm average of 61% and Format B has averages 73%, 76%, and 75%. Which format do you prefer with this new information?</li>
                    <li>Re-rate using same scale as Q4.</li>
                </ol>
                <p>I specifically designed the survey in such a way that there would be multiple items to be analyzed. For instance, Educational Status
                    and Primary Field of Study can be considered main effects to the way students rate their preferences. Additionally, the exam averages for
                    each of the formats were intentionally left out until Question 5, so I could analyze how those factored in to the preference ratings.
                </p>

                <h2>Data Processing and Notation</h2>
                <p>To create slightly more balanced groups, the 6 factors for Educational Status were split into two groups, low (1st
                    to 3rd Year Undergrad) and high (4th+ Undergrad or Grad Student). Primary field of study was regrouped into 4 categories:
                    Computer Science (CS), Quantitative Sciences (SCI), Life Sciences (LI), and Other (O)</p>
                <p>We can denote the initial rating given by the student in Question 4 as <b>IR</b> and the new rating after the exam averages were
                    revealed as <b>NR</b>. Additionally, force IR and NR to be positive when Format A is selected in Q3/Q5 and negative when Format B is
                    selected in Q3/Q5. We can now define the change in preference (denoted as <b>CIP</b>) as NR &#8211; IR, which will be positive when Format A
                    becomes the preferred format or Format B becomes less preferred once exam averages are given (and vice versa for negative values).</p>


                <h2>Project Objective</h2>
                <p>The two objectives for this project were as such:</p>
                <div className={classes.bubble}>
                    <ol>
                        <li>Determine whether the <b>factor level CIP means</b> for Educational Status and Primary Field of Study
                            are statistically different from each other.</li>
                        <li>Determine whether Educational Status and Primary Field of Study <b>Main/Interaction Effects exist</b> when
                            predicting CIP values.
                        </li>
                    </ol>
                </div>

                <h2>1a. Residual Analysis for ANOVA Models</h2>
                <p>Before determining whether the factors within the Educational Status and Field of Study variables have statistically different
                    means using ANOVA I first checked if the model residuals are normally distributed and within group variances are equal. Observing
                    the plots below, it is clear that these <b>residuals are left-skewed</b> </p>

                <div className={classes.sbsImgContainer}>
                    <img className={classes.sbsImg} src={highlowQQ} alt="" />
                    <img className={classes.sbsImg} src={highlowHist} alt="" />
                </div>

                <div className={classes.sbsImgContainer}>
                    <img className={classes.sbsImg} src={fosQQ} alt="" />
                    <img className={classes.sbsImg} src={fosHist} alt="" />
                </div>

                <p>To test if group variances are equal, Bartlett's Test which has the following test statistic was used for each model: </p>

                <h3>
                    <MathJax>{"\\[\\chi_B^2 = \\frac{1}{C}\\left[(N - t) \\ln(MSE) - \\sum_{i=1}^t (n_i - 1)\\ln(s_i^2) \\right] \\]"}</MathJax>
                </h3>


                <span>where <MathJax inline>{"\\(C = 1 + \\frac{1}{3(t-1)} \\left[\\left(\\sum_{i=1}^t \\frac{1}{n_i - 1} \\right) - \\left(\\frac{1}{N-t} \\right) \\right]\\)"}</MathJax> and
                    the resulting p-value is <MathJax inline>{"\\(P(\\chi_{t-1}^2 \\geq \\chi_B^2 )\\)"}</MathJax>. </span>
                <p>For the model containing the high/low Educational Status, Bartlett's Test <MathJax inline>{"\\((H_0: \\> \\sigma_1^2 = \\sigma_2^2)\\)"}</MathJax> resulted in a test
                    statistic of 0.48342 with 1 degree of freedom and a p-value of 0.4869</p>
                <p>For the model containing the Field of Study, Bartlett's Test<MathJax inline>{"\\((H_0: \\> \\sigma_1^2 = \\ldots = \\sigma_4^2)\\)"}</MathJax> resulted in a test
                    statistic of 1.1032 with 3 degree of freedom and a p-value of 0.7763</p>
                <p>Based on these tests we can conclude that the group variances are <b>not statistically different for each factor</b>.</p>

                <h2>1b. Kruskal-Wallis Test</h2>
                <p>Since the residuals are non-normal and the group variances are not statistically different per factor, we can utilize a Kruskal-Wallis Test
                    as a non-parametric equivalent to ANOVA to determine if high/low or Field of Study group medians are equivalent. This test requires that all
                    51 observations be ranked in ascending order, assigning average ranks if ties occur. We can define <MathJax inline>{"\\(\\overline{R_{i\\bullet}}\\)"}</MathJax> as
                    the average rank of the observations in each group. The test statistic is calculated as such:
                </p>
                <h3>
                    <MathJax>
                        {"\\[\\chi_{KW}^2 = \\left[\\frac{12}{n_T (n_T + 1) \\sum_{i=1}^R \\frac{R_{i\\bullet}^2}{n_i}} \\right] - 3(n_T + 1) = \\frac{SSTR_R}{\\left[\\frac{SSTO_R}{n_T - 1} \\right]} \\]"}
                    </MathJax>
                </h3>

                <p>For CIP by high/low, the resulting test statistic is 0.28418 with 1 degree of freedom and a p-value of 0.594</p>
                <p>For CIP by Field of Study, the resulting test statistic is 2.8703 with 3 degree of freedom and a p-value of 0.4121</p>
                <p>Since both p-values are significantly greater than 0.05, we can conclude that the <b>CIP medians for high/low are approximately equal</b> and
                    the <b>CIP medians for the Field of Study groups are also approximately equal</b>. We can visually confirm these results with the plots below:
                </p>

                <div className={classes.sbsImgContainer}>
                    <img className={classes.sbsImg} src={highlowCIP} alt="" />
                    <img className={classes.sbsImg} src={fosCIP} alt="" />
                </div>

                <h2>2. Unbalanced 2-factor Study</h2>
                <p>We can now transition to the second objective, which is determining whether main/interaction effects exist for high/low and Field of Study when
                    predicting CIP. Since the factors of Field of Study are significantly unbalanced, we can define the following model:
                </p>

                <h3>
                    <MathJax>
                        {`\\begin{align*} Y_{ijk} = &\\mu_{\\bullet\\bullet} + \alpha_1 X_{ijk1} + \\beta_1 X_{ijk2} + \\beta_2 X_{ijk3} + \\beta_{3} X_{ijk,4}\\\\
                         &+ (\\alpha\\beta)_{11} X_{ijk1} X_{ijk2} + (\\alpha\\beta)_{12} X_{ijk1} X_{ijk3} + (\\alpha\\beta)_{13} X_{ijk1} X_{ijk4} + \\epsilon_{ijk} \\end{align*}`}
                    </MathJax>
                </h3>

                <p>where</p>
                <h3>
                    <MathJax>
                        {`
                    \\begin{align*}
                    \\small
                        X_1 = \\begin{cases} 
                        1 & \\text{low in high/low} \\\\
                        -1 & \\text{high in high/low}
                    \\end{cases}
                    &&
                    \\small
                    X_2 = \\begin{cases} 
                        1 & \\text{LI in FoS} \\\\
                        -1 & \\text{CS in FoS} \\\\
                        0 & \\text{otherwise}
                    \\end{cases}
                    &&
                    \\small
                    X_3 = \\begin{cases} 
                        1 & \\text{O in FoS} \\\\
                        -1 & \\text{CS in FoS} \\\\
                        0 & \\text{otherwise}
                    \\end{cases}
                    &&
                    \\small
                    X_4 = \\begin{cases} 
                        1 & \\text{SCI in FoS} \\\\
                        -1 & \\text{CS in FoS} \\\\
                        0 & \\text{otherwise}
                    \\end{cases}
                    \\end{align*}
                    
                    `}
                    </MathJax>
                </h3>

                <span>and <MathJax inline>{"\\(\\sum \\alpha_i = \\sum \\beta_j = \\sum_i (\\alpha\\beta)_{ij} = \\sum_j (\\alpha\\beta)_{ij} = 0\\)"}</MathJax> </span>

                <p>From this full model, we can create three additional reduced models, where each one removes either a main effect or the interaction term.
                    Thus, we are left with the following four models: </p>
                <ol>
                    <li><u>Model 1</u>: Contains high/low, Field of Study, and Interaction Effects</li>
                    <li><u>Model 2</u>: Contains high/low, Field of Study Effects (Removes Interaction)</li>
                    <li><u>Model 3</u>: Contains Field of Study, Interaction Effects (Removes high/low)</li>
                    <li><u>Model 4</u>: Contains Field of Study, Interaction Effects (Removes Field of Study)</li>
                </ol>
                <p>Comparing Models 2, 3, and 4 to Model 1 using an F-test allows us to determine if main or interaction effects exist. We can define each test as such:</p>

                <ul>
                    <li>Test <MathJax inline>{"\\(H_0: \\text{ Interaction Effect } = 0\\)"}</MathJax></li>
                    <ul><li>Model 1 <MathJax inline>{"\\(\\rightarrow\\)"}</MathJax> Full, Model 2  <MathJax inline>{"\\(\\rightarrow\\)"}</MathJax> Reduced</li></ul>
                    <li>Test <MathJax inline>{"\\(H_0: \\alpha_1 = \\alpha_2 = 0\\)"}</MathJax></li>
                    <ul><li>Model 1 <MathJax inline>{"\\(\\rightarrow\\)"}</MathJax> Full, Model 3  <MathJax inline>{"\\(\\rightarrow\\)"}</MathJax> Reduced</li></ul>
                    <li>Test <MathJax inline>{"\\(H_0: \\beta_1 = \\ldots = \\beta_4 = 0\\)"}</MathJax></li>
                    <ul><li>Model 1 <MathJax inline>{"\\(\\rightarrow\\)"}</MathJax> Full, Model 4  <MathJax inline>{"\\(\\rightarrow\\)"}</MathJax> Reduced</li></ul>
                </ul>

                <p>All of which use the following test statistic and rejection region</p>
                <MathJax>
                    {`
                            \\begin{align*}
                                        F^* = \\frac{\\left[\\frac{SSE(R) - SSE(F)}{df_E(R) - df_E(F)} \\right]}{SSE(F) / df_E(F)} && RR: F^* \\geq F(1-\\alpha,df_E(R) - df_E(F), df_E(F))
                            \\end{align*}
                        `}
                </MathJax>


                <p>The results of these tests are as such:</p>
                <ul>
                    <li>Test <MathJax inline>{`\\(H_0: \\text{ Interaction Effect } = 0\\)`}</MathJax></li>
                    <ul><li><MathJax inline>{`\\(F^* = 3.7013, F(0.95, 3, 46) = 2.807, \\textbf{Reject Null}\\)`}</MathJax></li></ul>
                    <li>Test <MathJax inline>{`\\(H_0: \\alpha_1 = \\alpha_2 = 0\\)`}</MathJax></li>
                    <ul><li><MathJax inline>{`\\(F^* = 0.0735, F(0.95, 1, 46) = 4.052, \\textbf{Confirm Null}\\)`}</MathJax></li></ul>
                    <li>Test <MathJax inline>{`\\(H_0: \\beta_1 = \\ldots = \\beta_4 = 0\\)`}</MathJax></li>
                    <ul><li><MathJax inline>{`\\(F^* = 1.9020, F(0.95, 3, 46) = 2.807, \\textbf{Confirm Null}\\)`}</MathJax></li></ul>
                </ul>

                <h2>Conclusion and Limitations</h2>
                <p>From the result above, we can conclude that <b>interaction effects between education status
                    and primary field of study exist</b>, whereas both main effects do not. We also concluded
                    previously that the <b>group medians within each factor are not statistically different from
                        each other</b>.</p>
                <p>
                    There do exist some limitations of this analysis. For example, the midterm averages shown
                    in the survey were fixed. It could be possible that if different reported averages were shown
                    to the respondents that different responses would have occurred. However, there were not
                    enough subjects to test the plausibility of this claim. Additionally, not collecting whether
                    the student has experienced either exam format in the past may also impact results. Lastly,
                    since respondents chose if they wanted to be as part of the sample this lead to volunteer
                    bias, and as a result the conclusions drawn from this sample may not be representative of
                    the entire population.
                </p>

            </div>

        </div>
    )
}

export default ExamPref;