import React, {useEffect} from 'react';

const Atoms = () => {

    useEffect(() => {

        fetch('http://127.0.0.1/The-Final-Order/private/api/lectures/get-lecture-and-steps.php?lecture_id=1')
        .then(response => response.json())
        .then(data => console.log(data));

    });

    return (
        <div>
            <h1>Hehllo</h1>
        </div>
    )
}

export default Atoms;
