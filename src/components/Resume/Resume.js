import './Resume.css'
import pdfResume from './Resume.pdf'

const Resume = () => {
    return (
        <div className="resume_container"> 
            
                <embed
                    className="resume_pad"
                    src={pdfResume}
                    type="application/pdf"
                />

        </div>

    );
}
export default Resume;