
document.getElementById("home").onclick = function() 
{
    document.getElementById("content").innerHTML = `
        <div class="content-header">
                <h4 id="greetings">Welcome!</h4>
                <h6>I am Soroush Mortazavi Moghaddam, a graduate from the
                    <a class="non_underline-link" href="https://uwaterloo.ca/">University of Waterloo</a>,
                    where I completed my MASc under the supervision of Prof.
                    <a class="non_underline-link" href="https://yashpant.github.io/">Yash Vardhan Pant</a> and Prof.
                    <a class="non_underline-link" href="https://uwaterloo.ca/embedded-software-group/people-profiles/sebastian-fischmeister">Sebastian Fischmeister</a>.
                    I also hold a BSc in computer engineering from
                    <a class="non_underline-link" href="https://aut.ac.ir/en">Amirkabir University of Technology</a>,
                    Iran.</h6>
            </div>
            <div id="content-text">
                <p>
                    I am interested in artificial intelligence and reinforcement learning,
                    particularly in how these fields can intersect to solve real-world problems.
                    My MASc thesis, <strong>"Robust Reinforcement Learning for Linear Temporal Logic Specifications
                        with Finite Trajectory Duration,"</strong> recently received the <strong>best paper award</strong>
                        at the 37th Canadian Conference on AI! You can check it out <a href="YOUR_LINK_HERE">here</a>.
                </p>
                <p>
                    Since 2019, I have been dedicated to expanding my knowledge of AI both
                    academically and through practical experience in various
                    <a onclick="show_projects()" class="non_underline-link blue-btn projects" href="#">projects</a>. 
                </p>
                <p>
                    I aspire to work in an AI-related field that aligns with my passion,
                    gaining expertise and making significant contributions to advancing our
                    understanding of artificial intelligence. My ambition is to become a leading
                    expert in my field, capable of driving innovative solutions that harness the power of AI.
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
        <!-- Data Scientist Section -->
        <div class="exp-item" id="exp-4">
            <div class="exp-info">
                <h5>Data Scientist (remote):</h5>
                <h6>At <a class="non_underline-link" href="https://www.linkedin.com/company/open-power-uk/" target="_blank">Open-Power</a>, renewable energy power generation [Fall 2023 - Summer 2024]</h6>
                <h6>My duties were:</h6>
                <ul class="duties">
                    <li>Developed and deployed an <a class="non_underline-link" onclick="show_solar_panel_tool()" href="#">online ML tool</a> for solar panel detection from scratch (PyTorch)</li>
                    <li>Developed ML models for solar energy prediction</li>
                </ul>
            </div>
            <img src="data/solar-finder.png" class="exp-img" id="solar-img" alt="ML tool for solar panel detection">
        </div>
        <!-- Previous sections -->
        <div class="exp-item" id="exp-2">
            <div class="exp-info">
                <h5>Research and development Intern:</h5>
                <h6>At <a class="non_underline-link" href="https://www.roshan-ai.ir/">Roshan-AI</a>, a knowledge enterprise [summer 2020]</h6>
                <h6>My duties were:</h6>
                <ul class="duties">
                    <li>Gathering a Persian text corpus by developing a <a class="non_underline-link" href="https://github.com/srmt99/web-crawler" id="home">web crawler</a></li>
                    <li>Using the same data to learn Persian word embeddings</li>
                    <li>Designing a stock market predictor model and Gathering its data</li>
                </ul>
            </div>
            <img src="data/roshan-icon.jpg" class="exp-img" id="roshan-icon" alt="Roshan-AI icon">
        </div>
        <div class="exp-item" id="exp-3">
            <div class="exp-info">
                <h5>Voluntary research assistant:</h5>
                <h6>Under the supervision of <a class="non_underline-link" href="https://scholar.google.ca/citations?user=zFsdqo8AAAAJ&hl=en">dr. Safabakhsh</a> [spring 2020]</h6>
                <h6>This was where I learned, in practice, about time-series data, various layer types and how to work with TensorFlow, TensorBoard, and Keras.</h6>
                <h6>Our work mostly included:</h6>
                <ul class="duties">
                    <li>Implementing <a class="non_underline-link" href="https://github.com/srmt99/stock-market" id="home">RNN models</a> for stock market prediction</li>    
                    <li>Gathering and preprocessing the needed data, and experimenting many different model architectures on them</li>
                </ul>
            </div>
            <img src="data/stock-short.jpg" class="exp-img" id="stock-short" alt="Stock market prediction using RNNs">
        </div>
        <div class="exp-item" id="exp-1">
            <div class="exp-info">
                <h5>I have also been a teaching assistant in several courses:</h5>
                <ul id="tas">
                    <li><strong>ECE 250: Algorithms & Data Structures </strong> [Winter 2024]</li>
                    <li><strong>ECE 150: Fundamentals of Programming </strong> [Fall 2023]</li>
                    <li><strong>ECE 252: Systems Programming and Concurrency</strong> [Spring 2023]</li>
                    <li><strong>Computational Intelligence</strong> [fall 2020 - fall 2021]</li>
                    <li><strong>Artificial intelligence</strong> [fall 2021]</li>
                    <li><strong>Data Mining</strong> [spring 2021]</li>
                    <li><strong>Principles of Cloud Computing</strong> [spring 2021]</li>
                    <li><strong>Operating Systems</strong> [spring 2020]</li>
                    <li><strong>Computer Architecture</strong> [fall 2019]</li>
                </ul>
                <h6>I was primarily responsible for:</h6>
                <ul class="duties">
                    <li>Holding office hours for students and helping with their course work</li>
                    <li>Designing and grading assignments, quizzes, and course projects</li>
                    <li>Creating video tutorials, assignment solutions, and extra resources</li>
                    <li>Coordinating the teaching assistance team (when I was the head TA)</li>
                </ul>
            </div>
            <img src="data/Screenshots.jpg" class="exp-img" id="crs-tutorial" alt="course tutorials by Soroush Mortazavi Moghaddam">
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

function show_masc_thesis() 
{
    document.getElementById("content").innerHTML = `
    <header>
    <h1>Robust RL for LTLf Tasks (MASc Thesis)</h1>
    <h5>
        This work was published at the 37th Canadian Conference on Artificial Intelligence (CAIAC 2024) and received the 
        <strong>Best Paper Award</strong>. 
        You can see it 
        <a class="non_underline-link" href="https://caiac.pubpub.org/pub/xgjwp6n6/release/2" target="_blank">here</a>.
    </h5>
    </header>
    <p>
    Using a combonation of Monte-Carlo Tree-Search and Neural Networks, inspired by the famous <a class="non_underline-link" href="https://www.nature.com/articles/nature24270">AlphaGo Zero framework</a>, I developed a way to satisfy complex LTLf tasks.
    </P>
    <img class="proj-description-img" src="data/RRL-LTLF.png" alt="Illustration of RL for LTLf Tasks" class="exp-img">
    `
	document.getElementById("home").style.color = "blue"
	document.getElementById("experience").style.color = "blue"
	var projects = document.getElementsByClassName("non_underline-link blue-btn projects")
    for(var index=0;index < projects.length;index++){
        projects[index].style.color = "blue";
    }
	document.getElementById("hobbies").style.color = "blue"
    return false;
}

function show_solar_panel_tool() 
{
    document.getElementById("content").innerHTML = `
    <header>
    <h1>Online Solar Panel Detection Tool</h1>
    <h5>
        This project involved developing an online ML-based tool to scan and extract solar panels from satellite data. 
        We also created a dashboard to view, organize, and tag these solar panels, as well as extract further information based on their location, size, and other characteristics.
    </h5>
    </header>
    <p>
        The dashboard allows users to interact with the data, visualize solar panels on satellite images, and gain insights on potential energy output, panel efficiency, and more. 
    </p>
    <img class="proj-description-img" src="data/solar-dashboard.png" alt="Dashboard for Solar Panel Detection Tool" class="exp-img">
    <img class="proj-description-img" src="data/solar-dashboard2.png" alt="Dashboard for Solar Panel Detection Tool" class="exp-img">
    <p>
        In addition to detection, we developed various machine learning models to predict solar panel energy production for a variety of sites and different future time steps.
    </p>
    `
    document.getElementById("home").style.color = "blue";
    document.getElementById("experience").style.color = "blue";
    var projects = document.getElementsByClassName("non_underline-link blue-btn projects");
    for(var index = 0; index < projects.length; index++){
        projects[index].style.color = "blue";
    }
    document.getElementById("hobbies").style.color = "blue";
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
        <div class="proj-item " id="MASc-thesis">
            <h6><a onclick="show_masc_thesis()" class="non_underline-link" href="#">Robust RL for LTLf tasks (MASc Thesis) - CAIAC2024 best paper </a></h6>
            <img class="proj-image" src="data/RRL-LTL_sample.png" alt="">
        </div>
        <div class="proj-item " id="Open-Power" >
            <h6><a onclick="show_solar_panel_tool()" class="non_underline-link" href="#">Solar Panel Detection and Solar energy Prediction</a></h6>
            <img class="proj-image" id="AI-Projs-img" src="data/solar.jpg" alt="">
        </div>
    </div>
    <div class="row">
        <div class="proj-item " id="BS-thesis">
            <h6><a class="non_underline-link" href="https://github.com/srmt99/Gobblet-RL">Learning The Game of Gobblet (BSc Thesis)</a></h6>
            <img class="proj-image" src="data/RL_gobblet.jpg" alt="">
        </div>
        <div class="proj-item " id="AI-Projs" >
            <h6><a class="non_underline-link" href="https://github.com/srmt99/AI-course">Some of AI-Related Course Projects</a></h6>
            <img class="proj-image" id="AI-Projs-img" src="data/AI_Projs.png" alt="">
        </div>
    </div>
	<div class="proj-item">
        <h6><a class="non_underline-link" href="https://github.com/srmt99/stock-market">Stock Market Predictor (research project)</a></h6>
        <img class="proj-image width-90" src="data/stock.jpg" alt="">
    </div>
    <div class="proj-item">
        <h6><a class="non_underline-link" href="https://github.com/srmt99/machine-learning/tree/master/captcha-conv">Portal CAPTCHA Solver (personal project)</a></h6>
        <img class="proj-image width-90" src="data/CAPTCHA_solver.jpg" alt="">
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
        <h6>I deeply enjoy camping and outdoor activities. I love spending time in the nature and try to do that in my free time</h6>
    </div>
    <div class="outdoors">
        <img class="outdoors-image" src="data/outdoors.jpg" alt="Camping and outdoor activities" style="width:100%; height:auto;">
    </div>

    <div class="content-header">
        <h6>Besides that, I also love drawing and sketching, especially portrays. Here are some of my works:</h6>
    </div>

    <div class="arts">
		<img class="arts-image" src="data/artwork_1.jpg" alt="">
		<img class="arts-image" src="data/artwork_2.jpg" alt="">
		<img class="arts-image" src="data/artwork_3.jpg" alt="">
	</div>
	<div class="arts">
		<img class="arts-image" src="data/artwork_4.jpg" alt="">
		<img class="arts-image" src="data/artwork_5.jpg" alt="">
		<img class="arts-image" src="data/artwork_6.jpg" alt="">
	</div>
	
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