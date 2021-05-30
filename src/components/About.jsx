import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import Underline from 'src/components/common/Underline';

const Container = styled.div`
    height: 100vh;
    margin: 0 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 990px) {
        margin: 0 8.8rem 0 8.8rem;
    }
`;

const Heading = styled.h1`
    font-family: 'Kanit';
    font-size: 2rem;
    color: ${(props) => props.theme.global.primary};
    text-transform: capitalize;

    @media screen and (min-width: 990px) {
        font-size: 3rem;
    }
`;

const Text = styled.p`
    font-family: 'Cabin';
    color: ${(props) => props.theme.global.primary};
    font-size: 1.2rem;
    text-align: justify;
    text-justify: auto;
    max-width: 50rem;
    margin: 0;

    @media screen and (min-width: 990px) {
        padding: 0 2rem 0 2rem;
        font-size: 1.5rem;
    }
`;

const Link = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: ${(p) => p.theme.global.primary};
`;

const About = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <Container id={'about'}>
            <Heading>
                <Underline text={'about'} colors={[themeContext.section.colors.about]} />
            </Heading>
            <Text>
                I'm a full stack developer based in Paris. I like working with
                technologies related to JavaScript and Java. I'm not a designer but I
                value simple and clean UX/UI. <br />
                <br />
                In my free internet time, I enjoy <em>trying</em> to create cool and short
                2D games, watching some cool{' '}
                <Link
                    href="https://www.imdb.com/title/tt0120863/"
                    target="_blank"
                    title={'Link to one of the greatest movie'}
                    rel="noopener noreferrer"
                >
                    movies
                </Link>{' '}
                or{' '}
                <Link
                    href="https://www.imdb.com/title/tt0098936/"
                    target="_blank"
                    title={'Link to the greatest TV show'}
                    rel="noopener noreferrer"
                >
                    shows
                </Link>{' '}
                and getting lost on{' '}
                <Link
                    href="https://www.reddit.com/r/aww"
                    target="_blank"
                    title={'Link to the cutest subreddit'}
                    rel="noopener noreferrer"
                >
                    reddit
                </Link>
                .
                <br />
                <br />
                This portfolio is a way to show some of my personal work, hope you'll have
                a fun ride.
            </Text>
        </Container>
    );
};

export default About;
