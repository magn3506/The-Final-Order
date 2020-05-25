import React from 'react';
import useFetch from "../../../hooks/useFetch";
import Layout from "../../../components/app/layout/layout";
import {navigate} from 'gatsby';
import ClassroomDetails from '../../../components/app/organisms/classroom-details/classroom_details';
import {Wrapper, LecturesTitle, LecturesNumber, CreateLectureCon, CreateLectureNumber, CreateLectureButtonCon, CreateLectureButtonText, CreateLectureButton, AddIcon, HelpContainer, Title, Feedback, ImgOwl} from './classroom_edit_styles';
import { Link } from "gatsby";
import { MdPlayCircleOutline } from "react-icons/md";
import LectureOwlIcon from '../../../assets/icons/lecture_owl_icon.png';

const ClassroomEdit = ({location}) => {
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
                  <div>
                    <div className="index">{i + 1}</div>
                    <div className="card">
                      <h4 className="title">{e.title}</h4>
                      <div className="progress">100%</div>
                      <Link to="#">
                        <MdPlayCircleOutline size="20px" color="white" />
                        <div>Begin</div>
                      </Link>
                    </div>
                  </div>
                )
              })}


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