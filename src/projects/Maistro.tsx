import classes from './ProjectDetails.module.css';
import { Button, Group } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowLeft } from '@tabler/icons-react';
import { NavLink } from 'react-router';

import ExternalLink from '../components/ExternalLink';

import maistroHeader from '../assets/proj-imgs/maistro/maistroHeader.png';
import poster from '../assets/proj-imgs/maistro/MAISTRO_Poster.png';
import { MathJax } from 'better-react-mathjax';
import { useEffect, useState } from 'react';


function Maistro() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [imageUrls, setImageUrls] = useState<string[]>([]);
    useEffect(() => {
        const loadImages = async () => {
            // Glob import for all images
            const images = import.meta.glob('../assets/proj-imgs/maistro/carousel/*.png') as Record<
                string,
                () => Promise<{ default: string }>
            >;

            // Resolve all promises to extract image URLs
            const imagePaths = await Promise.all(
                Object.values(images).map(async (importImage) => {
                    const module = await importImage();
                    return module.default;
                })
            );

            setImageUrls(imagePaths);
        };

        loadImages();
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

                <h1>MAISTRO: Change the way you listen to music.</h1>


                <img src={maistroHeader} alt="header banner" width="100%" />

                <Group>
                    <ExternalLink
                        url={"https://youtu.be/GkK-3merrWo"}
                        iconName='video'
                        description='Demo/Presentation'
                        color="maistro"
                    />
                    <ExternalLink
                        url={poster}
                        iconName='presentation'
                        description='Poster'
                        color="maistro"
                    />
                    <ExternalLink
                        url={"https://github.com/harrisonstark/maistro-frontend"}
                        iconName='github'
                        description='Frontend Repo'
                        color="maistro"
                    />
                    <ExternalLink
                        url={"https://github.com/harrisonstark/maistro-backend"}
                        iconName='github'
                        description='Backend Repo'
                        color="maistro"
                    />
                </Group>

                <h2>Introduction</h2>
                <p>
                    As part of our Computer Science Senior Design Project, myself, Harrison Stark, Rayyan Merchant, and Vishwa Krishnan wanted to create
                    a product that could not only be used by many in their day-to-day activities but also push our technical skills to the limit. We noticed that despite music
                    streaming platforms such as Spotify and Apple Music having vast song libraries, their current recommendation algorithms often fall short on
                    personalization and can be context-unaware. Thus, we created a full-stack application that employs Natural Language Processing (NLP) techniques
                    to interpret user conversations and deliver real-time, highly personalized song recommendations through an intuitive user interface and a familiar
                    Spotify-integrated media player, which we called <b>MAISTRO</b>.
                </p>

                <h2>How MAISTRO Works</h2>
                <p>
                    After logging in using a Spotify Premium account, users can interact with MAISTRO by sending it chat messages. Every message sent gets forwarded to
                    two Machine Learning Models.
                </p>
                <MathJax>
                    <p>
                        The first is a <b>custom emotion detection model</b>, which attempts to classify the message into one of 27 different possible emotions (such
                        as joy, anger, fear, etc.). The predicted emotion gets mapped into two quantitative values: <b>Valence</b>, which reflects how positive, negative, or neutral the message is,
                        and <b>Arousal</b> (also called Energy), which reflects the strength of the emotion. Both Valence and Arousal values are in the range <span>{"\\(\\mathbf{[0,1]}\\)"}</span>, with
                        1 being Positive/High and 0 being Negative/Low, respectively. The second model is <b>GPT-4</b>, which attempts to predict the <b>3 genres</b> you are most likely wanting to
                        listen to based on your message. We found GPT-4 to be the most cost-effective and best-performing solution for narrowing down potentially recommended songs.
                    </p>
                </MathJax>
                <p>
                    The last parameters we consider are Danceability, Speechiness, Instrumentalness, and Popularity. These values are randomly initialized using a normal distribution with
                    an absolute minimum and maximum of 0.1 and 0.9, respectively, but are fine-tuned over time along with Valence and Arousal based on a custom smoothing function that factors in
                    both the time spent listening to the recommended songs and whether you use the like/dislike buttons (more on this later).
                </p>
                <p>
                    All of the aforementioned parameters are sent
                    to <a href="https://developer.spotify.com/documentation/web-api/reference/get-recommendations" target="_blank" rel="noreferrer">Spotify's Recommendation API</a>, which
                    sends back a batch of songs that are served to the user. For every batch the user listens to, we track how long they listened to each song and whether they used our
                    like or dislike buttons to indicate their enjoyment. Both of these factors are considered, with the like/dislike buttons having a greater effect, on the newly generated
                    parameters sent to Spotify for the subsequent batches.
                </p>

                <h2>MAISTRO Frontend</h2>
                <p>
                    Most of my time spent on this project was designing the previously explained framework as well as implementing almost all of the frontend features.
                    The frontend was built in Next.js with TailwindCSS styling. I utilized and heavily customized some <a href="https://ui.shadcn.com/" target="_blank" rel="noreferrer">shadcn/ui components</a> for
                    sliders, buttons, cards, etc., and a <a href="https://vercel.com/templates/next.js/nextjs-ai-chatbot" target="_blank" rel="noreferrer">Vercel AI Chatbot</a> template, which greatly helped
                    with integrating chat messages. In terms of UI features, I developed the following:
                </p>
                <ul>
                    <li>Login Page Card</li>
                    <li>Responsive Spotify-Integrated Media Player with Custom Icons for Batch Progress</li>
                    <li>Ability to Toggle Media Player Position (top/bottom)</li>
                    <li>Light/Dark Themes</li>
                    <li>Text Scrolling on Long Song Titles</li>
                    <li>Many More Small UI Touches</li>
                </ul>
                <p>The following are some screenshots of the app:</p>

                <Carousel slideSize="75%" slideGap="sm" align="center" withIndicators>
                    {imageUrls.map((image: string, index: number) => (
                        <Carousel.Slide>
                            <img width="100%" key={index} src={image} alt={`carousel ${index + 1}`} />
                        </Carousel.Slide>
                    ))}
                </Carousel>

            </div>

        </div>
    )
}

export default Maistro;