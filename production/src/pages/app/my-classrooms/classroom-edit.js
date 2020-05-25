import React from 'react';
import useFetch from "../../../hooks/useFetch";
import Layout from "../../../components/app/layout/layout";
import {navigate} from 'gatsby';

const ClassroomEdit = ({location}) => {
    console.log(location.state.classroom_id);
    const url = "/private/api/classrooms/get-classroom-and-lectures.php?classroom_id=" + location.state.classroom_id;
    const res = useFetch(url, {});
    console.log("RESPSONSE: ", res);
    return (
        <Layout page_title="Edit Classroom">
            {
                !res.response ? <h1>Loading...</h1> : (
                
                <div>
                    <h1>Classroom {res.response.title}</h1>
                    <button onClick={() => navigate("/app/lecture/create-lecture", {state: {classroom_id: res.response.id}})}>Classroom id {res.response.id}</button>
                </div>
                
                )
            }
        </Layout>
    )
}

export default ClassroomEdit;