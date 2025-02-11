import { Button } from '@mantine/core';
import { IconFileTypePdf, IconBrandGithub, IconPresentation, IconVideo, IconDeviceLaptop } from '@tabler/icons-react'
import classes from './ExternalLink.module.css'

let iconDict = {
    "pdf": <IconFileTypePdf />,
    "github": <IconBrandGithub />,
    "presentation": <IconPresentation />,
    "video": <IconVideo />,
    "laptop": <IconDeviceLaptop />
}

interface ExternalLinkProps {
    url: string;
    iconName: keyof typeof iconDict;
    description: string;
    color?: string;
}

function ExternalLink({ url, iconName, description, color }: ExternalLinkProps) {
    return (
        <div className={classes.externalLink}>
            <a href={url} target="_blank" rel="noreferrer">
                <Button
                    variant="filled"
                    color={color}
                    rightSection={iconDict[iconName]}
                    radius="md"
                    size="md"
                >
                    {description}
                </Button>
            </a>
        </div>
    )
}

export default ExternalLink;