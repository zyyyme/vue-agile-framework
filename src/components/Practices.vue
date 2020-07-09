<template>
  <div id='app'> 
    <div class='container col-10 col-lg-8 mt-5'>

     <!-- intro -->
     <div class="text-overview d-flex flex-column align-items-center mt-4">
         <h5 class='col-12'>Practices included in minimal set are marked in <span class='included'>green</span></h5>
    </div>
    </div>
    <div class="box" id="left-box">
        <div class="examples" id="plan"><b-button variant='link' v-b-modal="'planning-game-modal'" class='included'>Planning game </b-button>
            <br><b-button variant='link' v-b-modal="'planning-poker-modal'">Estimation (Planning Poker)</b-button>
            <br><b-button variant='link' v-b-modal="'stand-up-modal'" class='included'>Daily Stand-Ups</b-button>
            <br><b-button variant='link' v-b-modal="'iter-dev-modal'">Iterative and Incremental Development</b-button>
            <br><b-button variant='link' v-b-modal="'staging-modal'">Staging</b-button>
            <br><b-button variant='link' v-b-modal="'user-stories-modal'" class='included'>User Stories</b-button></div>
        
        <div class="examples" id="develop">
            <b-button variant='link' v-b-modal="'testing-modal'"  class='included'>Testing</b-button>
            <br><b-button variant='link' v-b-modal="'refactoring-modal'">Refactoring</b-button>
            <br><b-button variant='link' v-b-modal="'ci-modal'">Continuous Integration</b-button>
            </div>
        
        <div class="examples" id="analyze">
            <b-button variant='link' v-b-modal="'daily-burndown-modal'">Daily Burndown Chart</b-button>
            <br><b-button variant='link' v-b-modal="'iter-retrospective-modal'">Iteration Retrospective</b-button>
            <br></div>

    </div><div class="box" id="left-dop-box">
        <div class="dop-examples" id="d1"></div>
        <div class="dop-examples" id="d2"></div>
        <div class="dop-examples" id="d3"></div>
    </div><div class="box" id="main-box">
        
        <div class="types right" id="top">Design</div>
        <div class="types left">Plan</div>
        <div class="types right">Communicate</div>
        <div class="types left">Develop</div>
        <div class="types right">Improve</div>
        <div class="types left" id="bottom">Analyze</div>

    </div>
    
    <div class="box" id="right-dop-box">
        <div class="dop-examples" id="d4"></div>
        <div class="dop-examples" id="d5"></div>
        <div class="dop-examples" id="d6"></div>
    </div>
    
    <div class="box" id="right-box">
        <div class="examples" id="design">
            <b-button variant='link' v-b-modal="'modelling-modal'" class='included'>Modelling</b-button>
            <br><b-button variant='link' v-b-modal="'how-might-we-modal'">How Might We</b-button>
            <br><b-button variant='link' v-b-modal="'five-whys-modal'">Five Whys (Inspiration)</b-button>
            <br><b-button variant='link' v-b-modal="'download-learnings-modal'">Download Your Learnings(Ideation)</b-button></div>
        <div class="examples" id="communicate">
            <b-button variant='link' v-b-modal="'daily-communication-modal'">Daily communication</b-button>
            <br><b-button variant='link' v-b-modal="'lrp-modal'" class='included'>Last responsible moment</b-button>
            <br><b-button variant='link' v-b-modal="'workshops-modal'" class='included'>Workshops</b-button>
            <br><b-button variant='link' v-b-modal="'system-metaphor-modal'">System metaphor</b-button></div>
        <div class="examples" id="improve">
            <b-button variant='link' v-b-modal="'methodology-shaping-modal'" class='included'>Methodology Shaping</b-button>
            <br><b-button variant='link' v-b-modal="'pair-programming-modal'">Pair Programming</b-button>
            <br><b-button variant='link' v-b-modal="'sustainable-pace-modal'" class='included'>Sustainable Pace</b-button>
             <br><b-button variant='link' v-b-modal="'simple-design-modal'">Simple Design</b-button>
            </div>
    </div>

    <b-modal size='xl' id='user-stories-modal' title='User Stories' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'> Project - Planning. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To articulate how a piece of work will deliver a particular value. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Project Manager. </h5>
        <h3>Created Artifacts: </h3> 
        <h5 class='modal-text'> Product Backlog. </h5>
        <br>
        <h5> In software development and product management, a user story is an informal, 
            natural language description of one or more features of a software system. 
            User stories are often written from the perspective of an end user or user of a system. </h5>
        <h3>Steps: </h3>
        <ol>
            <li><h5>Consider the scope of users for the product. 
                Consider division of users into groups by certain properties. </h5></li>
            <li><h5>Consider the scope of intentions and wishes of each group of users. </h5></li>
            <li><h5>Consider overall benefits achieved by implementation of each 
                intention of a users’ group. </h5></li>
            <li><h5>Use one of the formats to create a user story. The most common template
                 is the Connextra template, stated below. </h5>
                <h5 class='quote'> As a "role", I can "capability", so that "received benefit" </h5>     
            </li>
        </ol>

    </b-modal>
    <b-modal size='xl' id='planning-game-modal' title='Planning Game' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'> Project - Planning. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To share planning responsibilities 
            between the Development Team and the Project Manager. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Project Manager, Team Leader, Development Team, Tester. </h5>
        <h3>Created Artifacts: </h3> 
        <h5 class='modal-text'> Iteration Backlog. </h5>
        <br>
        <h5> In the process of planning the Project Manager must provide all the necessary 
            information on the project’s value. Usually, it is provided in short user 
            stories that are prioritized by the business points: </h5>
        <h5> 1 - not very necessary </h5>
        <h5> 5 - will be good to have </h5>
        <h5> 10 - should have </h5>
        <h5> 25 - must have </h5>
        <h5> 50 - amazing thing, should be done right now! </h5>
        <h3>Steps: </h3>
        <ol>
            <li><h5> Creation or selection of the story </h5>
                <h5>Firstly, the Project Manager must create a certain user story or 
                    select it from their list. Such stories will be analyzed and 
                    prioritized during the Planning Game. They will formulate the 
                    basis of the future project’s plan. </h5></li>
            <li><h5> Story estimation </h5>
                <h5>This step of the Planning Game is conducted by the team of developers. 
                    They must estimate the story in accordance with the criteria of time 
                    and costs required for its realization. Stories might be estimated 
                    using Planning Poker practice. </h5></li>
            <li><h5> Prioritization of stories </h5>
                <h5>This is the beginning of the project’s plan. The Project Manager 
                    places the estimated user story into the plan. </h5></li>
            <li><h5> The process is repeated </h5>
                <h5>After one story is estimated and prioritized in the project’s plan 
                    the process is repeated until the plan is completed. </h5>   
            </li>
        </ol>

    </b-modal>
    <b-modal size='xl' id='planning-poker-modal' title='Estimation (Planning Poker)' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'> Project - Planning. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To estimate effort or relative size of a user story while 
            avoiding the influence of other teammates. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Coach, Team Leader, Development Team, Tester </h5>
        <br>
        <h5> In planning poker, members of the team make estimates by playing numbered 
            cards face-down to the table, instead of speaking them aloud. The cards are 
            revealed, and the estimates are then discussed. By hiding the figures in this 
            way, the group can avoid the cognitive bias of anchoring, where the first 
            number spoken aloud sets a precedent for subsequent estimates. </h5>
        <h3>Steps: </h3>
        <ol>
            <li>
                <h5>A Coach, who will not play, chairs the meeting. </h5>
                <h5> The Project Manager provides a short overview of one user story to 
                be estimated. The team is given an opportunity to ask questions and 
                discuss to clarify assumptions and risks. A summary of the discussion 
                is recorded by the Coach.</h5></li>
            <li>
                <h5>Each member of the development team lays a card face down representing
                     their estimate for the story. Units used vary - they can be days
                      duration, ideal days or story points. During discussion, numbers
                       must not be mentioned at all in relation to feature size
                        to avoid anchoring. </h5></li>
            <li>
                <h5>Everyone calls their cards simultaneously by turning them over. </h5></li>
            <li>
                <h5>People with high estimates and low estimates are given a soap box to 
                    offer their justification for their estimate and then discussion continues. </h5>   
            </li>
            <li>
                <h5>Repeat the estimation process until a consensus is reached. 
                    The developer who was likely to own the deliverable has a 
                    large portion of the "consensus vote", although the Team Leader 
                    can negotiate the consensus. </h5>   
            </li>
        </ol>

    </b-modal>
    <b-modal size='xl' id='iter-dev-modal' title='Iterative and Incremental Development' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'> Project - Planning. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To develop a system through repeated cycles 
            and in smaller portions at a time to take advantage of what was 
            learned during development of earlier parts or versions of the system. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> All roles. </h5>
        <h3>Created Artifacts: </h3> 
        <h5 class='modal-text'> Iteration Backlog. </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li><h5>Learning comes from both the development and use of the system, 
                where possible key steps in the process start with a simple implementation 
                of a subset of the software requirements and iteratively enhance the 
                evolving versions until the full system is implemented. At each iteration, 
                design modifications are made and new functional capabilities are added. </h5></li>
            <li><h5>This practice allows to divide the overall process of the product development 
                into iterations - fixed time intervals. The length of a single Iteration varies 
                from two to four weeks.  </h5></li>
            <li><h5>Incremental development slices the system functionality into increments 
                (portions). In each increment, a slice of planned functionality is delivered. 
                The planning occurs during the Planning Stage of the Project Phase. </h5></li>
        </ul>

    </b-modal>
    <b-modal size='xl' id='staging-modal' title='Staging' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'> Project - Planning. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To manage the duration of a single Iteration 
            more precisely and effectively. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Team Leader, Development Team, Tester </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li><h5>An Iteration is a fixed period of time, at the end of which an objective 
                has been met. The objective is usually completion of one or more deliverables. </h5></li>
            <li><h5>The optimum length for an Iteration is typically between two and four 
                weeks – long enough to achieve something useful, short enough to 
                keep the team focused. </h5></li>
            <li><h5>Every iteration is divided into stages: Planning, Development, 
                Iteration Analysis. And each stage has its own activities and 
                practices to perform. </h5></li>
        </ul>
        <h3>Steps: </h3>
        <ol>
            <li>
                <h5>Determine which stages will be necessary or which one can
                     be omitted due to valid reasons. </h5>
            </li>
            <li>
                <h5>Determine activities within each stage and time intervals 
                    needed for these activities. </h5></li>
            <li>
                <h5>Follow thoroughly the composed and discussed schedule. </h5></li>
        </ol>
    </b-modal>
    <b-modal size='xl' id='stand-up-modal' title='Daily Stand-Ups' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'> Project - Development. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To develop a system through repeated cycles 
            and in smaller portions at a time to take advantage of what was 
            learned during development of earlier parts or versions of the system. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> All roles. </h5>
        <h3>Created Artifacts: </h3> 
        <h5 class='modal-text'> Iteration Backlog. </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li><h5>Learning comes from both the development and use of the system, 
                where possible key steps in the process start with a simple implementation 
                of a subset of the software requirements and iteratively enhance the 
                evolving versions until the full system is implemented. At each iteration, 
                design modifications are made and new functional capabilities are added. </h5></li>
            <li><h5>This practice allows to divide the overall process of the product development 
                into iterations - fixed time intervals. The length of a single Iteration varies 
                from two to four weeks.  </h5></li>
            <li><h5>Incremental development slices the system functionality into increments 
                (portions). In each increment, a slice of planned functionality is delivered. 
                The planning occurs during the Planning Stage of the Project Phase. </h5></li>
        </ul>

    </b-modal>
    <b-modal size='xl' id='modelling-modal' title='Modelling' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'> Pre-Project, Project. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To simplify core 
            elements of a requirement(user story) and improve 
            understanding through visual representations. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Team Leader, Development Team, Tester. </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li><h5>Modelling helps to make elements of the solution visible as early as 
                possible. However, the amount of time and effort put into a model 
                should only be just enough to satisfy the purpose of the model and no more. </h5></li>
            <li><h5>To enhance clarity, modelling usually incorporates some degree of 
                abstraction, which involves omitting certain information from the 
                model to allow clearer focus on another specific aspect.  </h5></li>
        </ul>
        <h3>Steps: </h3>
        <ol>
            <li>
                <h5>Answer the following questions: Who is this model for? Why does the team need it?</h5>
            </li>
            <li>
                <h5>Make a table to gain a coherent picture of a solution by considering the 
                    perspectives that are needed: “what”, “where”, “when”, “how”, “who”, “why”.  </h5>
                <h5>“What” - the information within the solution area. </h5>
                <h5>“Where” - locations at which the product will operate in 
                    relation to the solution area. </h5>
                <h5>“When” -  events of importance to the project. </h5>
                <h5>“How” - features, functionalities and processes within the solution area. </h5>
                <h5>“Who” - people that are related to the project and the 
                    product (users, stakeholders, developers). </h5>
                <h5>“Why” - objectives and strategies related to the project. </h5>
            </li>
            <li>
                <h5>Create a model from the scratch or use a special 
                    template/technique appropriate for the needed purpose. </h5></li>
        </ol>
    </b-modal>
    <b-modal size='xl' id='how-might-we-modal' title='How Might We' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'>Project. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To accelerate the process of innovative 
            thinking and developing a solution. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Team Leader, Development Team, Tester. </h5>
        <h3>Steps: </h3>
        <ol>
            <li>
                <h5>Identified problem areas that pose challenges to the people 
                    you’re designing for. Try rephrasing them as questions by 
                    adding “How might we” at the beginning.</h5>
            </li>
            <li>
                <h5>The goal is to find opportunities for design, 
                    so if your insights suggest several How Might We questions that’s great.  </h5>
            </li>
            <li>
                <h5>Now take a look at your How Might We question and ask yourself if 
                    it allows for a variety of solutions. If it doesn’t, broaden it. 
                    Your How Might We should generate a number of possible answers 
                    and will become a good foundation for the further brainstorm. </h5>
            </li>
            <li>
                <h5>Finally, make sure that your How Might We questions aren’t too 
                    broad. It’s a tricky process but a good How Might We should 
                    give you both a narrow enough frame to let you know where to 
                    start a brainstorm process, but also enough breadth to give you 
                    room to explore wild ideas. </h5>
            </li>
        </ol>
    </b-modal>
    <b-modal size='xl' id='five-whys-modal' title='Five Whys' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'>Pre-Project, Project - Iteration Analysis. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To uncover deep motivations and assumptions 
            that underpin a person’s behaviour. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> ALL roles. </h5>
        <br>
        <h5>The Five Whys is a fantastic method used to discover core motivations 
            and needs of the customer. Then during the Feasibility and Foundations 
            Stages the Project Manager discusses these motivations with the team 
            (Team Leader, Development Team, Tester roles). Also, it can be useful 
            if you’re trying to get at the human and emotional roots of a problem 
            during Workshops practice.</h5>
        <h3>Steps: </h3>
        <ol>
            <li>
                <h5>This one is pretty easy. Start by asking a pretty broad question 
                    about your Interview participant’s habits or behaviors then 
                    ask “why” to their response five times in a row.</h5>
            </li>
            <li>
                <h5>Write down what you hear, paying special attention to moments 
                    when it feels like you’ve moved a level deeper into understanding 
                    why the person does what she does.  </h5>
            </li>
            <li>
                <h5>Keep in mind that you might not get to the core stuff until the 
                    fourth or fifth “Why.” </h5>
            </li>
        </ol>
    </b-modal>
    <b-modal size='xl' id='download-learnings-modal' title='Download Your Learnings' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'>Project - Planning. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To share gathered information with other team members. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Team Leader, Development Team, Tester. </h5>
        <br>
        <h5>This is a rich and powerful way to share what you’ve heard and part of the 
            goal is to make your individual learnings part of the collective 
            group’s knowledge base.</h5>
        <h3>Steps: </h3>
        <ol>
            <li>
                <h5>Take turns Downloading. Start by getting rid of other 
                    distractions and sitting in a circle.</h5>
            </li>
            <li>
                <h5>When it’s your turn, put all key information you’re 
                    about to share on Post-its and use them as you describe 
                    who you met, what you saw, the facts you gathered, and 
                    your impressions of the experience. </h5>
            </li>
            <li>
                <h5>Cluster the Post-its together as you put them on the 
                    wall or on a board so that you have a record of your discussion. </h5>
            </li>
            <li>
                <h5>When it’s not your turn, pay close attention. Feel free 
                    to ask questions if something isn’t clear. </h5>
            </li>
        </ol>
    </b-modal>
    <b-modal size='xl' id='daily-communication-modal' title='Daily Communication' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'>Project. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To ensure the alignment with client’s requirements on a daily basis. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Project Manager, Team Leader, Development Team, Tester. </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li>
                <h5>The project goals are a shared responsibility and the development 
                    is an ongoing conversation across the whole team. It is a 
                    cooperative game of invention and communication. That’s why 
                    this practice promotes daily communication of developers 
                    (Team Leader, Development Team, Tester) who are responsible 
                    for the technical part and the Project Manager who is responsible 
                    for the business part.</h5>
            </li>
            <li>
                <h5>All the contributors to an Extreme Programming project, 
                    including the Project Manager are one team. </h5>
            </li>
            <li>
                <h5>The Project Manager provides requirements, sets priorities 
                    and steers the project. This enables this person to understand 
                    the practical details of development and set the priorities 
                    and expectations accordingly. </h5>
            </li>
        </ul>
    </b-modal>
    <b-modal size='xl' id='lrp-modal' title='The Last Responsible Moment' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'>Project. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To prevent large upfront designs 
            and overplanning that are expensive and unresponsive to future changes. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Project Manager, Team Leader, Development Team, Tester. </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li>
                <h5>It's a solid, fundamental risk avoidance strategy. Decisions 
                    made too early in a project are hugely risky. Early decisions 
                    often result in work that has to be thrown away. Even worse, 
                    those early decisions can have crippling and unavoidable 
                    consequences for the entire future of the project</h5>
            </li>
            <li>
                <h5>The key is to make decisions as late as you can responsibly 
                    wait because that is the point at which you have the most 
                    information on which to base the decision. In software design 
                    it means you forgo creating generalized solutions or class 
                    structures until you know that they're justified or necessary. </h5>
            </li>
   
        </ul>
        <h3>Steps: </h3>
        <ol>
            <li>
                <h5>First, you have to determine as best you can the cost of deferring 
                    the decision. What happens if you do not make this decision right 
                    now? As long as the cost of deferring is low, you can afford to 
                    wait. What you are waiting for is more information from which to 
                    inform the decision. This could come from: user feedback, organizational 
                    policies, technical discoveries and external factors.</h5>
            </li>
            <li>
                <h5>If the cost of deferring is not so clear or seems to rise, then you 
                    may be closer to needing to make the decision. The next thing you 
                    will need to consider is the cost of deciding right now. Do you 
                    foresee any new information that could come along and change this 
                    decision in the near term – before you can see value from it? </h5>
            </li>
            <li>
                <h5>Come up with things that should be postponed and things that must be decided. </h5>
            </li>
        </ol>
    </b-modal>
    <b-modal size='xl' id='workshops-modal' title='Workshops' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'>Project - Iteration Analysis. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To encourage collaborative working and enable high quality teamwork. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Coach, Team Leader, Development Team, Tester. </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li>
                <h5>A workshop is a specialized type of meetings having three main components. 
                    First one is clear objectives for the meeting. Second is a set of 
                    people from the team (Team Leader, Development Team, Tester) 
                    specifically chosen to achieve these goals. And finally a Coach 
                    to guide the group through the workshop.</h5>
            </li>
            <li>
                <h5>Benefits of Workshops include building and strengthening the team 
                    spirit, improving soft skills of the participants and training 
                    performance of Framework’s practices. </h5>
            </li>
   
        </ul>
        <h3>Steps: </h3>
        <ol>
            <li>
                <h5>Define, plan and prepare for the Workshop.</h5>
            </li>
            <li>
                <h5> Facilitate the Workshop session: run 
                    the Workshop and Workshop retrospective; make conclusions 
                    and prepare a plan for future improvements </h5>
            </li>
            <li>
                <h5>Follow with the post-Workshop plan of actions. </h5>
            </li>
        </ol>
    </b-modal>
    <b-modal size='xl' id='system-metaphor-modal' title='System Metaphor' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'>Project. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To communicate effectively the content and 
            the goals of the product, using the correct labels and words. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Project Manager, Team Leader, Development Team, Tester. </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li>
                <h5>The most important quality is being able to explain the 
                    system design to new people without resorting to sophisticated 
                    details on them. A design should have a structure that helps 
                    new people begin contributing quickly.</h5>
            </li>
            <li>
                <h5>Principles of the Metaphor: a Unified Story and a Shared Vision. </h5>
            </li>
            <li>
                <h5>The Unified Story Principle claims that all participants 
                    of the development process must use and understand the same 
                    story with common labels, names and words. </h5>
            </li>
            <li>
                <h5>The Shared Vision claims that all participants of the 
                    development process must see themselves as a whole 
                    with one vision or one story. </h5>
            </li>
        </ul>
    </b-modal>
    <b-modal size='xl' id='testing-modal' title='Testing' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'>Project - Development. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Team Leader, Development Team, Tester. </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li>
                <h5>The developers continually write unit tests, which need 
                    to pass for the development to continue. Unit tests 
                    determine whether a given feature works as intended. 
                    Developers write as many automated tests as they can 
                    think of that might "break" the code; if all tests 
                    run successfully, then the coding is complete. Every 
                    piece of code that is written is tested before moving 
                    on to the next feature</h5>
            </li>
            <li>
                <h5>Tester helps Project Manager to design acceptance tests 
                    to verify that the features are implemented appropriately. 
                    Acceptance tests verify that the requirements as understood 
                    by the team satisfy the actual requirements of the Project Manager. </h5>
            </li>
            <li>
                <h5>Tests should be automated so that they become a part of 
                    the system and can be continuously run to ensure the working of the system. </h5>
            </li>
            <li>
                <h5>Moreover, there should be a test environment - a special computer 
                    system in which the software being developed is deployed and 
                    executed. Upon test failure, the test environment can remove 
                    the faulty code from the test platforms, contact the responsible 
                    developer, and provide detailed test and result logs. If all 
                    tests pass, the test environment or a continuous integration 
                    framework controlling the tests can automatically promote the 
                    code to the next deployment environment. </h5>
            </li>
            <li>
                <h5>It is highly recommended when fixing a bug to push a test 
                    case that reproduces the bug. This avoids the fix 
                    being reverted, and the bug to reappear. </h5>
            </li>
        </ul>
    </b-modal>
    <b-modal size='xl' id='refactoring-modal' title='Refactoring' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'>Project - Development. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> Prompts the team to proactively improve the product as a whole. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Team Leader, Development Team, Tester. </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li>
                <h5>When implementing a feature, the developers always ask if 
                    there is a way of changing the existing code to make adding 
                    the feature simple. After they have added a feature, the 
                    developers ask if they now can see how to make the code simpler, 
                    while still running all of the tests. They restructure the system 
                    without changing its behavior to remove duplication, improve 
                    communication, or add flexibility.</h5>
            </li>
            <li>
                <h5>It is recommended to use it with the Simple Design practice. </h5>
            </li>
        </ul>
    </b-modal>
    <b-modal size='xl' id='ci-modal' title='Continous Integration' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'>Project - Development. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To identify and remove bugs faster improving the quality of 
            the product. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Development Team, Tester. </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li>
                <h5>Continuous Integration is a software development practice 
                    wherein the code is stored in the central repository, in a 
                    way that it is accessible; once the system is received, 
                    automated builds and tests are run on it.</h5>
            </li>
            <li>
                <h5>It enhances the developer's productivity and helps 
                    release versions quickly and easily.. </h5>
            </li>
            <li>
                <h5>The key principle claims that the more you 
                    integrate the less errors arise and more coordinated 
                    teamwork is. That’s why every developer must commit 
                    to the baseline at least once a day. </h5>
            </li>
        </ul>
    </b-modal>
    <b-modal size='xl' id='daily-burndown-modal' title='Daily Burndown Chart' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'>Project - Development, Iteration Analysis. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To enable that the project is on the track to 
            deliver the expected solution within the desired schedule. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Team Leader, Development Team, Tester. </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li>
                <h5>A burndown chart is a graphical representation of work 
                    left to do versus time.</h5>
            </li>
            <li>
                <h5>A general burndown chart consists of: </h5>
                <ul>
                    <li><h5>X axis to display working days </h5></li>
                    <li><h5>Y axis to display remaining effort </h5></li>
                    <li><h5>Ideal effort as a guideline </h5></li>
                    <li><h5>Real progress of effort </h5></li>
                </ul>
            </li>
            <li>
                <h5>To create this graph, determine how much work 
                    remains by summing the Iteration Backlog 
                    estimates every day of the Iteration. The 
                    amount of work remaining for an Iteratio is 
                    the sum of the work remaining for the whole 
                    Iteration Backlog. Keep track of these sums 
                    by day and use them to create a graph that 
                    shows the work remaining over time. </h5>
            </li>
        </ul>
        <h3>Steps: </h3>
        <ol>
            <li><h5>Create Estimate Effort </h5>
                <h5>Suppose your ideal baseline for using the available hours over the 
                    sprint.  So in the simplest for this is the available hours divided 
                    by the number of days.</h5>
            </li>
            <li><h5>Track Daily Process </h5>
                <h5>The daily progress is then captured in the table against each task. 
                    It is important to remember that the value captured for each day 
                    is the estimated effort to complete the task, not the actual effort.</h5>
            </li>
            <li><h5>Compute the Actual Effort </h5>
                <h5>The total remaining effort needs to be captured at the end of each 
                    day.  This is the total (sum) of all of the estimated time 
                    remaining at the end of each day.</h5>
            </li>
            <li><h5>Obtain the Final Dataset </h5>
                <h5>When the data is available, the project burn-down chart can be 
                    created. This is relatively simple using the line chart option 
                    available within Excel. Highlight the summary table that contains 
                    the daily total for baseline effort and estimated effort. 
                    You should also capture the heading of the time period (Day 0, Day 1, etc).</h5>
            </li>
            <li><h5>Plot the Burndown Chart </h5></li>
        </ol>
    </b-modal>
    <b-modal size='xl' id='iter-retrospective-modal' title='Iteration Retrospective' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'>Project - Iteration Analysis. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To analyze and improve the process of development and teamwork. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Coach, Team Leader, Development Team, Tester. </h5>
        <h3>Steps: </h3>
        <ol>
            <li>
                <h5>Inspect how the last Iteration went with regards to people, 
                    relationships, process and tools.</h5>
            </li>
            <li>
                <h5>Identify and order the major items that went well and potential improvements. </h5>
            </li>
            <li>
                <h5>Create a plan for improvements to be enacted during the next Iteration. </h5>
            </li>
        </ol>
    </b-modal>
    <b-modal size='xl' id='methodology-shaping-modal' title='Methodology Shaping' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'>Project - Planning. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To define the set of practices that must be 
            used during the development process. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Team Leader, Development Team, Tester. </h5>
        <h3>Steps: </h3>
        <ol>
            <li>
                <h5>Using data about the team’s performance during previous 
                    Iterations or projects, consider the set of practices 
                    that will improve the current development process.</h5>
            </li>
        </ol>
    </b-modal>
    <b-modal size='xl' id='sustainable-pace-modal' title='Sustainable Pace' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'>ALL phases (Pre-Project, Project, Post-Project). </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To ensure consistent software development 
            at a sustainable rate for extended periods of time. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'>  ALL roles. </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li>
                <h5>The concept is that programmers or software developers 
                    should not work more than 40 hour weeks, and if there 
                    is overtime one week, that the next week should not include more overtime.</h5>
            </li>
            <li>
                <h5>A key enabler to achieve sustainable pace is frequent 
                    code-merge and always test-covered high quality code. 
                    The constant refactoring way of working enforces team 
                    members with fresh and alert minds. </h5>
            </li>
            <li>
                <h5>Well-tested, continuously integrated, frequently 
                    deployed code and environments also minimize the 
                    frequency of unexpected production problems and 
                    outages, and the associated after-hours nights and 
                    weekends work that is required. </h5>
            </li>
        </ul>
    </b-modal>
    <b-modal size='xl' id='simple-design-modal' title='Simple Design' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'>Project - Development. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To make the design easier to understand and reduce time adding superfluous functionality. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'>  Development Team. </h5>
        <br>
        <h5>The system should be designed as simply as possible at any 
            given moment. Extra complexity is removed as soon as it is discovered. </h5>
        <h3>Steps: </h3>
        <ol>
            <li>
                <h5>To get a simple design, eliminate any design element that 
                    you can, without violating the following rules:</h5>
                    <ul>
                        <li><h5>Runs all the tests </h5></li>
                        <li><h5>Has no duplicated logic like parallel class hierarchies </h5></li>
                        <li><h5>States every intention important to the developers </h5></li>
                        <li><h5>Has the fewest possible classes and methods </h5></li>
                    </ul>
            </li>
        </ol>
    </b-modal>
    <b-modal size='xl' id='pair-programming-modal' title='Pair Programming' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'>Project - Development. </h5>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> To increase the quality of the product and improve teamwork skills. </h5>
        <h3>Participants: </h3> 
        <h5 class='modal-text'> Development Team. </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li>
                <h5>Pair programming is a style of programming in which two programmers 
                    work side-by-side at one computer, sharing one screen, keyboard and 
                    mouse, continuously collaborating on the same design, algorithm, code or test.</h5>
            </li>
            <li>
                <h5>One programmer, termed as the driver, has control of the keyboard/mouse 
                    and actively implements the code or writes a test. The other programmer, 
                    termed as the navigator, continuously observes the work of the driver to 
                    identify defects and also thinks strategically about the direction of the work. </h5>
            </li>
            <li>
                <h5>When necessary, the two programmers brainstorm on any challenging problem. 
                    The two programmers periodically switch roles and work together 
                    as equals to develop a software. </h5>
            </li>
        </ul>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Practices',
  data () {
    return {
      msg: "Practices"
    }
  }
}
</script>

<style scoped>
body{
    text-align: center;
}

.box{
    display: inline-block;
}

#main-box{
    width: 25%;
    margin: 8% 0;
    padding: 16px;
    background-color: #FFEA9E;
    box-shadow: 0 0 5px 1px #888;
    border-radius: 15px;
    font-weight: 500;
    font-size: 24pt;
}

#left-dop-box, #right-dop-box{
    width: 8%;
}

.types{
    margin: 32px 8px 16px 8px;
}

#top{
    margin-top: 0;
}

#bottom{
    margin-bottom: 0;
}

.left{
    text-align: left;
}

.right{
    
    text-align: right;
}

.examples{
    margin: 32px 8px 16px 0px;
    padding: 16px;

    background-color: rgba(126, 200, 189, 0.6);
    box-shadow: 0 0 6px 1px #888;
    border-radius: 15px;
    font-weight: 300;
    font-size: 16pt;
    text-align: left;
}

.dop-examples{
    border-bottom: 6px solid #333;
}

#left-dop-box{
    position: relative;
    bottom: .5em;
}

#d1, #d2{
    margin-bottom: 158px;
}

#right-dop-box{
    position: relative;
    bottom: 4em;
}

#d4,#d5,#d6 {
    position: relative;
    bottom: 16px;
}

#d4, #d5{
    margin-bottom: 160px;
}

.btn-link {
    font-weight: 300;
    font-size: 20px !important;
}

.quote{
    text-align: center;
    font-style: italic;
}

.included {
    color : #22952a !important;
}

</style>
