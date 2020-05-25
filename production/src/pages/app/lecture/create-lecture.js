import React, { useState} from 'react';
import Layout from "../../../components/app/layout/layout";
import useToggleBool from '../../../hooks/useToggleBool';
import StepForm from '../../../components/app/organisms/step_form/step_form';
import LectureForm from '../../../components/app/organisms/lecture_form/lecture_form';

const CreateLecture = ({ location}) => {
    const [steps, setSteps] = useState([]);
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    

    //FOR TOGGELING BETWEEN FORMS
    const [isShowingStep, toggleStep] = useToggleBool(false);
    const [isShowingLecture, toggleLecture] = useToggleBool(true);

    console.log("Classroom_ID", location.state.classroom_id);

    const showStep = () => {
        toggleStep(true);
        toggleLecture(false);
      }
      const showLecture= () => {
        toggleLecture(true);
        toggleStep(false);
    }

      const AddSteps = (formData, answerARR, sourceARR) => {
        setSteps([
            ...steps,
            {
              title: formData.title,
              theoryText: formData.theoryText,
              question: formData.question,
              answers: answerARR,
              source: sourceARR,
              stepOrder: steps.length + 1
            }
          ]);

          console.log("STEPS: ", steps);
      }
    
      const handleTitleChange = (e) => {
        settitle({title: e.target.value});
    }

      const handleDescriptionChange = (e) => {
        setdescription({description: e.target.value});
    }


    return (
        <Layout page_title="Create Lecture">
            <StepForm 
            isShowing={isShowingStep} 
            showLecture={showLecture} 
            hide={toggleStep}
            AddSteps={AddSteps}
            />
            <LectureForm 
            classroomID={location.state.classroom_id}
            title={title}
            description={description}
            handleTitleChange={handleTitleChange}
            handleDescriptionChange={handleDescriptionChange}
            steps={steps}
            onSubmit 
            isShowing={isShowingLecture} 
            showStep={showStep} 
            hide={toggleLecture}
            />
        </Layout>
    )
}

export default CreateLecture;