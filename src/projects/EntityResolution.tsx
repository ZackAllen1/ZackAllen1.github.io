import { NavLink } from 'react-router';
import classes from './ProjectDetails.module.css'
import { Button, Group, Table, TableData } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import ExternalLink from '../components/ExternalLink';
import { MathJax } from 'better-react-mathjax';

import entityResolutionReport from '../assets/proj-docs/entityResolution/Final_Project_Group_212.pdf'
import header from '../assets/proj-imgs/entityResolution/entityResolutionLogo.png';
import { useEffect } from 'react';


function EntityResolution() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tableData: TableData = {
        caption: 'Example of duplicated record with added alterations. Row 1 is the original record whereas Rows 2-4 are duplicates with various alterations shown in bold.',
        head: ['ID', 'FIRST_C', 'LAST_C', 'ADDRESS_LINE_1', 'ADDRESS_CITY', 'BIRTHDATE'],
        body: [
            [
                '40632',
                'Lonzo',
                'Lockman',
                '219 ELVERA RDG',
                'SOUTH HADLEY',
                '1955-03-20',
            ],
            [
                '40632',
                [<b>Lonoz</b>],
                [<b>None</b>],
                [<b>4836 Nicholson Cape</b>],
                [<b>None</b>],
                '1955-03-20',
            ],
            [
                '40632',
                [<b>Lnozo</b>],
                [<b>Bowman</b>],
                '219 ELVERA RDG',
                'SOUTH HADLEY',
                [<b>1955-04-20</b>],
            ],
            [
                '40632',
                [<b>Lonoz</b>],
                'Lockman',
                '219 ELVERA RDG',
                [<b>SOUTH HbADLEY</b>],
                '1955-03-20',
            ],
        ],
    };

    const tableData2: TableData = {
        caption: 'Similarity Formula Weighting for Agglomerative Clustering Method',
        head: ['Field', 'Weight', 'Similarity Metric'],
        body: [
            [[<span className={classes.codeText}>BIRTHDATE</span>], '20%', 'Normalized Indel Similarity'],
            [[<span className={classes.codeText}>FIRST_C</span>], '15%', 'Normalized Indel Similarity'],
            [[<span className={classes.codeText}>FIRST_C_PHON</span>], '2.5%', 'Normalized Indel Similarity of Double Metaphone'],
            [[<span className={classes.codeText}>LAST_C</span>], '15%', 'Normalized Indel Similarity'],
            [[<span className={classes.codeText}>LAST_C_PHON</span>], '2.5%', 'Normalized Indel Similarity of Double Metaphone'],
            [[<span className={classes.codeText}>ADDRESS_LINE_1</span>], '20%', 'Normalized Indel Similarity'],
            [[<span className={classes.codeText}>ADDRESS_LINE_2</span>], '10%', 'Normalized Indel Similarity'],
            [[<span className={classes.codeText}>ADDRESS_CITY</span>], '5%', 'Normalized Indel Similarity'],
            [[<span className={classes.codeText}>ADDRESS_ZIP</span>], '5%', 'Normalized Indel Similarity'],
            [[<span className={classes.codeText}>ADDRESS_GENDER</span>], '5%', 'Normalized Indel Similarity'],
        ],
    };

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

                <h1>Evaluating Entity Resolution Methods on Synthetic Patient Records</h1>


                <img src={header} alt="header banner" width="75%" />

                <Group>
                    <ExternalLink
                        url={entityResolutionReport}
                        iconName='pdf'
                        description='View Project Report'
                        color="#5b5b73"
                    />
                </Group>

                <h2>Overview</h2>
                <p>
                    As part of the Online Masters in Analytics at Georgia Tech, I completed ISYE 6740 - Computational Data Analytics (CDA). A key component of this course was a project
                    on a topic of our choosing that involved evaluating different statistical modeling approaches. At the time, Entity Resolution was a core aspect of one of the projects
                    I was completing at Abt Global for the Center for Medicare and Medicaid Services (CMS). For the CDA project, I decided to expore Entity Resolution more in-depth, evaluting
                    three Entity Resolution methodologies (Simple String Comparison, Agglomerative Clustering, and Fellegi-Sunter Model) of increasing complexity on their ability to cluster/de-duplicate
                    150,000+ synthetic patient records from a subset of the SyntheticMass dataset.
                </p>
                <p>
                    The problem statement, data source, and methodology sections from the final report are copied below. The full report including the results section can be found using the link above.
                </p>

                <h2>Problem Statement</h2>
                <p>
                    Entity resolution, also known as record linkage or deduplication, is a critical challenge in
                    healthcare data management as patient records are frequently duplicated across and within healthcare
                    systems. For instance, a patient who visits a hospital multiple times over many years may have
                    multiple records in a database corresponding to each visit. It is common and reasonable for these
                    records to contain changes in key identifiers such as address, name, marital status, etc. or typos
                    due to data entry errors. In an ideal case, a unique identifier would be used to track individuals
                    whose information appears multiple times, however, in practice implementing such an identifier can
                    be difficult.
                </p>
                <p>
                    As an example, the Center for Medicare and Medicaid Services (CMS) maintains the Transformed
                    Medicaid Statistical Information System (T-MSIS), a comprehensive national database to collect
                    detailed data on beneficiaries, enrollment services, and payments for the Medicaid and Children’s
                    Health Insurance Program (CHIP) from all U.S. states and territories. In the T-MSIS, MSIS
                    identification numbers (and/or SSNs) are used to represent individuals with distinct demographic and
                    eligibility information over time. A major challenge CMS has identified with making the MSIS
                    IDs consistent is that different states have different procedures for assigning them, especially for
                    newborns whose mothers are eligible for Medicaid or pregnancy-related benefits. This can result in
                    the same individual appearing in a dataset multiple times without a consistent identifier between
                    records.
                </p>
                <p>
                    This project attempts to evaluate multiple entity resolution approaches on synthetic patient data
                    in an effort to tackle challenges similar to what CMS is facing. Each approach will be evaluated
                    on their ability to identify duplicate patient records using a series of quantitative metrics such as
                    precision, recall, and f1-score.
                </p>

                <h2>Data Source</h2>
                <p>
                    This project utilizes the SyntheticMass dataset (2017 version), a comprehensive collection of
                    synthetic patient records developed by the MITRE Corporation as part of the Synthea project [2].
                    SyntheticMass was specifically designed to simulate realistic patient populations while containing
                    no actual Personally Identifiable Information (PII).
                </p>
                <p>
                    The SyntheticMass 2017 dataset contains over one million unique synthetic patient records from
                    Massachusetts. Each record includes both demographic and administrative information that can
                    be utilized for entity resolution tasks, the ones used for this project are listed below:
                </p>
                <ul>
                    <li>Names: First name and Last name</li>
                    <li>Demographic: Date of Birth and Gender</li>
                    <li>Geographic: Street Address, City, State, and ZIP Code</li>
                    <li>Admin: ID (unique string)</li>
                </ul>

                <p>
                    For quicker analysis, a subset of 50,000 records were used from the SyntheticMass dataset. Since
                    each record is unique, 80% of records were duplicated 1 to 5 times (chosen randomly) with each
                    duplication being partially altered to replicate data quality issues such as typos, address changes,
                    and missing values. Appendix A.1 contains the full procedure for duplication which resulted in a
                    total of 169,628 records. The table below shows an example where the first record (original) was
                    duplicated 3 additional times with partial changes to key fields (shown in bold). Note that in the
                    resulting dataset records with the same ID value correspond to the same individual. The objective
                    of the models will be to cluster records that correspond to the same individual regardless of data
                    quality issues.
                </p>

                <div>
                    <Table highlightOnHover withTableBorder withColumnBorders data={tableData} />
                </div>

                <h2>Methodology</h2>
                <p>
                    This project will implement and evaluate the following three entity resolution approaches of
                    increasing complexity. However, to reduce the overall number of comparisons between records, all
                    three methods will incorporate blocking.
                </p>

                <h3>Blocking</h3>
                <p>
                    In a <em>brute-force entity resolution methodology</em>, one would compare a given record in a dataset to
                    every other record with calculations to determine whether the two records represent the same
                    entity. However, the number of comparisons required with this approach scales quadratically <MathJax inline>{"\\((O(n^2))\\)"}</MathJax> with
                    the size of the dataset, causing this method to be computationally infeasible for large datasets.
                </p>

                <p>
                    A common approach to improve the brute-force method is by using a <em>blocking method</em>, where, rather
                    than comparing each record to every other record, each record is placed into a block (group) based
                    on one or more shared fields. Then, for each block, compare each record to every other record
                    within the same block. Since a record can only be within one block, this significantly reduces the
                    total number of comparisons required.
                </p>

                <p>
                    As an example, consider a dataset containing eight records, R1 through R8. In the brute-force
                    method, comparing each record to every other record results in <MathJax inline>{"\\({8 \\choose 2} = 28 \\)"}</MathJax> comparisons. In the
                    blocking method, R1 through R8 are grouped depending on which state they belong to, then only
                    records within the same state are compared against each other. This results in  <MathJax inline>{"\\({2\\choose 2} + {3\\choose 2} + {2\\choose 2} = 7 \\)"}</MathJax> total comparisons.
                </p>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={header} style={{ width: "65%" }} alt="" />
                </div>

                <p>
                    In general, it can be shown that a blocking method with <MathJax inline>{"\\(G\\)"}</MathJax> groups, each of size <MathJax inline>{"\\(g_i\\)"}</MathJax>, compared to a
                    brute-force method with <MathJax inline>{"\\(N\\)"}</MathJax> records such that <MathJax inline>{"\\(\\sum_i g_i = N\\)"}</MathJax> will be
                </p>

                <h3>
                    <MathJax>{"\\[ \\sum_{i=1}^G {g_i \\choose 2} \\leq {N \\choose 2}  \\]"}</MathJax>
                </h3>

                <p>
                    The key disadvantage with the blocking method is that if a record is misplaced into the incorrect
                    block due to a typo or other error with the blocking fields, it will not be compared to records in
                    its intended, actual block. For the purposes of this project, the <span className={classes.codeText}>BIRTHPLACE</span> and <span className={classes.codeText}>GENDER</span> fields are
                    assumed to be accurate across the dataset and will be used for blocking purposes.
                </p>

                <h3>1. Simple String Comparison</h3>

                <p>
                    The baseline approach for entity resolution will be a simple string comparison. That is, all target
                    fields for each record (first name, last name, gender, street address, etc.) will be concatenated
                    into a single string. Then, each record string within the same block will be compared against one
                    another using the Normalized Indel Similarity [3]. Records whose similarity scores are above a
                    certain threshold will be considered the same individual and assigned the same entity identifier
                    (Cluster ID).
                </p>

                <h3>
                    <MathJax>{"\\[ \\text{Normalized Indel Similarity}(s_1, s_2) = 1 - \\frac{\\text{Levenshtein Distance}}{\\max(\\text{len}(s_1), \\text{len}(s_2))}  \\]"}</MathJax>
                </h3>

                <h3>2. Custom Similarity Formula with Agglomerative Clustering</h3>

                <p>
                    This approach computes pairwise similarity scores between records using a weighted combination
                    of field-specific similarity measures, then applies hierarchal clustering on the distance matrix for
                    each block. The table below shows each of the fields, metrics, and weights used in the similarity
                    formula. The result of comparing two records within the same block will be a weighted score
                    between 0 and 1 (inclusive) representing the similarity. The process of creating the score will
                    inherently incorporate more information compared to the Simple String Comparison approach.
                </p>

                <p>
                    After comparing each record to every other record in a given block with this approach, each block
                    will have its own symmetric similarity matrix <MathJax inline>{"\\(S\\)"}</MathJax>. The corresponding distance matrix <MathJax inline>{"\\(D = 1-S\\)"}</MathJax> will
                    be passed to an Agglomerative (hierarchical) Clustering model to assign each record a final Cluster
                    ID. Agglomerative Clustering works by treating each record as its own cluster then iteratively
                    merging the most similar clusters until a stopping criterion (<span className={classes.codeText}>distance_threshold</span> hyperparameter)
                    is reached or all records combine into a single cluster [4].
                </p>

                <div>
                    <Table highlightOnHover withTableBorder withColumnBorders data={tableData2} />
                </div>

                <h3>3. Splink with Fellegi-Sunter Model</h3>

                <p>
                    The final approach leverages Splink, a Python framework package designed for fast, accurate, and
                    scalable probabilistic entity resolution [5]. The Splink package implements the Fellegi-Sunter model
                    which utilizes discrete similarity levels (also called Comparison Levels) for each field unlike Method
                    2 which uses continuous similarity scores per-field. For example, when comparing two records based
                    on their Street Address field, their similarity will fall into one of the following buckets:
                </p>

                <ul>
                    <li>Exact Match</li>
                    <li>Jaro-Winkler Similarity <MathJax inline>{"\\(\\geq\\)"}</MathJax> 0.9</li>
                    <li>Jaro-Winkler Similarity <MathJax inline>{"\\(\\geq\\)"}</MathJax> 0.8</li>
                    <li>Jaro-Winkler Similarity <MathJax inline>{"\\(\\geq\\)"}</MathJax> 0.7</li>
                    <li>Jaro-Winkler Similarity <MathJax inline>{"\\(<\\)"}</MathJax> 0.7</li>
                </ul>

                <p>
                    The full list of discrete similarity levels is shown as SQL rules in Appendix A.2. Using discrete
                    levels results in a different process for computing the overall similarity (a continuous value between
                    0 and 1) for two records. The high-level overview of this computation is as such:
                </p>

                <p>
                    Start with a prior, the probability that represents the belief that the two records being compared
                    are a match <em>before</em> utilizing any record data. In this case, this is the probability that any two
                    records which are drawn at random are a match. This value is referred to as <MathJax inline>{"\\(\\lambda\\)"}</MathJax> and is the initial
                    baseline value for the match probability between two records. For large datasets, <MathJax inline>{"\\(\\lambda\\)"}</MathJax> is typically very
                    small.
                </p>

                <p>
                    Next, compare the two records, and for each field being compared one-by-one add or subtract to
                    the original match probability depending on what the discrete Comparison Level is between the two fields (e.g Exact Match, JW-Similarity <MathJax inline>{"\\(\\geq\\)"}</MathJax> 0.9, JW-Similarity <MathJax inline>{"\\(\\geq\\)"}</MathJax> 0.8, etc.). The amount that
                    gets added or subtracted are called partial match weights and are parameters that get estimated
                    by the Fellegi-Sunter model. The sum of the prior (converted to match weight scale) and all partial
                    match weights creates a final match weight, Mobs, between the two records
                </p>

                <h3>
                    <MathJax>
                        {`\\begin{align*} M_{prior} &= \\log\\left(\\frac{\\lambda}{1 - \\lambda} \\right)   \\\\
                         M_{obs} &= M_{prior} + M_{fname} + M_{lname} + M_{street} + M_{city} + \\ldots \\end{align*}`}
                    </MathJax>
                </h3>

                <p>
                    The final match weight <MathJax inline>{"\\(M_{obs}\\)"}</MathJax> can be converted into the final match probability, <MathJax inline>{"\\(p_{obs}\\)"}</MathJax>, using
                </p>

                <h3>
                    <MathJax>
                        {"\\[ p_{obs} = \\frac{2^{M_{obs}}}{1 + 2^{M_{obs}}}  \\]"}
                    </MathJax>
                </h3>

                <p>
                    Similar to Method 1 and Method 2, <MathJax inline>{"\\(p_{obs}\\)"}</MathJax> represents the probability that the two records being
                    compared represent the same individual and should be assigned the same Cluster ID. Lastly, rather
                    than using a separate clustering model to assign the final Cluster IDs like Method 2, Splink represents the resulting
                    similarity matrix for a given block as a graph (where nodes represent records
                    and edges represent the similarity between two records) and uses a simple pruning threshold to
                    where only edges at or above the threshold are considered valid. Any edges below the threshold
                    get removed and each remaining connected subgraph is considered a final clustering group.
                </p>

                <h2>Evaluation and Final Results</h2>

                <p>See full project report linked at the top of the page!</p>


            </div>

        </div>
    )
}

export default EntityResolution;