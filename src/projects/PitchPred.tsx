import { NavLink } from 'react-router';
import classes from './ProjectDetails.module.css'
import { Blockquote, Button, Group } from '@mantine/core';
import { IconArrowLeft, IconInfoCircle } from '@tabler/icons-react';
import ExternalLink from '../components/ExternalLink';

import astrosImg from '../assets/proj-imgs/pitchpred/astros.png';
import result1 from '../assets/proj-imgs/pitchpred/pitchPredResult1.png';
import result2 from '../assets/proj-imgs/pitchpred/pitchPredResult1.png';
import report from '../assets/proj-docs/pitchpred/PitchPredictionReport.pdf';
import slides from '../assets/proj-docs/pitchpred/PitchPredictionSlides.pdf';
import { useEffect } from 'react';


function PitchPred() {
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

                <h1>Analysis of Pitch Type Prediction Using Individualized Models</h1>


                <img src={astrosImg} alt="header banner" width="75%" />

                <Group>
                    <ExternalLink
                        url={report}
                        iconName='pdf'
                        description='Report'
                        color="orange"
                    />
                    <ExternalLink
                        url={slides}
                        iconName='presentation'
                        description='Presentation'
                        color="orange"
                    />
                    <ExternalLink
                        url={"https://github.com/ZackAllen1/pitch-prediction"}
                        iconName='github'
                        description='GitHub Repo'
                        color="orange"
                    />
                </Group>

                <h2>Introduction</h2>
                <p>In one of my final classes at UF, STA4241 - Statistical Learning, I had the opportunity to perform applied data analysis
                    on a dataset of my choosing, employing techniques learned in class. Since late 2019, when news surfaced
                    about the Houston Astros cheating during the 2017-18 seasons by stealing signs from opposing teams
                    through a coordinated video camera system, I have been captivated by the notion of replicating such a
                    scheme. Previously, I collaborated with Dawson Horn in an attempt to decode signals using Computer Vision
                    and Recurrent Neural Networks, encountering limitations due to poor video quality and restricted data.
                    However, this time, I believed I could predict upcoming pitches solely based on structured data and
                    statistical modeling techniques such as Naive Bayes, Multiple Logistic Regression, and Boosting Trees.
                    Ultimately, I was able to demonstrate how fitting models to the data associated with a specific pitcher
                    leads to promising results, as well as how utilizing the probabilities of model predictions
                    suggests that a significant number of pitch types could be relayed to hitters.
                </p>

                <p>The following is a general overview for how I approached this problem as well as the results, conclusions and limitations found.
                    The submitted written report, presentation slides, and project code can be accessed using the links above.
                </p>
                <h2>Project Objective</h2>
                <p>The objective for this project was as such:</p>
                <Blockquote mt="xl" p="md" icon={<IconInfoCircle />}>
                    <p>Develop a <b>binary classifier</b> capable of predicting whether an upcoming pitch will be a fastball or not.
                        The model aims to satisfy the following objectives:
                    </p>
                    <ol>
                        <li><b>Outperform</b> random guessing and a baseline model</li>
                        <li>Be <b>individualized</b>, that is, test models that are tailored to the data associated with specific pitchers</li>
                        <li>Utilize <b>publicly available data</b> and apply techniques acquired throughout STA4241</li>
                    </ol>
                </Blockquote>

                <h2>Data Collection</h2>
                <p>To satisfy the second objective, I collected pitch data from 2015 (when StatCast first began) through the 2023 season
                    for Justin Verlander, Zach Eflin, Clayton Kershaw, Blake Snell, and Shoehei Ohtani. Each pitcher's data was treated as a
                    separate dataset for training models, rather than using a consolidated dataset with an additional "pitcher" covariate. This
                    was done so I could have better clarity in determining if certain models work better for certain pitchers as well as identifying
                    overall model performance. To get this data I used the <a href="https://billpetti.github.io/baseballr/index.html" target="_blank" rel="noreferrer">baseballr</a> package
                    in R which scrapes data from <a href="https://baseballsavant.mlb.com/" target="_blank" rel="noreferrer">Baseball Savant</a>.
                </p>

                <h2>Feature Selection</h2>
                <p>For every pitched ball, the MLB collects 85 features that describe the pre-pitch game state, the movement of the pitch itself,
                    and the outcome of the pitch (see <a href="https://baseballsavant.mlb.com/csv-docs" target="_blank" rel="noreferrer">here</a> for all features). For the purposes
                    of this project only the pre-pitch game state features are relevant. Among these, the most pertinent are:</p>
                <ul>
                    <li>Count, the number of balls and strikes before a pitch is thrown (12 factors)</li>
                    <li>Whether a runner is on each base (3 variables, 2 factors each)</li>
                    <li>Number of outs (3 factors)</li>
                    <li>Hitters Stance (2 factors)</li>
                    <li>Current Inning</li>
                    <li>Current Year (# factors varies per pitcher)</li>
                </ul>

                <p>It is also true that upcoming pitches are rarely independent of preceding pitches, so I created three more variables to
                    address this:</p>
                <ul>
                    <li>FBStreak: number of pitches thrown since last breaking ball (per batter)</li>
                    <li>isRecentFB: indicates whether the most recent pitch was a fastball (per batter)</li>
                    <li>abNum: the number of times a batter has faced a pitcher (per game)</li>
                </ul>

                <h2>Model Selection</h2>
                <p>I will leave out the technicalities and model definitions here (you can find them <a href={report} target="_blank" rel="noreferrer">in the report</a>)
                    but the three main models tested were:
                </p>
                <ol>
                    <li>Naive Bayes</li>
                    <li>Multiple Logistic Regression</li>
                    <li>Boosting Trees with Number of Trees, Interaction Depth, Shrinkage, and Minimum Observations
                        in Node chosen via grid-search and 5-fold Cross Validation
                    </li>
                </ol>
                <p>The primary reason these models were chosen is because all three output the <b>probability</b> that a given test set pitch
                    will be a fastball or not. As shown later, this allowed me to determine how many pitches could theoretically be
                    relayed to a hitter at certain confidence thresholds.
                </p>
                <p>These three models were compared to a <b>Baseline Model</b> which simply always guesses whichever class is the most
                    common in the training set. For Clayton Kershaw, he threw 55.41% fastballs in this training set, so every prediction in the
                    test set under this model would be a fastball and the test error would be recorded. This gave me a more realistic way to evaluate
                    model effectiveness compared to random guessing (which would have ~50% error rates regardless of pitcher)</p>

                <h2>Results</h2>
                <div className={classes.sbsImgContainer}>
                    <img className={classes.mainImg} src={result1} alt="pitch prediction results" />
                </div>
                <p>With the exception of Verlander, the Boosting model resulted in the best test error rates. Additionally, some pitchers
                    like Eflin and Ohtani had all three models show a 1 to 3% test error improvement over the baseline whereas others like
                    Kershaw showed a 9 to 12% improvement. Averaging over all pitchers, Naive Bayes, MLR, and Boosting resulted in a 4.55%, 4.96%,
                    and 6.36% test error improvement respectively over the baseline. The average AUC for all five pitchers is 0.6569 which is subpar compared
                    to what is typically considered acceptable (0.70+) or good (0.80+).
                </p>
                <div className={classes.sbsImgContainer}>
                    <img className={classes.mainImg} src={result2} alt="pitch prediction results" />
                </div>
                <p>As mentioned previously, since all three models output the probability of belonging to each class, we can calculate what
                    percent of the test set could theoretically relayed to a hitter. For instance, in the table above, Verlander's Naive
                    Bayes model results in approximately 0.75 × 925 = 694 test pitches that could have been correctly relayed to a hitter using
                    a 0.75 confidence threshold. Assumming, this model could have been used against him since 2015, this would have resulted in <b>14690
                        pitches with no information relayed, 4655 pitches with correct information relayed, and 1551 pitches with incorrect
                        information relayed!
                    </b> Similar results occur across all models and pitchers.
                </p>

                <h2>Conclusion and Limitations</h2>
                <p>Strong evidence supports the notion that fitting models based on individual pitcher data is advantageous, as evidenced
                    by Clayton Kershaw’s 12% improvement over guessing the most frequently thrown pitch type using a Boosting Tree model.
                    Moreover, the study reveals the potential for relaying upcoming pitch types to a batter only when the model exhibits
                    a certain confidence level, thus providing a strategic advantage. While this approach may yield a smaller percentage
                    of correctly predicted pitches compared to the 2017 Houston Astros, the absolute number of potentially correct pitch
                    types that could be relayed is <b>not insignificant</b>, potentially leading to noticeable improvements in hitter batting
                    averages or on-base percentages.
                </p>
                <p>
                    However, the results of this analysis must be interpreted in light of certain limitations.
                    Firstly, there are missing features that would enhance the models but cannot be measured.
                    For example, the distinction between the pitcher’s intended location for a pitch and its
                    actual outcome plays a role in determining the next pitch type, but this information is not
                    recorded by the MLB. Additionally, measuring pitching coach tendencies is not feasible,
                    as they often guide pitchers and catchers on pitch selection, considering hitter weaknesses
                    and pitcher strengths.
                </p>

            </div>

        </div>
    )
}

export default PitchPred;