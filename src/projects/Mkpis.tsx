import classes from './ProjectDetails.module.css'

import { NavLink } from 'react-router';
import { Button, Group } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import ExternalLink from '../components/ExternalLink';

import header from '../assets/proj-imgs/mkpis/mkpis.png';
import { useEffect } from 'react';

function Mkpis() {
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

                <h1>GitHub Productivity Tracker</h1>


                <img src={header} alt="header banner" width="75%" />

                <Group>
                    <ExternalLink
                        url={"https://github.com/ZackAllen1/mkpis"}
                        iconName='github'
                        description='GitHub Repo'
                        color="blue"
                    />
                </Group>

                <h2>Project Summary</h2>
                <p>
                    Modification of <a href="https://github.com/jmartin82/mkpis">@jmartin82's</a> Github KPI CLI. The interface calculates a variety pull request and merge time metrics
                    to measure a development team's progress on a given branch in a given date range. Significant modifications were made
                    for usage at Global Safety Management (now TotalSDS) such as: time unit conversion, exporting results to CSV, routing
                    CSV results to Power BI, and a YAML build to test token configurations. All code was written in Go and for full metric
                    definitions see the original repo from <a href="https://github.com/jmartin82/mkpis">@jmartin82</a>.
                </p>
            </div>
        </div>
    )
}

export default Mkpis;