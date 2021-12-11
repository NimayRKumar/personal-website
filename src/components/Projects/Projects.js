import React from 'react'

const Projects = () => {

    return (
        <div>
            <br/>
            <h1>Projects</h1>
            <br/>

            <h3>Vocalitics</h3>
            <p>For my entrepreneurial senior design capstone, five friends and I decided to leverage the untapped potential in meeting data. What we fondly dubbed Vocalitics, is a meeting analysis tool that records meetings, and draws insights from it and creates labeled, human-readable transcripts of every meeting. By doing so, Vocalitics also provides individual speech times, meeting sentiments, and word clouds, as well as graphical visualizations over time. In addition, Vocalitics extracts action items from key phrases, and creates corresponding events on Google Calendar. Integrated all onto a single web-app, Vocalitics is a prototype of the ultimate tool to transform industry meetings.</p>

            <br/>

            <h3>Olympic Sports Visualization</h3>
            <p>As my final Software Lab project, five team members and I created a web-app to visualize and learn about historical Olympic Game competitors, winners, and sports. Using web scrapers in Python, we gathered data and media from olympics.com and sports-reference.com. We used MongoDB to store the data, and displayed Olympic stats by country on a world map using Google Regions geocharts.</p>
        
            <br/>

            <h3>Basketball Data Analysis</h3>
            <p>A few friends and I decided to look into the official NBA 2014-2015 shot log data in order to investigate the “Hot Hand” phenomenon. What was most fun about this project was applying my knowledge of data science to contribute without being a sports fan myself! After cleaning the data, we graphed individual players’ performance in 3D heatmaps and clustered them. Combining these clusters and graphs, we visualize player matchups and play styles in force directed graphs. Our <a href='https://towardsdatascience.com/insights-from-raw-nba-shot-log-data-and-an-exploration-of-the-hot-hand-phenomenon-1f1c6c63685a' target='_blank'>Medium article</a> was even highlighted by TowardsData Science as one of the 8 best articles on data visualization in February 2019!</p>
        
            <br/>

            <h3>LEGO AR World</h3>
            <p>It was inevitable that my passion for LEGO would intersect with my passion for computer science at some point. Inspired by Pokemon GO’s Augmented Reality, I wondered what AR LEGO instructions might look like, so two friends and I decided to find out! We used OpenCV libraries to detect key points and maintain orientation tracking, and we used AppleARKit to superimpose Lego Digital Designer 3D models over the camera view. View our demo <a href='https://youtu.be/bkqO7cQCofQ' target='_blank'>here</a>!</p>
        
            <br/>

            <h3>HackTX 3rd Place Winner - Schwadio</h3>
            <p>At HackTX 2018, my teammates won 3rd place overall, and 1st place in Charles Schwab’s Security Challenge. We were tasked with implementing a smooth alternative to password authentication, and we tackled it with audio processing. By using TensorFlow, Rev.ai, and FireBase, our tool verifies a user’s voice to verify identity and answers to security questions. </p>
        
            <br/>

            <h3>Wholesome Hacks 2nd Place Winner - Wholesome Studio</h3>
            <p>Freetail Hackers’ 2018 Spring Hackathon was all about hacking up something wholesome, and so we delivered. Three friends and I created a tool for stressed out college students (or anyone, really!) to reduce anxiety with soothing and interactive audio and visuals. We used GarageBand, paper.js and howler.js to implement our idea within eight hours.</p>
        </div>
    )

}

export default Projects