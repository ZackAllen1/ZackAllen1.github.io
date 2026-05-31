import classes from './ProjectDetails.module.css'

import { NavLink } from 'react-router';
import { Button, Group, Table, TableData } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

import ExternalLink from '../components/ExternalLink';
import header from '../assets/proj-imgs/balatro/balatro.jpg';
import balatroReport from '../assets/proj-docs/balatro/balatro_report.pdf';
import resultsChart from '../assets/proj-imgs/balatro/results_chart.png';
import { useEffect } from 'react';

function Balatro() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tableData: TableData = {
        caption: 'Game Difficulty Settings (each strategy tested 500 times per difficulty',
        head: ['Difficulty', 'Hands Per Blind', 'Discards Per Blind', 'Blind Levels (3 per Ante)'],
        body: [
            [
                'Easy',
                [<div className={classes.tableCenter}>5</div>],
                [<div className={classes.tableCenter}>4</div>],
                ['Ante 1: 300, 450, 600', <br />, 'Ante 2: 800, 1200, 1600', <br />, 'Ante 3: 2000, 3000, 4000']
            ],
            [
                'Medium',
                [<div className={classes.tableCenter}>4</div>],
                [<div className={classes.tableCenter}>5</div>],
                ['Ante 1: 300, 450, 600', <br />, 'Ante 2: 900, 1350, 1800', <br />, 'Ante 3: 2600, 3900, 5200']
            ],
            [
                'Hard',
                [<div className={classes.tableCenter}>4</div>],
                [<div className={classes.tableCenter}>4</div>],
                ['Ante 1: 300, 450, 600', <br />, 'Ante 2: 1000, 1500, 2000', <br />, 'Ante 3: 3200, 4800, 6400']
            ],
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

                <h1>Balatro Starting Strategy Analysis with SimPy</h1>

                <div className={classes.projectHeaderImage}>
                    <img src={header} alt="header banner" width="75%" />
                </div>


                <Group>
                    <ExternalLink
                        url={balatroReport}
                        iconName='pdf'
                        description='Project Report'
                        color="#000000"
                    />
                    <ExternalLink
                        url={"https://github.com/ZackAllen1/balatro-sim"}
                        iconName='github'
                        description='GitHub Repo'
                        color="#000000"
                    />
                </Group>

                <h2>Introduction</h2>
                <p>
                    As part of the Online Master of Science in Analytics at Georgia Tech I had the pleasure of taking Simulation and Modeling for
                    Engineering and Science. This course covered the modeling of discrete-event dynamic systems and introduced simulation-based methods for
                    using these models. In this course, we were able to apply our knowledge to a project from a list of 30 different project topics spanning
                    theory, application, language, and game-based problems. The problem that stood out to me immediately was simulating the game of Balatro.
                </p>
                <p>
                    Balatro is a deck-building roguelite video game where you must play poker hands to earn chips and defeat increasingly difficult enemy blinds.
                    I have enjoyed putting many hours into this game as it has seemingly endless ways to play it, but don't just take my word for it, Balatro won
                    Best Debut Indie Game, Best Independent Game, and Best Mobile Game at the 2024 Game Awards. This project attempts to simulate a simplified
                    version of Balatro, specifically testing out which starting strategies can progress you furthest into the game before losing. Since there are
                    hundreds of special cards with different interactions that I couldn't implement due to time constraints most runs in the simulation end early.
                    However, by determining the best early-game strategies, this can inform a player's decision making on how to survive long enough to find
                    powerful synergies in the shop.
                </p>
                <p>
                    This page serves as a short written summary of this project. The full project report and source code can be found using the links above.
                </p>

                <h2>Game Strategy Definitions</h2>
                <p>
                    The eight early-game strategies are being tested are listed below:
                </p>
                <ul>
                    <li>
                        <b>High Card Focus:</b> Always play the five highest cards based on rank.
                    </li>
                    <li>
                        <b>Pair Hunter:</b> Check if current hand has pair or better, if so play it plus best remaining cards. If not,
                        discard cards that don't contribute to pairs.
                    </li>
                    <li>
                        <b>Conservative:</b> Only play if five highest cards has a pair or better. Otherwise discard 3 lowest cards.
                    </li>
                    <li>
                        <b>Aggressive:</b> Almost always play five highest cards unless hand is poor and plenty of discards remain.
                    </li>
                    <li>
                        <b>Flush Chaser:</b> Always aim to build flushes. Discard decisions are dependent on the suits in current hand and in the remaining deck.
                    </li>
                    <li>
                        <b>Straight Chaser:</b> Always aim to build straights. Discard decisions are dependent on which straight is most likely in
                        current hand and the ranks in the remaining deck.
                    </li>
                    <li>
                        <b>High Value:</b> If there are 3+ high cards (10, J, Q, K, A) in hand, discard until at least 5 high cards are in hand then play.
                        Otherwise, play five highest cards available.
                    </li>
                    <li>
                        <b>Balanced:</b> If five best cards are strong (straight, flush, full house, etc.) play it. If five best cards are good
                        (three of a kind, two pair) play unless it is a weak three of a kind and 2+ discards and hands remain. If five best cards only
                        have a pair, play unless the pair is low and 2+ discards and hands remain.
                    </li>
                </ul>


                <h2>Game Difficulty Definitions</h2>
                <p>
                    The three difficulties tested are defined below. They are based on different playable settings in Balatro. Each strategy was simulated 500 times
                    per difficulty.
                </p>

                <div>
                    <Table withTableBorder withColumnBorders data={tableData} />
                </div>


                <h2>Code Features</h2>
                <p>
                    The following is a feature list of the simulation program:
                </p>
                <ul>
                    <li><b>Complete poker hand evaluation</b> - follows Balatro's scoring system including hand-type multipliers.</li>
                    <li><b>Class-based strategies</b> - making it easy to add or change strategy implementations in the future.</li>
                    <li><b>Realistic deck management</b> - full 52-card deck with proper shuffling, drawing, discarding, and playing.</li>
                    <li><b>Deck-aware strategies</b> - advanced strategies like Flush Chaser and Straight builder consider the remaining cards in deck.</li>
                    <li><b>Multi-ante progression</b> - games progress through multiple antes with configurable Small, Big, and Boss blinds per ante.</li>
                    <li><b>Action recording system</b> - tracks every play/discard decision with detailed game state information.</li>
                    <li><b>Statistical analysis</b>- calculates average scores, confidence intervals, and comparative performance metrics across all strategies.</li>
                    <li><b>Configurable simulation parameters</b> - adjustable difficulties, number of games, and random seed for reproducible testing</li>
                </ul>

                <h2>Results</h2>
                <p>
                    Across 500-simulations per strategy-difficulty combination, the <b>Flush Chaser</b> strategy performed significantly better than
                    all other strategies. The plot below shows the average performance of each strategy across the three difficulties. The error bars
                    represent the 95% confidence interval.
                </p>
                <div className={classes.sbsImgContainer}>
                    <img className={classes.mainImg} src={resultsChart} alt="balatro strategy results" />
                </div>

            </div>
        </div>
    )
}

export default Balatro;