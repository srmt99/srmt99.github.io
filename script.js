
document.getElementById("home").onclick = function() 
{
    document.getElementById("content").innerHTML = `
    <div class="content-header">
        <h4 id="greetings">Welcome !</h4>
        <h6>I am Soroush Mortazavi Moghaddam, currently a B.Sc. computer engineering student at the <a class="non_underline-link" href="https://aut.ac.ir/en">Amirkabir University of Technology</a>, Iran.</h6>
    </div>
    <div id="content-text">
        <p>
        I would describe myself as someone who loves his field of study and is always eager to learn more.<br>
        My main <strong>interest</strong> is in the field of <strong>Artificial intelligence</strong> and its applications.
        I am especially interested in <strong>machine/deep learning</strong>, and how it can be used in real world problems.
        I am genuinely intrigued by the way "<strong>learning</strong>" works, and It's my dream and ambition
        to contribute my small share to achieving strong AI.
        </p>
        <p>
        Starting about three years ago, I have been trying to learn as much as I can about AI both inside and outside the university.
        I have passed several AI-related courses, all with A's, and have practiced this knowledge in a number of <a  onclick="show_projects()" class="non_underline-link blue-btn projects" href="#" >projects</a>.
        My current total GPA is 3.86/4 and 4/4 in the last two years.
        I ranked 19 out of 30k students (top 0.07%) in our national university entrance exam and was announced as an outstanding student
        by Amirkabir University of Technology.
        </p>
        <p>
        My primary goal is to continue my studies in a top-ranking university and conduct research as a member
        of an enthusiastic team. This, I hope, would give me the academic background that I need to be knowledgeable in my field
        and successful in my future career.
        </p>
    </div>
    `
	document.getElementById("home").style.color = "black"
	document.getElementById("experience").style.color = "blue"
	var projects = document.getElementsByClassName("non_underline-link blue-btn projects")
    for(var index=0;index < projects.length;index++){
        projects[index].style.color = "blue";
    }
	document.getElementById("hobbies").style.color = "blue"
    return false;
}

document.getElementById("experience").onclick = function() 
{
    document.getElementById("content").innerHTML = `
    <div class="content-header">
        <h4 class="title">My Experience</h4>
    </div>
    <div id="content-text">
        <div class="exp-item" id="exp-1">
            <div class="exp-info">
                <h5>I have been a teaching assistant in several courses:</h5>
                <ul id="tas">
                    <li>Computational Intelligence (2 semesters)</li>
                    <li>Data Mining</li>
                    <li>Principles of Cloud Computing</li>
                    <li>Operating Systems</li>
                    <li>Computer Architecture</li>
                </ul>
                <h6>I was primarily responsible for:</h6>
                <ul class="duties">
                    <li>Designing and grading assignments, quizzes, and course projects</li>
                    <li>Creating video tutorials, assignment solutions, and extra resources</li>
                    <li>Helping students with their questions and problems</li>
                    <li>Coordinating the teaching assistance team (when I was the head TA)</li>
                </ul>
            </div>
            <img src="data/Screenshots.jpg" class="exp-img" id="crs-tutorial" alt="course tutorials by Soroush Mortazavi Moghaddam">
        </div>
        <div class="exp-item" id="exp-2">
            <div class="exp-info">
                <h5>I have been a research and development Intern:</h5>
                <h6>at <a class="non_underline-link" href="https://www.roshan-ai.ir/">Roshan-AI</a>, a knowledge enterprise</h6>
                <h6>My duties were:</h6>
                <ul class="duties">
                    <li>Gathering a Persian text corpus by developing a <a class="non_underline-link" href="https://github.com/srmt99/web-crawler" id="home">web crawler</a></li>
                    <li>Using the same data to learn Persian word embeddings</li>
                    <li>Designing a stock market predictor model and Gathering its data</li>
                </ul>
            </div>
            <img src="data/roshan-icon.jpg" class="exp-img" id="roshan-icon" alt="course tutorials by Soroush Mortazavi Moghaddam">
        </div>
    </div>
    `
	document.getElementById("home").style.color = "blue"
	document.getElementById("experience").style.color = "black"
	var projects = document.getElementsByClassName("non_underline-link blue-btn projects")
    for(var index=0;index < projects.length;index++){
        projects[index].style.color = "blue";
    }
	document.getElementById("hobbies").style.color = "blue"
    return false;
}

function show_projects() 
{
    document.getElementById("content").innerHTML = `
    <div class="content-header">
        <h5>Over the years, I have had the chance to put what I've learned into practice.</h5>
        <h5>Here are some of the major ones. you can visit <a class="non_underline-link" href="https://github.com/srmt99">here</a> for a broader list.</h5>
    </div>
    <div class="row">
        <div class="proj-item " id="BS-thesis">
            <h6>Learning The Game of Gobblet (B.Sc Thesis)</h6>
            <img class="proj-image" src="data/RL_gobblet.jpg" alt="">
        </div>
        <div class="proj-item " id="AI-Projs" >
            <h6><a class="non_underline-link" href="https://github.com/srmt99/AI-course">Some of AI-Related Course Projects</a></h6>
            <img class="proj-image" id="AI-Projs-img" src="data/AI_Projs.png" alt="">
        </div>
    </div>
    <div class="proj-item">
        <h6><a class="non_underline-link" href="https://github.com/srmt99/machine-learning/tree/master/captcha-conv">Portal CAPTCHA Solver</a></h6>
        <img class="proj-image width-90" src="data/CAPTCHA_solver.jpg" alt="">
    </div>
    <div class="proj-item">
        <h6><a class="non_underline-link" href="https://github.com/srmt99/stock-market">Stock Market Predictor</a></h6>
        <img class="proj-image width-90" src="data/stock.jpg" alt="">
    </div>

    `
	document.getElementById("home").style.color = "blue"
	document.getElementById("experience").style.color = "blue"
	var projects = document.getElementsByClassName("non_underline-link blue-btn projects")
    for(var index=0;index < projects.length;index++){
        projects[index].style.color = "black";
    }
	document.getElementById("hobbies").style.color = "blue"
    return false;
}

document.getElementById("hobbies").onclick = function() 
{
    document.getElementById("content").innerHTML = `
    <div class="content-header">
        <h6>I really love drawing and sketching, especially portrays. Here are some of my work</h6>
    </div>
    <img class="art-image" src="data/artwork.jpg" alt="">
    `
	document.getElementById("home").style.color = "blue"
	document.getElementById("experience").style.color = "blue"
	var projects = document.getElementsByClassName("non_underline-link blue-btn projects")
    for(var index=0;index < projects.length;index++){
        projects[index].style.color = "blue";
    }
	document.getElementById("hobbies").style.color = "black"
    return false;
}