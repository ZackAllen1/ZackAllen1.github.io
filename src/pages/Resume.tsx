import classes from './Resume.module.css';
import resume_new from '../assets/resume_website.pdf'
import ExternalLink from '../components/ExternalLink';




function Resume() {

    return (
        <div className={classes.resumeContainer}>
            <div className={classes.resumeInnerContainer}>
                <h1>Resume</h1>
                <h3>Last Updated: February 2025</h3>
                <div style={{ marginBottom: "20px" }}>


                    <ExternalLink
                        url={resume_new}
                        iconName='pdf'
                        description='Open Resume in New Tab'
                        color="blue"
                    />

                </div>
                <div className={classes.resumeRender}>
                    <object name="test" data={resume_new} type="application/pdf" width="100%" height="1150px">
                        <p>Resume PDF did not render, click<a href={resume_new}>here</a> to open</p>
                    </object>
                </div>
            </div>
        </div>
    )
}

export default Resume;