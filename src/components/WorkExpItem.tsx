import { Paper } from '@mantine/core';
import classes from './WorkExpItem.module.css';

interface WorkExperienceProps {
    company: string;
    title: string;
    lowerText?: string;
    startDate?: string;
    endDate: string;
    logo: string;
    logoW: number;
    logoH: number;
}

function WorkExpItem({ company, title, lowerText, startDate, endDate, logo, logoW, logoH }: WorkExperienceProps) {
    return (
        <Paper className={classes.workExpItem} withBorder shadow='sm' p='xs'>
            <div className={classes.companyImage}>
                <img src={logo} width={logoW} height={logoH} />
            </div>

            <div className={classes.workExpInfo}>
                <div className={classes.workExpInfoUpper}>
                    <div><b>{company}</b></div>
                    {startDate ? (
                        <div style={{ color: "gray" }}><b>({startDate} — {endDate})</b></div>
                    ) : (
                        <div style={{ color: "gray" }}><b>({endDate})</b></div>
                    )}
                </div>
                <div>&nbsp;— {title}</div>
                {lowerText ? (
                    <div>&nbsp;— {lowerText}</div>
                ) : <></>}
            </div>
        </Paper>
    )
}

export default WorkExpItem;