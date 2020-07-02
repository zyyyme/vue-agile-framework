<template>
  <div id='app'> 
    <div class='container col-10 col-lg-8 mt-5'>
      <div class='row'>
          <div class='col-12 text-center border-left development'>
              <h1> Key Artifacts </h1>
          </div>
      </div>
      <!-- List of artifacts -->
      <div class='row text-left'>
          <div class='col-12 col-lg-8 artifact border-left '>
              <h5 class='number col-4'>1</h5><h5 class="col-10">
                  <b-button variant="link" v-b-modal="'architecture-modal'">Architecture</b-button>

              </h5>
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-8 artifact border-left '>
              <h5 class='number col-4'>2</h5><h5 class="col-10">
                <b-button variant="link" v-b-modal="'risks-modal'">Risks Estimation</b-button>
              </h5>
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-8 artifact border-left '>
              <h5 class='number col-4'>3</h5><h5 class="col-10">
                <b-button variant="link" v-b-modal="'prod-backlog-modal'">Product Backlog</b-button>
              </h5>
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-8 artifact border-left '>
              <h5 class='number col-4'>4</h5><h5 class="col-10">
                <b-button variant="link" v-b-modal="'iter-backlog-modal'">Iteration Backlog</b-button>
              </h5>
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-8 artifact border-left '>
              <h5 class='number col-4'>5</h5><h5 class="col-10">
                <b-button variant="link" v-b-modal="'team-modal'">Team Agreement (Definition of Done, ACs)</b-button>
              </h5>
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-8 artifact border-left'>
              <h5 class='number col-4'>6</h5><h5 class="col-10">
                <b-button variant="link" v-b-modal="'unit-tests-modal'">Unit Tests</b-button>
              </h5>
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-8 artifact border-left '>
              <h5 class='number col-4'>7</h5><h5 class="col-10">
                <b-button variant="link" v-b-modal="'product-modal'">Product</b-button>
              </h5>
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-6 artifact border-left '>
              <h5 class='number col-4'>8</h5><h5 class="col-10">
                <b-button variant="link" v-b-modal="'llr-modal'">Lessons Learned Register</b-button>
              </h5>
          </div>
      </div>

      
    </div>

    <div class="text-overview d-flex flex-column align-items-center mt-4">
        <h3 class='col-6'> What is it? </h3>
        <h5 class='col-6'> Tangible work products that are created, modified and used in the work process. </h5>
    </div>


    <b-modal size='xl' id='risks-modal' title='Risks Estimation' ok-only>
        <h3>What is it? </h3> 
        <h5 class='modal-text'> List of risks and action plan in case of their occurrence. </h5>
        <h3>How to arrange?</h3>
        <h5> Risks can be positive and negative. Right action plan in case of problems 
          can save a project, but not only negative risks can generate them. Positive 
          risks (for example a great increase in the number of users) also can generate 
          some problems that need to be solved. All these risks should be classified 
          according to the scale of consequences and probability of occurrence. </h5>
        <h3>Which stage?</h3>
        <h5> It is formed at the pre-project phase, Foundations stage and then revised at 
          every planning stage of the project phase. </h5>
    </b-modal>
    <b-modal size='xl' id='architecture-modal' title='Architecture' ok-only>
        <h3>What is it? </h3> 
        <h5 class='modal-text'> Architecture identifies the main components of the system and how they interact. </h5>
        <h3>For what? </h3>
        <h5> To achieve such system’s properties as: </h5>
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
        <h3>How to create?</h3>
        <h5> Decompose complex system on a small number of simpler subsystems, each of which, 
          in turn, is built from smaller parts, etc., until the smallest parts are simple 
          enough for direct understanding and creation and organize their interaction with 
          each other and the outside world.  </h5>
        <h3>Which stage?</h3>
        <h5> It is formed at the pre-project phase, Build Foundations stage. </h5>
    </b-modal>
    <b-modal size='xl' id='prod-backlog-modal' title='Product Backlog' ok-only>
        <h3>What is it? </h3> 
        <ul>
            <li><h5>Ordered list of elements which people want to get from the product. </h5></li>
            <li><h5>Concise and clear to everyone.</h5></li>
            <li><h5>Does not set the borders.</h5></li>
            <li><h5>Everything in the backlog is enough to launch a project.</h5></li>     
        </ul>
        <h3>For what? </h3>
        <ul>
            <li><h5>Release and iteration planning became simpler. </h5></li>
            <li><h5>Work become more transparent.</h5></li>
            <li><h5>Everyone understands the direction of development process.</h5></li>
        </ul>
        <h3>Consists of what? </h3> 
        <h5> Product backlog consists of several epics. Epics from the 
          top of the backlog are divided into user stories, different bags, 
          knowledge acquisition, researches conduction, tests and e.t.c. 
          which meet some special requirements: </h5>
        <ul>
            <li><h5>Have value to the user </h5></li>
            <li><h5>No technical details</h5></li>
            <li><h5>Opportunity to rate</h5></li>
            <li><h5>Minimally dependent on each other</h5></li>     
            <li><h5>Prioritized</h5></li>     
        </ul>
        <h3>How to arrange?</h3>
        <h5> To prioritize story, you need a ratio of at least two indicators: how 
          important it is for the business and how much effort it takes to develop 
          it. The most important elements should have more details and clearness. </h5>
        <h3>Which stage?</h3>
        <h5> It is formed at the pre-project phase, build foundations stage. However, 
          the product backlog cannot be completed, because it changes dynamically and 
          improves constantly. </h5>
        <h3>Which changes may be? </h3> 
        <ul>
            <li><h5>if the added element does not contribute to the achievement of the goal, 
              it must be deleted;</h5></li>
            <li><h5>if a new function appears that will make the project better / more competitive / 
              safer, etc., you need to add it;</h5></li>
            <li><h5>elements inside the backlog can be rearranged: change the priority 
              and so on.</h5></li>    
        </ul>
        <h3>Who leads and how?</h3>
        <h5> Project manager is responsible for the product backlog. He prioritizes 
          backlog elements, determines their value, importance etc. When working 
          with a backlog, Project Manager can consult with other people - for example, 
          with stakeholders, with the development team. At the same time, the final 
          decision on how the product backlog will look - and, in the future, the product 
          itself - remains with him. </h5>
    </b-modal>
    <b-modal size='xl' id='iter-backlog-modal' title='Iteration Backlog' ok-only>
        <h3>What is it? </h3> 
        <ul>
            <li><h5>Several items from the product backlog are selected for execution in 
              the current iteration, after that they are divided into small specific tasks. 
              Also several additional tasks related to the project but not to the product 
              directly can be included.</h5></li>
            <li><h5>Highly visible, real-time picture of the work that the Development 
              Team plans to accomplish during the Iteration.</h5></li>   
        </ul>
        <h3>Which stage?</h3>
        <h5> At the beginning of the iteration - planning stage of the project phase. </h5>
        <h3>Who leads and how?</h3>
        <h5> Only the Development Team modifies the Iteration Backlog throughout the Iteration. </h5>
    </b-modal>
    <b-modal size='xl' id='unit-tests-modal' title='Unit Tests' ok-only>
        <h3>What is it? </h3> 
        <h5> Unit testing, or unit testing, is a programming process that allows 
          you to check the correctness of individual modules of the program source code. </h5>
        <h5> The idea is to write tests for each non-trivial function or method. This 
          allows you to quickly check whether the next change in the code has led to 
          regression, that is, to the appearance of errors in the already tested places 
          of the program, and also facilitates the detection and elimination of such errors. </h5>
    </b-modal>
    <b-modal size='xl' id='product-modal' title='Product' ok-only>
        <h3>What is it? </h3> 
        <h5> The constantly changing result of human labor which has value to the market. </h5>
    </b-modal>
    <b-modal size='xl' id='llr-modal' title='Lessons Learned Register' ok-only>
        <h3>What is it? </h3> 
        <h5> This is a set of practices and methods that have 
          worked well/poorly on this project and an explanation of why. </h5>
        <h3>Which stage? </h3> 
        <h5> It's updated every retrospective and archived at the end of the project. </h5>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Artifacts',
  data () {
    return {
      msg: 'Artifacts'
    }
  }
}
</script>

<style scoped>
h1 {
    font-size: 24pt;
}

h5 {
    font-size: 20pt;
}

.development {
    background-color: #B2DED7;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
}

.artifact{
    padding-top: 24px;
    border-left: 4px #333 solid;
    display: flex;
    align-items: center;  
}

.row {
  border-left: 4px #333 solid;
}

.number {
    background-color: #FFDA71;
    float: left;
    flex: 0 0 50px;
    height: 50px;
    left: -42px;
    border-radius: 50px;
    
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
</style>
