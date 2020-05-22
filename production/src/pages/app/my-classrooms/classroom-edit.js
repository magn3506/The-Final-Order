import React from 'react';
import useFetch from "../../../hooks/useFetch";
import Layout from "../../../components/app/layout/layout";

const ClassroomEdit = ({location}) => {
    console.log(location.state.classroom_id);
    const url = "/private/api/classrooms/get-classroom-and-lectures.php?classroom_id=" + location.state.classroom_id;
    const res = useFetch(url, {});
    console.log("RESPSONSE: ", res);
    return (
        <Layout page_title="Edit Classroom">
            {
                !res.response ? <h1>Loading...</h1> : <h1>Classroom {res.response.title}</h1>
            }
        </Layout>
    )
}

export default ClassroomEdit;