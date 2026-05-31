import { NavLink } from 'react-router';
import classes from './ProjectDetails.module.css'
import { Button, Group } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import ExternalLink from '../components/ExternalLink';

import superCDMSReport from '../assets/proj-docs/superCDMS/Project Report CS7643 Spring 2026.pdf'
import header from '../assets/proj-imgs/superCDMS/superCDMSLogo.png';
import { useEffect } from 'react';


function SuperCDMS() {
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

                <h1>Machine Learning Techniques and Architectures on a Noisy SuperCDMS Detector Dataset</h1>


                <img src={header} alt="header banner" width="75%" />

                <Group>
                    <ExternalLink
                        url={"https://github.com/ZackAllen1/FAIR-UMN-CDMS/tree/merged"}
                        iconName='github'
                        description='GitHub Repo'
                        color="darkred"
                    />
                    <ExternalLink
                        url={superCDMSReport}
                        iconName='pdf'
                        description='Project Report'
                        color="darkred"
                    />
                </Group>

                <h2>Overview</h2>
                <p>
                    As part of the Online Masters in Analytics at Georgia Tech, I completed CSE 7643 - Deep Learning. A key component of this course was a group project
                    on a topic of our choosing that involved evaluating different deep learning approaches. A couple years ago, a friend of mine from MIT showed me one
                    of his undergraduate physics projects. While the actual physics and science behind the experiment was above my pay grade, the machine learning components
                    seemed fairly approachable. Fast forward to Spring 2026 where I have run dry on school data project ideas, I figured now would be a good time to try and tackle it, so
                    I recruited two fellow classmates Robert St. Clair and Utsab Mitra to try and apply what we have learned in CSE 7643 to the data from the SuperCDMS experiment.
                </p>
                <p>
                    The Abstract from the final report has been copied below. The final report in its entirety can be accessed using the link above.
                </p>

                <h2>Abstract</h2>
                <p>
                    <em>
                        The Super Cryogenic Dark Matter Search (SuperCDMS) experiment utilizes
                        ultra-cold germanium and silicon particle detectors operating at ~30 mK to
                        detect quantized vibrations, or phonons, caused by dark matter interactions. Accurately reconstructing the 3D positions of these interactions is essential for
                        distinguishing potential signals from background noise. The positions are inferred
                        from phonon pulse shapes across multiple detector channels which is
                        inherently noisy, sparse, and poorly understood from first principles due to
                        complex phonon and charge transport physics. Accurately reconstructing the interaction locations of
                        Weakly Interacting Massive Particles (WIMPs) which are
                        candidate dark matter particles in SuperCDMS germanium
                        detectors is essential for separating signal events from
                        background noise. This task is complicated by noisy pulse
                        signals and limited labeled data. Prior benchmark work by
                        the FAIR research group at the University of Minnesota establishes
                        a performance baseline using simple deep neural
                        networks with two-hidden layers, achieving a held-out subset
                        (HOS) RMSE of 1.741 mm on 7,151 interactions across
                        13 different locations on the detector along a radial path.
                        We investigate more sophisticated architectures and training
                        strategies to improve on this baseline, including a convolutional
                        neural network and an attention-based sequential
                        model. We augment data by adding noise profiles to
                        expand the dataset approximately three-fold and evaluate
                        its per-class RMSE in a series of experiments with simpler
                        models. The CNN architecture is an implementation of a
                        two-branch model that separates per-detector pulse shape
                        from spatial arrival patterns across detectors into dedicated
                        processing streams with a shared convolutional encoder
                        across five detector channels. We implement a multi-head
                        attention encoder model with modified softmax functions
                        that learn thermodynamic inspired parameters.
                    </em>
                </p>
                <p>
                    <em>
                        The CNN yields a HOS RMSE of 1.611 mm, a 7.4% improvement
                        over the benchmark, while the thermal attention
                        model ties the HOS error and reduces the RMSE to 0.4621
                        mm when a 80/20% holdout split is used. Across all methods, our findings suggest that architectural choices can be
                        more effective than scaling model depth.
                    </em>
                </p>

            </div>

        </div>
    )
}

export default SuperCDMS;