import React, { useState, useEffect} from 'react';
import Layout from "../../../components/app/layout/layout";
import useToggleBool from '../../../hooks/useToggleBool';
import StepForm from '../../../components/app/organisms/step_form/step_form';
import LectureForm from '../../../components/app/organisms/lecture_form/lecture_form';

const CreateLecture = ({ location }) => {
    const [steps, setSteps] = useState([]);
    console.log("STEPS: ", steps[0]);


    //FOR TOGGELING BETWEEN FORMS
    const [isShowingStep, toggleStep] = useToggleBool(false);
    const [isShowingLecture, toggleLecture] = useToggleBool(true);

    const showStep = () => {
        toggleStep(true);
        toggleLecture(false);
      }
      const showLecture= () => {
        toggleLecture(true);
        toggleStep(false);
    }

    const AddSteps = () => {
        setSteps([
            ...steps,
            {
              id: steps.length,
              value: Math.random() * 100
            }
          ]);
    }
    
    console.log("Classroom_ID", location.state.classroom_id);

    const onSubmit = e => {
        e.preventDefault();
        console.log("submit");
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
            onSubmit 
            isShowing={isShowingLecture} 
            showStep={showStep} 
            hide={toggleLecture}
            />
        </Layout>
    )
}

export default CreateLecture;