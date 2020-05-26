import React, {useState} from 'react';
import useFetch from "../../../hooks/useFetch";
import Layout from "../../../components/app/layout/layout";
import {navigate} from 'gatsby';
import ClassroomDetails from '../../../components/app/organisms/classroom-details/classroom_details';
import {Wrapper, LecturesTitle, RemoveLectureModalWrapper, RemoveLectureModalButton, CloseIcon, RemoveLectureModalCon, EditButtonsCon, RemoveIcon, LecturesNumber, CreateLectureCon, EditLectureButtonCon, EditLectureButtonText, EditLectureButton, CreateLectureNumber, CreateLectureButtonCon, CreateLectureButtonText, CreateLectureButton, AddIcon, HelpContainer, Title, Feedback, ImgOwl} from './classroom_edit_styles';
import LectureOwlIcon from '../../../assets/icons/lecture_owl_icon.png';
import {local_server_path} from '../../../global_variables';


const ClassroomEdit = ({location}) => {
  const [removeModal, setRemoveModal] = useState(false);
  const [lectureToDelete, setLectureToDelete] = useState(null);

  //Remove lecture
  const removeLecture = () => {
  setRemoveModal(false);
  console.log("LECTURE WITH ID DELETED: ", lectureToDelete);

  fetch(local_server_path + `/private/api/lectures/delete-lecture.php?lecture_id=${lectureToDelete}`, {
    method: 'DELETE'
    }).then(res => res)
    .catch(error => console.error("Error:", error))
    .then(response => {
      console.log("Success:", response);
      setLectureToDelete(null);
      window.location.reload();
      return false;
  });
  }
  //UI feedback and check if user is sure
  const removeLectureModal = (lectureID) => {
    console.log("DELETE LECTURE", lectureID);
    setLectureToDelete(lectureID);
    setRemoveModal(true);
  }

    console.log(location.state.classroom_id);
    const url = "/private/api/classrooms/get-classroom-and-lectures.php?classroom_id=" + location.state.classroom_id;
    const res = useFetch(url, {});
    console.log("RESPSONSE: ", res);
    return (
        <Layout page_title="Edit Classroom">
            {
                !res.response ? <h1>Loading...</h1> : (
                
                <Wrapper>
                    <ClassroomDetails 
                      classroomData={{
                        title: res.response.title,
                        description: res.response.description,
                        owner: res.response.owner,
                      }}
                    />
                <LecturesTitle>
                    Lectures: <LecturesNumber>0{res.response.lectures.length}</LecturesNumber>
                </LecturesTitle>
                {res.response.lectures.length === 0 ? (
                <CreateLectureCon>
                    <CreateLectureNumber>1</CreateLectureNumber>
                    <CreateLectureButtonCon>
                    <CreateLectureButtonText>What will your next lecture be about?</CreateLectureButtonText>
                    <CreateLectureButton onClick={() => navigate("/app/lecture/create-lecture", {state: {classroom_id: res.response.id}})}><AddIcon size="1.5em" />{window.innerWidth >= 750 ? ("Add lecture") : null}</CreateLectureButton>
                    </CreateLectureButtonCon>
                </CreateLectureCon>

                ) : res.response.lectures.map((e, i) => {
                return (
                  <CreateLectureCon>
                    <CreateLectureNumber className="index">{i + 1}</CreateLectureNumber>
                    <EditLectureButtonCon className="card">
                      <EditLectureButtonText className="title">{e.title}</EditLectureButtonText>
                      <EditButtonsCon>
                        <RemoveIcon onClick={() => removeLectureModal(e.id)} size="1.5em" />
                        <EditLectureButton>Edit</EditLectureButton>
                      </EditButtonsCon>
                    </EditLectureButtonCon>
                  </CreateLectureCon>
                )
              })}

                    {removeModal ? (
                      <RemoveLectureModalWrapper>
                        <RemoveLectureModalCon>
                          <h2>SURE YOU WNAT TO DELETE?</h2>
                          <RemoveLectureModalButton onClick={() => removeLecture()}>Delete lecture</RemoveLectureModalButton>
                          <CloseIcon onClick={() => {setRemoveModal(false); setLectureToDelete(null);}} size="1.5em" />
                        </RemoveLectureModalCon>
                      </RemoveLectureModalWrapper>
                    ) : null}

              {res.response.lectures.length >= 1 ? (
                <CreateLectureCon>
                    <CreateLectureNumber>{res.response.lectures.length + 1}</CreateLectureNumber>
                    <CreateLectureButtonCon>
                    <CreateLectureButtonText>What will your next lecture be about?</CreateLectureButtonText>
                    <CreateLectureButton onClick={() => navigate("/app/lecture/create-lecture", {state: {classroom_id: res.response.id}})}><AddIcon size="1.5em" />{window.innerWidth >= 750 ? ("Add lecture") : null}</CreateLectureButton>
                    </CreateLectureButtonCon>
                </CreateLectureCon>
              ) : null}


                <HelpContainer>
                <ImgOwl src={LectureOwlIcon} />
                <Title>Congratulations! What next?</Title>
                <Feedback>You’ve created a classroom - the foundation for any learning environment. First thing to do is to create lectures that will be taught in your classroom!</Feedback>
                </HelpContainer>
                </Wrapper>
                )
            }
        </Layout>
    )
}

export default ClassroomEdit;