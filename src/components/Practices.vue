<template>
  <div id='app'> 
    <div class="box" id="left-box">
        <div class="examples" id="plan"><b-button variant='link'>Planning game </b-button>
            <br><b-button variant='link'>Daily Stand-Ups</b-button>
            <br><b-button variant='link'>User Stories</b-button></div>
        <div class="examples" id="develope"><b-button variant='link'>Iterative Development</b-button>
            <br><b-button variant='link'>Timeboxing</b-button>
            <br><b-button variant='link'>Testing</b-button>
            <br><b-button variant='link'>Continuous Integration</b-button></div>
        <div class="examples" id="analyze"><b-button variant='link'>Daily Burnt Down Chart</b-button>
            <br><b-button variant='link'>System metaphor</b-button></div>

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
        <div class="examples" id="design"><b-button variant='link'>Modelling</b-button>
            <br><b-button variant='link'>How Might We</b-button>
            <br><b-button variant='link'>Five Whys (Inspiration)</b-button>
            <br><b-button variant='link'>Download Your Learnings(Ideation)</b-button>
            <br><b-button variant='link'>Group Interview (Inspiration)</b-button></div>
        <div class="examples" id="communicate"><b-button variant='link'>Daily communication</b-button>
            <br><b-button variant='link'>Last responsible moment</b-button>
            <br><b-button variant='link'>Workshops</b-button></div>
        <div class="examples" id="improve"><b-button variant='link'>Methodology Shaping</b-button>
            <br><b-button variant='link'>Pair Programming</b-button>
            <br><b-button variant='link'>Sustainable Pace</b-button>
            <br><b-button variant='link'>Refactoring</b-button></div>
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
            <li><h3> Creation or selection of the story </h3>
                <h5>Firstly, the Project Manager must create a certain user story or 
                    select it from their list. Such stories will be analyzed and 
                    prioritized during the Planning Game. They will formulate the 
                    basis of the future project’s plan. </h5></li>
            <li><h3> Story estimation </h3>
                <h5>This step of the Planning Game is conducted by the team of developers. 
                    They must estimate the story in accordance with the criteria of time 
                    and costs required for its realization. Stories might be estimated 
                    using Planning Poker practice. </h5></li>
            <li><h3> Prioritization of stories </h3>
                <h5>This is the beginning of the project’s plan. The Project Manager 
                    places the estimated user story into the plan. </h5></li>
            <li><h3> The process is repeated </h3>
                <h5>After one story is estimated and prioritized in the project’s plan 
                    the process is repeated until the plan is completed. </h5>   
            </li>
        </ol>

    </b-modal>
    <b-modal size='xl' id='iter-dev-modal' title='Iterative Development' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'> Project - Develop. </h5>
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

</style>
