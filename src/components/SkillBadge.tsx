import { Badge, Paper } from "@mantine/core";
import classes from './SkillBadge.module.css'

interface SkillBadgeProps {
    name: any;
    color?: string;
    icon?: any;
}

function SkillBadge({ name, color, icon }: SkillBadgeProps) {
    return (
        <div className={classes.skillBadge}>
            <Paper shadow="sm" withBorder>
                <Badge
                    size="xl"
                    radius="md"
                    variant="transparent"
                    color={color ? color : "text"}
                    tt="none"
                    leftSection={icon}

                >
                    {name}
                </Badge>
            </Paper>
        </div>
    )
}

export default SkillBadge;