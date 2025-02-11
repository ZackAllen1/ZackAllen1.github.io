import { NavLink } from 'react-router';
import classes from './ProjectDetails.module.css'
import { Button, Group, Image } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import ExternalLink from '../components/ExternalLink';

import autoBus from '../assets/proj-imgs/transit/autobus.bmp';
import busLoop from '../assets/proj-imgs/transit/busloop.gif';
import header from '../assets/proj-imgs/transit/bus.png';
import { useEffect } from 'react';


function Transit() {
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

                <h1>Rapid Transit Simulator</h1>


                <img src={header} alt="header banner" width="100%" />

                <Group>
                    <ExternalLink
                        url={"https://haroonsyed.github.io/BusSimulator/"}
                        iconName='laptop'
                        description='Live Demo'
                        color="blue"
                    />
                    <ExternalLink
                        url={"https://www.youtube.com/watch?v=TunntaLqkg8"}
                        iconName='video'
                        description='Video Tutorial/Showcase'
                        color="blue"
                    />
                    <ExternalLink
                        url={"https://github.com/ZackAllen1/BusSimulator"}
                        iconName='github'
                        description='GitHub Repo'
                        color="blue"
                    />
                </Group>

                <h2>Project Summary</h2>
                <p>
                    As a final project in COP3530 - Data Structures and Algorithms, our group consisting of Haroon Syed, James "Dawson" Horn, and myself
                    were tasked to create an application that utilizes at least two data structures or algorithms and can handle at least 10,000
                    data points. At the time I was particularly interested in transportation and the self driving autobus that would
                    move past my dorm everyday (see below). This spawned the idea for a GUI simulator that could emulate an entire fleet of these
                    buses and handle real-time ride requests across a network of different stations much like <a href="https://www.youtube.com/watch?v=iaSaWfw07Sw" target="_blank" rel="noreferrer">this system from WVU</a>.
                </p>
                <div style={{ width: 500, marginLeft: 'auto', marginRight: 'auto' }}>
                    <Image
                        radius="md"
                        src={autoBus}
                        alt="Gainesville RTS Autobus"
                    />
                </div>
                <h2>Implementation</h2>
                <p>
                    We had the option to use any programming language for this final project, however, we thought it would be easiest for others
                    to try out if our GUI was hosted on a website so we used the tried and true vanilla HTML, CSS, and JavaScript.
                    In hindsight, it would have been 10 times more efficient to use a JavaScript framework (or even just TypeScript) or Python game library,
                    but nevertheless it was definitely a learning experience since a majority
                    of the work came from manually creating and animating svg's, managing type safety, and handling JS's single-threadedness.
                </p>
                <p>
                    The backend used A* and Dijkstra's pathfinding algorithms where the pixel distance between stations were used as edge lengths.
                    Dawson created a custom scoring function and Minimum Priority Queue to determine which bus would fulfill a new ride request
                    at any given moment and Haroon implemented a way to generate adjacency lists for very large and random graphs so we could
                    simulate requests at such a scale. I handled all of the front-end or anything you can see or interact with as well as assisting
                    Dawson and Haroon throughout the development process in connecting all of our pieces into one place.
                </p>
                <p>
                    I would highly recommended watching the <a href="https://www.youtube.com/watch?v=TunntaLqkg8" target="_blank" rel="noreferrer">
                        5 minute YouTube Tutorial/Demo</a> of this project to observe the amount of functionality that was implemented in less than
                    two and a half weeks or try the demo for yourself.
                </p>
                <h2>Conclusion</h2>
                <p>
                    Every team's project was put up for a class vote for which is the best in its respective category (GUI or CLI). Our's placed
                    2nd in the GUI category, but regardless of the placement this project was a great learning experience and the first time I
                    completed a project from start to finish with a team. Being able to scope out and execute on an idea in a short amount of time
                    as well as being able to coordinate with teammates are two skills I most certainly took away from this journey.
                </p>
                <div style={{ width: 500, marginLeft: 'auto', marginRight: 'auto', marginBottom: 10 }}>
                    <Image
                        radius="md"
                        src={busLoop}
                        alt="Bus project demo gif"
                    />
                </div>

            </div>

        </div>
    )
}

export default Transit;