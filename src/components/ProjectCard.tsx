import { Card, Image, Text, Badge, Group, Grid, Divider } from '@mantine/core';
import classes from './ProjectCard.module.css';
import { Link } from 'react-router';

interface ProjectCardProps {
    size: string;
    image: string;
    title: string;
    url: string;
    period: string;
    description: string;
    badges: {
        label: string;
    }[];
}



function ProjectCard({ size, image, title, url, period, description, badges }: ProjectCardProps) {

    let baseSize = size == 'sm' ? 6 : 12

    const features = badges.map((badge, index) => (
        <Badge key={index} variant='outline' color='gray'>
            {badge.label}
        </Badge>
    ));

    return (
        <Grid.Col span={{ base: 12, md: baseSize }}>
            <Link to={url} style={{ textDecoration: "none" }}>
                <Card shadow="sm" p="md" radius="md" withBorder className={classes.cardContainer}>

                    <Card.Section withBorder>
                        <Image
                            src={image}
                            height={200}
                            alt={title}
                        />
                    </Card.Section>

                    <Card.Section mt="md" m={0} mb={4} >
                        <Group justify="space-between" className={classes.cardHeaderInfo}>
                            <Text size="xl" className={classes.projectTitle}>{title}</Text>
                            <Badge variant='light'>{period}</Badge>
                        </Group>

                    </Card.Section>


                    <Text mb={4} span inherit className={classes.cardDescription}>
                        {description}
                    </Text>


                    <Divider my="xs" />


                    <Text c="dimmed" size='xs'>
                        <b>TAGS</b>
                    </Text>
                    <Group gap={7} mt={5}>
                        {features}
                    </Group>

                </Card>
            </Link>

        </Grid.Col>
    );
}

export default ProjectCard;