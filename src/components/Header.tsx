import { ActionIcon, Button, Container, Group, Title, Tooltip, useMantineColorScheme } from "@mantine/core";
import {
    IconBrandLinkedin, IconBrandGithub, IconMail, IconMoon, IconBulb
} from '@tabler/icons-react'
import classes from './Header.module.css'
import DropdownMenu from "./DropdownMenu";
import { NavLink } from "react-router";



function Header() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();


    return (
        <Container className={classes.headerContainer} fluid>
            <div className={classes.pageLinks}>
                <Group gap={4}>
                    <NavLink to="/about" >
                        <Button className={classes.pageLinkText} variant="subtle" size="xs">
                            About
                        </Button>
                    </NavLink>
                    <NavLink to="/projects">
                        <Button className={classes.pageLinkText} variant="subtle" size="xs">
                            Projects
                        </Button>
                    </NavLink>
                    <NavLink to="/coursework">
                        <Button className={classes.pageLinkText} variant="subtle" size="xs">
                            Coursework
                        </Button>
                    </NavLink>
                    <NavLink to="/resume">
                        <Button className={classes.pageLinkText} variant="subtle" size="xs">
                            Resume
                        </Button>
                    </NavLink>
                </Group>
            </div>
            <div className={classes.pageMenu}>
                <DropdownMenu />
            </div>
            <div className={classes.nameTitle}>
                <Title order={3}>Zachary Allen</Title>
            </div>
            <div className={classes.socialContainer}>
                <Group wrap="nowrap" gap={2}>
                    <Tooltip position="bottom" label="LinkedIn">
                        <a href='https://www.linkedin.com/in/allenza/' target='_blank' rel="noreferrer">
                            <ActionIcon size="lg" variant="subtle" className={classes.socialIcon}>
                                <IconBrandLinkedin />
                            </ActionIcon>
                        </a>
                    </Tooltip>
                    <Tooltip position="bottom" label="GitHub">
                        <a href='https://github.com/ZackAllen1' target='_blank' rel="noreferrer">
                            <ActionIcon size="lg" variant="subtle" className={classes.socialIcon}>
                                <IconBrandGithub />
                            </ActionIcon>
                        </a>
                    </Tooltip>
                    <Tooltip position="bottom" label="Email">
                        <a href='mailto:zackallendata@gmail.com' target='_blank' rel="noreferrer">
                            <ActionIcon size="lg" variant="subtle" className={classes.socialIcon}>
                                <IconMail />
                            </ActionIcon>
                        </a>
                    </Tooltip>
                    <Tooltip position="bottom" label={colorScheme == 'dark' ? "Light Mode" : "Dark Mode"}>
                        <ActionIcon
                            onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
                            variant="subtle"
                            size="lg"
                            aria-label="Toggle color scheme"
                        >
                            {colorScheme == 'dark' ? <IconBulb color="yellow" /> : <IconMoon />}
                        </ActionIcon>
                    </Tooltip>
                </Group>
            </div>
        </Container >
    )

}


export default Header;