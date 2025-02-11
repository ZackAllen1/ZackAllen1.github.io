import { Menu, Button, rem, Burger } from "@mantine/core";
import { IconMenu2, IconUser, IconChartBar, IconSchool, IconFileCv } from "@tabler/icons-react";
import { SiReaddotcv } from "react-icons/si";
import { NavLink } from "react-router";
import { useDisclosure } from '@mantine/hooks';
import classes from './DropdownMenu.module.css'


function DropdownMenu() {
    const [opened, { toggle }] = useDisclosure();
    return (
        <Menu position="bottom-start" shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={200}>
            <div onMouseEnter={toggle} onMouseLeave={toggle}>
                <Menu.Target>
                    <Burger opened={opened} aria-label="Toggle navigation" />
                </Menu.Target>


                <Menu.Dropdown>
                    <Menu.Label>Zack's Menu</Menu.Label>
                    <NavLink to="/about" className={classes.navLink} onClick={toggle}>
                        <Menu.Item leftSection={<IconUser style={{ width: rem(18), height: rem(18) }} />}>
                            About
                        </Menu.Item>
                    </NavLink>
                    <NavLink to="/projects" className={classes.navLink} onClick={toggle}>
                        <Menu.Item leftSection={<IconChartBar style={{ width: rem(18), height: rem(18) }} />}>
                            Projects
                        </Menu.Item>
                    </NavLink>
                    <NavLink to="/coursework" className={classes.navLink} onClick={toggle}>
                        <Menu.Item leftSection={<IconSchool style={{ width: rem(18), height: rem(18) }} />}>
                            Coursework
                        </Menu.Item>
                    </NavLink>
                    <Menu.Divider />
                    <NavLink to="/resume" className={classes.navLink} onClick={toggle}>
                        <Menu.Item
                            leftSection={<SiReaddotcv style={{ width: rem(18), height: rem(18) }} />}
                        >
                            Resume
                        </Menu.Item>
                    </NavLink>
                </Menu.Dropdown>
            </div>
        </Menu>
    )
}


export default DropdownMenu;