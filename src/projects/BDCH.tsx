import classes from './ProjectDetails.module.css'

import { NavLink } from 'react-router';
import { Blockquote, Button, Group } from '@mantine/core';
import { IconArrowLeft, IconAlertTriangle } from '@tabler/icons-react';
import { MathJax } from 'better-react-mathjax';

import ExternalLink from '../components/ExternalLink';
import header from '../assets/proj-imgs/bdch/bdch.png';
import bdchSlides from '../assets/proj-docs/bdch/BDCH_Slides.pdf';
import careCompare from '../assets/proj-imgs/bdch/careCompare.png';
import careCompare2 from '../assets/proj-imgs/bdch/careCompare2.png';
import bootstrapDist from '../assets/proj-imgs/bdch/bootstrapDist.png';
import { useEffect } from 'react';

function BDCH() {
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

                <h1>Talk: Big Data Challenges in Healthcare</h1>


                <img src={header} alt="header banner" width="75%" />

                <Group>
                    <ExternalLink
                        url={bdchSlides}
                        iconName='pdf'
                        description='Presentation Slides'
                        color="#013E5B"
                    />
                </Group>

                <h2>Introduction</h2>
                <p>In the fall of 2024, I had the privilege of presenting my work to the Data Science and Informatics Club, Statistics Club,
                    and the Florida Actuarial Student Society at the University of Florida with the goal of showcasing to undergraduates some real-world big data projects.
                    This opportunity was made possible by Dr. Elizabeth Johnson and my team at Abt Global, to whom I am incredibly grateful.
                </p>
                <p>
                    During my presentation, I discussed key challenges in handling big data projects in the public sector, particularly in healthcare.
                    I then delved into a project I worked on, which involved calculating a home health quality measure — Discharge to Community — using statistical
                    modeling and distributed computing. This deep dive demonstrated how to develop intuition for building a Generalized Linear Mixed Model (GLMM),
                    starting from Simple Linear Regression and scaling the approach through bootstrapping and Databricks. I concluded with insights and advice for students
                    at UF on preparing for industry roles, drawing from my own experiences.
                </p>
                <p>This page serves as a writeup for some of the main ideas. The presentation slides can be found above!</p>

                <h2>Big Data Challenges in Healthcare</h2>
                <p>
                    Government healthcare data projects face complex challenges that span regulatory compliance, technological integration, and stakeholder
                    management. Contractors like Abt Global must navigate strict regulations such as HIPAA while dealing with the disconnect between policy
                    requirements and implementation realities. For example, when Medicare shifted to outcome-based payment models, the lack of rigorous data
                    standards left doctors struggling to submit properly formatted patient data, creating particular hardships for smaller practices.
                </p>
                <p>
                    Beyond compliance, these projects face significant interoperability hurdles with legacy systems and siloed data repositories. Success
                    depends on establishing trust with both government agencies and end users, while addressing several critical challenges:
                </p>
                <ul>
                    <li>
                        <b>Regulatory Compliance:</b> Failing to meet requirements like HIPAA can result in contract termination or legal consequences,
                        requiring significant investment in compliance teams and secure infrastructure.
                    </li>
                    <li>
                        <b>Interoperability:</b> Contractors must create specialized solutions that integrate with legacy government systems while adhering
                        to healthcare data standards like FHIR and HL7.
                    </li>
                    <li>
                        <b>Data Governance:</b> Ensuring high-quality, well-structured data is essential for reliable analytics and decision-making tools.
                    </li>
                    <li>
                        <b>Security Concerns:</b> A single cybersecurity incident can destroy trust and derail data initiatives,
                        making robust security protocols essential.
                    </li>
                    <li>
                        <b>Vendor Lock-In:</b> Limited sets of pre-approved tools and platforms can prevent teams from implementing optimal technical solutions.
                    </li>
                    <li>
                        <b>Sustainable Implementation:</b> Systems must not only be implemented successfully but designed to function effectively after contracts end,
                        ensuring long-term value for healthcare providers and patients.
                    </li>
                </ul>


                <h2>Project Deep Dive: Home Health Quality Measures</h2>
                <p>
                    Care Compare (<a href='https://www.medicare.gov/care-compare/' target='_blank'>https://www.medicare.gov/care-compare/</a>) is a website
                    which allows Medicare beneficiaries to find and compare doctors, hospitals, home health services, and more in their area. The picture below
                    shows a comparison between two Home Health Service Providers in the Gainesville, FL area.
                </p>

                <div className={classes.imgWithCaption}>
                    <img src={careCompare} className={classes.sbsImg} alt="comparing two home health services" />
                    <p><em>Fig 1: Comparing two Home Health Providers in Gainesville</em></p>
                </div>


                <p>
                    How are these ratings calculated? Well, there is a lot of research and analysis that goes into it. In the quality of patient care
                    section, there are many measures which quantify provider performance, and a subset of these are chosen and depending on how well a
                    provider does compared to others determines their star rating. In this discussion, I will focus on how one of these metrics, Discharge
                    to Community gets calculated
                </p>

                <div className={classes.imgWithCaption}>
                    <img src={careCompare2} className={classes.sbsImg} alt="comparing two home health services" />
                    <p><em>Fig 2: Discharge to Community (DTC) measure for two Home Health Providers in Gainesville</em></p>
                </div>

                <p>
                    At first this seems pretty straightforwad to calculate. For a given provider, count the number of patients that remained in community
                    after discharge from home health then divide it by the total number patients. The first nuance
                    is the true definition of DTC is a bit more complicated then what is on the website. For a given Home Health Agency (HHA),
                </p>
                <ul>
                    <li><b>DTC Numerator:</b> Number of home health stays in which patients were discharged to the community and do not have unplanned admission to a hospital
                        and remain alive within 31 days of the discharge.</li>
                    <ul>
                        <li><u>Home Health Agencies</u> provide skilled, short-term services in-home. These are typically ordered by a doctor to help with recovery
                            following an inpatient hospital stay, rehabilitation, etc.
                        </li>
                        <li><u>Stays</u> are a series of consecutive Medicare claims (bills).</li>
                        <li><u>Discharged to Community</u> means one can function without home health services.</li>
                    </ul>
                    <li><b>DTC Denominator:</b> Number of home health stays over 2-year observation period with stays removed for patients who are under 18,
                        discharged to another HHA, etc.</li>
                    <ul>
                        <li>The criteria for which to remove stays from the denominator are called <u>exclusions</u>.
                        </li>
                    </ul>
                </ul>

                <p>Okay, still not to bad, we will need some extra data transformations and some extra filters, but there is still a glaring issue with this measure.</p>

                <Blockquote color="yellow" mt="xl" p="xl" icon={<IconAlertTriangle />}>
                    Since providers are location based, they may be <b>unfairly penalized</b> by the numerator if
                    the population they serve is unhealthier, older, etc. compared to the state/national average and other providers.
                </Blockquote>

                <p>The way we can account for this issue is called <b>risk adjustment</b> and requires some statistical modeling techniques.</p>

                <h3>Generalized Linear Mixed Models (GLMMs)</h3>

                <span>
                    In this situation our response variable, <MathJax inline>{"\\(y\\)"}</MathJax>, is binary where 1 is when the beneficiary is able to Discharge
                    to Community following a home health stay (good) and 0 is when they are not (bad). If we wanted to predict the probability that a beneficaiary is
                    able to DTC based on some demographic predictors such as age, active living score, prior conditions, etc. we could imagine a simple logistic regression model
                    like
                </span>
                <h3>
                    <MathJax>
                        {`\\begin{gather*} \\ln \\left(\\frac{P}{1 - P}\\right) = \\alpha + \\beta_1 x_1 + \\beta_2 x_2 + \\beta_3 x_3 + \\ldots
                         \\end{gather*}`}
                    </MathJax>
                </h3>

                <p>However, what happens if we want to estimate the effect that a given provider (the company/agency providing the care) has on the bene's ability to DTC?
                    There are tens of thousands of these providers, and if we were to one-hot encode each provider into our simple logistic model, we would end up with something like:
                </p>

                <h3>
                    <MathJax>
                        {`\\begin{gather*} \\ln \\left(\\frac{P}{1 - P}\\right) = \\alpha + \\beta_1 x_1 + \\beta_2 x_2 + \\beta_3 x_3 + \\ldots + \\beta_{301} x_{301} + \\beta_{302} x_{302} + \\ldots + \\beta_{10300} x_{10300} + \\ldots  \\end{gather*}`}
                    </MathJax>
                </h3>

                <p>
                    where there are 300 demographic predictors and 10k+ indicator variables. There are a couple issues with this approach. The first is that we have <em>a lot</em> of
                    coefficients to estimate, and with millions of observations in our data the time complexity for fitting this model can become a problem.

                </p>
                <MathJax>
                    {`\\begin{gather*} \\text{SLR Time Complexity: } O(n \\times d \\times e)\\\\ n = \\text{number of samples}, d = \\text{number of features}, e = \\text{number of training epochs}  \\end{gather*}`}
                </MathJax>
                <p>
                    Another is that our observations are not independent of one another since the same person can appear multiple times in our dataset if they have multiple
                    home health stays. This violates the key assumption of independence in Simple Logistic Regression. Lastly, the coefficient estimates for our provider indicator
                    variables suggest that going to a specific provider would result in a fixed increase or decrease in one's ability to DTC, which in practice we know is not true
                    (there should be at least some random variation).
                </p>

                <p>
                    We can address all of these issues with GLMMs, which are defined as:
                </p>
                <h3>
                    <MathJax>
                        {`\\begin{gather*} g\(E\[y_{it} \\>|\\> \\mu_i\] \) = \\alpha + \\mu_i + \\beta_1 x_{it1} + \\beta_2 x_{it2} + \\beta_3 x_{it3} + \\ldots
                         \\end{gather*}`}
                    </MathJax>
                </h3>

                <p>
                    where
                    <ul>
                        <li><MathJax inline>{"\\(i\\)"}</MathJax> is the provider number, <MathJax inline>{"\\(t\\)"}</MathJax> is the observation number for each provider</li>
                        <li><MathJax inline>{"\\(\\mu_i\\)"}</MathJax> is a <b>Random</b> (this will be important later) Independent Variable that is normally distributed <MathJax inline>{"\\(N(0, \\sigma^2)\\)"}</MathJax></li>
                    </ul>
                </p>

                <p>A couple of interesting results of choosing this model are:
                    <ul>
                        <li><MathJax inline>{"\\(\\mu_i\\)"}</MathJax> measures the impact a given provider has on the response variable.</li>
                        <li><MathJax inline>{"\\(\\mu_i\\)"}</MathJax> is <b>not</b> based on <MathJax inline>{"\\(x\\)"}</MathJax> (our data). This means
                            we only need to estimate 1 more parameter, <MathJax inline>{"\\(\\sigma^2\\)"}</MathJax>, the variability among all providers instead of
                            tens of thousands of fixed effects.
                        </li>
                        <li>The value of our response variable is now conditional on provider (see left-land side of equation).</li>

                    </ul>
                </p>

                <h3>Implementing GLMMs</h3>
                <p>
                    One thing that I alluded to earlier is that our Random Independent Variable, <MathJax inline>{"\\(\\mu_i\\)"}</MathJax>, is well... random! Under our GLMM, our random
                    effects estimates are single point estimates for each provider on how much (or little) they contribute to a bene's ability to DTC. Judging a provider based on a single
                    random point would not be a good idea, so instead we use bootstrapping which involves:
                </p>
                <ol>
                    <li>Sampling with replacement our original dataset.</li>
                    <li>Fit a GLMM with our sampled data.</li>
                    <li>Calculate a New DTC Value for each provider based on the provider-level random effect estimates from our fitted model.</li>
                    <li>Save the results and repeat Steps 1-3 a couple hundred times.</li>
                </ol>
                <p>
                    This way, we can create a distribution of DTC estimate values for each provider, like the one shown below.
                </p>

                <div className={classes.imgWithCaption}>
                    <img src={bootstrapDist} className={classes.sbsImg} alt="distribution of bootstrapped dtc values for an example provider" />
                    <p><em>Fig 3: Example of 200 Bootstrapped DTC values for a given provider.</em></p>
                </div>

                <p>
                    We can then compare the 95% Confidence Interval of this DTC distribution against the national average to determine the relative performance of the provider:
                </p>
                <ul>
                    <li>If the national average is less than the 2.5th percentile:</li>
                    <ul>
                        <li>The provider is performing <b>worse</b> than the national average of provider DTC rates</li>
                    </ul>
                    <li>If the national average is greater than the 97.5th percentile:</li>
                    <ul>
                        <li>The provider is performing <b>better</b> than the national average of provider DTC rates</li>
                    </ul>
                    <li>If the national average is between the 2.5th and 97.5th percentile:</li>
                    <ul>
                        <li>The provider is performing <b>the same</b> as the national average of provider DTC rates</li>
                    </ul>
                </ul>

                <p>In our example above the provider would be classified as performing <b>the same</b> as the national average of provider DTC rates.</p>

            </div>
        </div>
    )
}

export default BDCH;