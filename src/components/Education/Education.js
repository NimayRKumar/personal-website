import React from 'react'

const Education = () => {

    const courses = [
        'Data Science Principles',
        'Data Science Lab',
        'Probability and Random Processes',
        'Digital Image and Video Processing',
        'Algorithms',
        'Differential Equations and Linear Algebra',
        'Matrices and Matrix Calculations',
        'Information Security and Privacy',
        'Software Architecture',
        'Linear Systems and Signals'
    ]
    return (
        <div>
            <br/>
            <h1>Education</h1>
            <br/>

            <h3>The University of Texas at Austin, 2016 - 2020</h3>
            <p>B.S. in Electrical & Computer Engineering, GPA: 3.58</p>
            <p>Minor in Business</p>

            <br/>

            <h4>Coursework:</h4>
            <ul>
                {courses.map((item, index) => {
                    return (
                        <li key={index}>
                            {`-${item}`}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Education