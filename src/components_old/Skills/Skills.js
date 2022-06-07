import React from 'react'

const Skills = () => {

    const langs = [
        'Python',
        'JavaScript',
        'SQL',
        'Java',
        'C#',
        'C++',
        'C',
        'HTML',
        'CSS'
    ]

    const libs = [
        'React.js',
        'Node.js',
        'Pandas',
        'Matplotlib',
        'Numpy',
        'Sci-kit-learn'
    ]

    const techs = [
        'Docker',
        'AWS',
        'GCP',
        'Azure',
        'IBM Watson'
    ]

    return (
        <div>
            <br/>
            <h1>Skills</h1>

            <br/>
            <h3><em>Languages</em></h3>
            <ul>
                {langs.map((item, index) => {
                    return (
                        <li key={index}>
                            {`-${item}`}
                        </li>
                    )
                })}
            </ul>
            <br/>

            <br/>
            <h3><em>Libraries</em></h3>
            <ul>
                {libs.map((item, index) => {
                    return (
                        <li key={index}>
                            {`-${item}`}
                        </li>
                    )
                })}
            </ul>
            <br/>

            <br/>
            <h3><em>Technologies</em></h3>
            <ul>
                {techs.map((item, index) => {
                    return (
                        <li key={index}>
                            {`-${item}`}
                        </li>
                    )
                })}
            </ul>
            <br/>
        </div>
    )
}

export default Skills