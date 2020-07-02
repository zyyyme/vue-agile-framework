<template>
  <div id='app'> 
    <div class="container">

        <div class="column first-col">
            <div class="text-block">
                <h3 class=" number left-number duble-down">1</h3>
                <h3 class="stage left-stage"><b-button variant="link" v-b-modal="'feasibility-modal'">Estimate feasibility</b-button></h3>            
            </div>
            <div class="text-block">
                <h3 class=" number left-number duble-down">2</h3>
                <h3 class="stage left-stage"><b-button variant="link" v-b-modal="'foundations-modal'">Estimate foundations</b-button></h3>            
            </div>
            <h2 class="header" id="pre-project">Pre-Project</h2>
        </div><!--

        --><div class="column second-col">
            <div class="text-block">
                <h3 class="number left-number triple-down">3</h3>
                
                    <h3 class="stage left-stage"><b-button variant="link" v-b-modal="'planning-stage-modal'">Planning </b-button></h3>
                
                <h5 class="left-paragraph"> choosing practices</h5>
                <h5 class="left-paragraph"> listening</h5>
                <h5 class="left-paragraph"> designing</h5>
            </div>
            <div class="text-block">
                <h3 class="number right-number triple-down">4</h3>
                <h3 class="stage right-stage center">
                    <b-button variant="link" v-b-modal="'development-modal'">Development</b-button>
                </h3>
                <h5 class="right-paragraph"> coding</h5>
                <h5 class="right-paragraph"> testing</h5>
            </div>
            <div class="text-block">
                <h3 class="number left-number triple-down">5</h3>
                <h3 class="stage left-stage center">
                    <b-button variant="link" v-b-modal="'iter-analysis-modal'">Iteration Analysis</b-button>
                </h3>
                <h5 class="left-paragraph"> review</h5>
                <h5 class="left-paragraph"> retrospective</h5>
            </div>
            <h2 class="header" id="project">Project</h2>
        </div><!--

        --><div class="column third-col">
            <div class="text-block">
                <h3 class="number right-number duble-down">6</h3>
                <h3 class="stage right-stage">
                    <b-button variant="link" v-b-modal="'finalization-modal'">Finalization & Summary</b-button>   
                </h3>
            </div>
            <div class="text-block">
                <h3 class="number right-number duble-down">7</h3><h3 class="stage right-stage">
                    <b-button variant="link" v-b-modal="'maintenance-modal'">Maintenance</b-button>
                </h3>
            </div>
            <h2 class="header" id="post-project">Post-Project</h2>
        </div>
    </div>
    <div class="text-overview d-flex flex-column align-items-center">
        <h3 class='col-6'> Overview </h3>
        <h5 class='col-6'> Our approach to development and delivery is both iterative and incremental, with the most important business needs typically being addressed early while less important features are delivered later. The iterative nature of the Framework enables business representatives to see the solution as it evolves, to provide feedback on it and to request changes throughout the development of the solution. </h5>
        <h5 class='col-6'> It is worth noting that all practices mentioned by the point “Used Practices” are taken from the Minimum Set - practices that are mandatory for execution in order to follow the Framework. </h5>
        <h5 class='col-6'> The Framework provides an iterative and incremental process, with a total of seven lifecycle stages. Each stage has a specific purpose, together with a number of defined practices and artifacts intended to support the evolution of the solution and the smooth running of the project. </h5>
    </div>

    <b-modal size='xl' id='feasibility-modal' title='Estimate Feasibility' ok-only>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> establish feasibility of the project from a technical perspective
             and its cost-effectiveness from a business perspective </h5>
        <h3>Continuity: </h3> <h5> 1 - 5 days </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li><h5>The effort associated with Feasibility should be just enough to decide whether
             further investigation is justified, or whether the project should be stopped now,
              since it is unlikely to be viable. </h5></li>
        </ul>

    </b-modal>
    <b-modal size='xl' id='foundations-modal' title='Estimate Foundations' ok-only>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> establish a fundamental (but not detailed) understanding of the
             business rationale for the project, derive the potential solution, and handle management
              of the project</h5>
        <h3>Continuity: </h3> <h5> 1 - 4 weeks </h5>
        <h3> Used Practices: </h3>
        <h5> Modelling (together with other Design Practices) </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li><h5>The aim of Foundations is to understand the scope of work, how it will be carried out, by whom,
                 when and where. Moreover, the project lifecycle is determined by agreeing how the
                  framework process will be applied to the specific needs of this project. </h5></li>
            <li><h5>Details associated with requirements, and how they should be met as part of the solution, are intentionally 
                left until the Planning and Development stages of the project.  </h5></li>
            <li><h5>An initial version of Risks Estimation Artifact is created during the Phase. </h5></li>
            <li><h5>It may sometimes be necessary to revisit Foundations during an Iteration Analysis 
                Stage on a project where the business environment is sufficiently dynamic. 
                For instance, it is highly recommended to check relevance and actuality of the 
                Risks Estimation Artifact. Returning to the Foundations stage to reaffirm and, 
                where necessary, refine the foundations of the project normally takes significantly 
                less time than establishing them in the first place. </h5></li>
            <li><h5>For smaller, simpler projects, the Feasibility and Foundations stages
                 can often be merged into a single one. </h5></li>
                
        </ul>
    </b-modal>
    <b-modal size='xl' id='planning-stage-modal' title='Planning Stage' ok-only>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> define the main features and functionalities to be delivered by the end of the Iteration. </h5>
        <h3>Continuity: </h3> <h5> 1 - 3 days </h5>
        <h3> Used Practices: </h3>
        <h5> Timeboxing, Planning Game, Methodology Shaping, Modelling  </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li><h5>First of all, Timeboxing technique allows to manage the Iteration time interval more 
                accurately and efficiently. Such effect is achieved due to division of the Iteration into 
                Timeboxes dedicated to specified activities. Timeboxing practice is already applied to the 
                Project Phase and produces three stages: Planning, Development, Iteration Analysis. </h5></li>
            <li><h5>Secondly, a Planning Game practice is used to acquire and discuss requirements with the 
                Project Manager, and plan an implementation process for these tasks - when, how, by whom they 
                will be implemented. The Iteration Backlog and team Agreement are created during 
                this practice.</h5></li>
            <li><h5>After that, there is a need to revisit Risks Estimation Artifact to estimate new 
                risks and re-estimate already assumed risks. It is done by the Project Manager, 
                Team Leader, Development Team and Tester. The Project Manager will be responsible 
                for business risks and the project as a whole. Team Leader, Development Team and Tester 
                will be in charge of risks connected with the technical part of the project.</h5></li>
            <li><h5>Then, the Development Team needs to choose the set of practices to use during the 
                Iteration. There is a Minimum Set of activities recommended to perform in order to 
                follow the philosophy of the Framework and achieve great results. Additional 
                practices can be selected to improve the quality of the Product Increment or the 
                quality of the development process itself. This is done with a Methodology Shaping 
                practice.</h5>
            <h5>It is worth noting, that during the working process of the Iteration a list of selected 
                practices might be tuned and changed. This decision is up to the team’s performance and 
                recommendations from the Coach.</h5></li>
            <li><h5>Finally, designing activity follows planning and it determines the way requirements 
                are handled at the initial stage of the project. A good design reflects the thought 
                process and creativity and calls for a lesser number of iterations, thus, ensuring high 
                levels of quality at the very start of the project. Such practice as Modelling will be 
                beneficial to collaboratively evolve diagrams and pictures that define the problem or 
                intended solution.</h5></li>
                
        </ul>
    </b-modal>
    <b-modal size='xl' id='development-modal' title='Development' ok-only>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> produce the Product Increment in accordance with the Iteration Backlog, 
            conduct testing and refactoring procedures. </h5>
        <h3>Continuity: </h3> <h5> 10 - 25 days </h5>
        <h3> Used Practices: </h3>
        <h5> Daily Stand-Ups, Testing, Refactoring  </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li><h5>Daily Stand-Ups are necessary to conduct every day at the same time for about 
                15-20 minutes to keep the team focused and aware of each other’s progress. </h5></li>
            <li><h5>Testing and Refactoring are essential to ensure the appropriate level of quality of 
                the Product Increment.</h5></li>
        </ul>
    </b-modal>
    <b-modal size='xl' id='iter-analysis-modal' title='Iteration analysis' ok-only>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> estimate the Product Increment from the business perspective with assistance 
            of the Project Manager; hold a retrospective to review the overall team’s performance </h5>
        <h3>Continuity: </h3> <h5> 1 - 6 days </h5>
        <h3> Used Practices: </h3>
        <h5> Workshops  </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li><h5>A formal review session should be conducted by the Development 
                Team(including Team Leader and Tester) and Project Manager before the solution 
                goes into operational use - to ensure the proposed release meets the 
                appropriate standards and is complete enough to be viable.</h5></li>
            <li><h5>A team’s retrospective session should be conducted 
                to review the overall Iteration performance from the technical, 
                process and business perspectives. It includes review of the Product 
                Increment, performance of the team during the Iteration, and 
                analysis of the team’s pace of work.</h5></li>
            <li><h5>Information from both the retrospective and the formal review of the 
                product help shape plans for future increments and can be used to 
                facilitate learning across projects within a portfolio.</h5></li>
            <li><h5>Workshops are specialized meetings to achieve more effective teamwork 
                and train execution of different practices used in the Framework.</h5></li>
        </ul>
    </b-modal>
    <b-modal size='xl' id='finalization-modal' title='Finalization & Summary' ok-only>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> check how well the expected business benefits have been met </h5>
        <h3>Continuity: </h3> <h5> 1 - 4 weeks </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li><h5>Although it may be possible to highlight immediate benefits, most 
                benefits will accrue over a predefined period of live use of the solution. 
                Benefits may be assessed for individual releases (in which case the 
                assessment of benefit should start before the Post-Project Phase is reached), 
                for the whole project or may be omitted completely, depending on the needs of 
                the organisation.</h5></li>       
        </ul>
    </b-modal>
    <b-modal size='xl' id='maintenance-modal' title='Maintenance' ok-only>
        <h3>Purpose: </h3> 
        <h5 class='modal-text'> maintain the appropriate functionality of the product </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li><h5>Now, the product is formally and officially approved by the Project Manager. 
                Moreover, as time goes by, a need for enhancements and improvements may arise. 
                So, thorough observation of the product’s functioning is essential and crucial 
                as well as the development process. </h5></li>
        </ul>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Stages',
  data () {
    return {
      msg: 'Stages'
    }
  }
}
</script>

<style scoped>
.container{
    margin: 4% auto;
}

.column{
    display: inline-block;
    width: calc(1/3*100%);
}

/* borders */
.first-col{
    border-left: 2px solid #333;
}

.third-col{
    border-right: 2px solid #333;
}

.second-col{
    border-left: 2px solid #333;
    border-right: 2px solid #333;
    position: relative;
}
/* fonts */
.header{
    font-size:24pt;
    text-align: center;
    margin: auto 0 auto;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
}

.text-block>h3{
    font-size: 20pt;
    font-weight: 500;
}

.text-block>h5{
    font-size: 16pt;
    margin: 8px 0;
    font-weight: 300;
}

/* headers */
#pre-project{
    background-color: rgba(34, 142, 149, 0.9);
}

#project{
    background-color: #78C0B6;
}

#post-project{
    background-color: rgba(126, 200, 189, 0.6);
    margin-top: 1em;
}

/* numbers */
.number{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: .1px solid #333;
    background-color: #FFEA9E;

    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.left-number{
    margin-right: 5px;
    margin-left: -18px;
    float: left;
}

.right-number{
    margin-left: 5px;
    margin-right: -18px;
    float: right;
}

/* stages */
.stage{
    display: block;
}

.right-stage{
    text-align: right;
}

.left-stage{
    text-align: left;
}


.text-block{
    margin-bottom: 64px;
}


.right-paragraph{
    text-align: right;
    padding-right: 24px;
}

.left-paragraph{
    text-align: left;
    padding-left: 24px;
}

.text-overview {
    margin-bottom: 64px;
}

.text-overview>h5{
    font-weight: 300;
}

.modal-title{
    font-weight: 500;
    font-size: 24pt !important;
}
.modal-body>h5{
    font-weight: 300;
}
.modal-body>h3{
    font-size:20pt !important;
    margin: 16px 0;
}
li>h5{
    font-weight: 300;
    line-height: 28px;
}

li {
    margin: 16px 0;
}

.btn-link{
    color: #333 !important;
    font-size: 20pt !important;
    display: inline!important;
    padding: 0 !important;
}
</style>
