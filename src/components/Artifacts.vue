<template>
  <div id='app'>
    <div class='container col-10 col-lg-8 mt-5'>

     <!-- intro -->
     <div class="text-overview d-flex flex-column align-items-center mt-4">
         <h3 class='col-12'> What is the Artifact? </h3>
         <h5 class='col-12'> Tangible work product that is created, modified and used in the work process. </h5>
     </div>

      <!-- List of artifacts -->
      <div class='row'>
          <div class='col-12 text-center border-left development'>
              <h1> Key Artifacts </h1>
          </div>
      </div>

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
                <b-button variant="link" v-b-modal="'team-modal'">Team Agreement</b-button>
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
              <h5 class='number col-4'>8</h5><h5 class="col-11">
                <b-button variant="link" v-b-modal="'llr-modal'">Lessons Learned Register</b-button>
              </h5>
          </div>
      </div>
      <div class='row border-0'>
          <div class='col-12'>
              <h5> </h5>
          </div>
      </div>


    </div>

    <b-modal size='xl' id='architecture-modal' title='Architecture' ok-only>
        <h3>What is it? </h3>
        <h5 class='modal-text'> Architecture identifies the main components of the system and how they interact. </h5>
        <h3>For what? </h3>
        <h5> To achieve such system’s properties as: </h5>
        <ul>
            <li><h5>Effectiveness</h5></li>
            <li><h5>Flexibility</h5></li>
            <li><h5>Scalability</h5></li>
            <li><h5>Maintainability</h5></li>
            <li><h5>Reusability</h5></li>
        </ul>
        <h3>How to create?</h3>
        <h5> The goal is to identify a potential technical direction for your team,
            reach an understanding of how are you going to build your system, but
            not to create large and detailed documentation. You don't need a detailed
            architectural specification, instead, the details are identified on a just-in-time
            basis during iterations via initial iteration modeling at the beginning of each
            iteration. You can solve tomorrow’s problem tomorrow.<br>
            First of all, you need to create  one or more simple navigation diagrams that present
            an overview of the "landscape" of your system. Your architectural models should contain
            the right level of information, showing how various aspects of your system work together
            but not the details. You should also use the simplest tools - whiteboard sketch or UML diagram
            are all that you need to model the critical aspects of your architecture.<br>
            After this stage you evolve your Architecture incrementally and iteratively, allowing it to emerge over time.</h5>
        <h3>Which stage?</h3>
        <h5> It is formed at the Pre-Project Phase: Estimate Foundations Stage, and added at each Planning Stage of the Project Phase. </h5>
    </b-modal>
    <b-modal size='xl' id='risks-modal' title='Risks Estimation' ok-only>
        <h3>What is it? </h3>
        <h5 class='modal-text'> List of risks and action plans in case of their occurrence. </h5>
        <h3>For what? </h3>
        <h5 class='modal-text'> To avoid surprises and be prepared for everything. </h5>
        <h3>How to create?</h3>
        <h5> The right action plan in case of problems can save a project, but not only negative risks can generate them.
             Positive risks (for example a great increase in the number of users) also can produce some problems that need to be solved.
             As a result, all possible negative and positive risks should be classified according to the scale of consequences and probability of occurrence in a single list. </h5>
        <h3>Which stage?</h3>
        <h5> This list is formed at the Pre-Project Phase: Estimate Foundations Stage, and then revised at
          every Planning Stage of the Project Phase. </h5>
    </b-modal>
    <b-modal size='xl' id='prod-backlog-modal' title='Product Backlog' ok-only>
        <h3>What is it? </h3>
        <ul>
            <li><h5>The ordered list of elements which people want to get from the product </h5></li>
            <li><h5>Consists of concise and clear to everyone items</h5></li>
            <li><h5>Does not set the borders</h5></li>
            <li><h5>Everything in the backlog is enough to launch a project</h5></li>
        </ul>
        <h3>For what? </h3>
        <ul>
            <li><h5>Release and Iteration planning became simpler </h5></li>
            <li><h5>Work becomes more transparent</h5></li>
            <li><h5>Everyone understands the direction of the development process</h5></li>
        </ul>
        <h3>Consists of what? </h3>
        <h5> Product Backlog consists of several epics. Epics from the
          top of the Backlog are divided into User Stories, different bags,
          knowledge acquisition, researches conduction, tests, and e.t.c.
          which meet some special requirements: </h5>
        <ul>
            <li><h5>Have value to the user </h5></li>
            <li><h5>Have not technical details</h5></li>
            <li><h5>Have opportunity to rate</h5></li>
            <li><h5>Are minimally dependent on each other</h5></li>
            <li><h5>Are prioritized</h5></li>
        </ul>
        <h3>How to arrange it?</h3>
        <h5> To prioritize the Story, you need a ratio of two indicators: how important is it for the business
            (Business Points) and how much effort it takes to develop it(Story Points).
            The most important elements should have more details and clearness.</h5>
        <h3>Which stage?</h3>
        <h5> It is formed at the Pre-Project Phase: Estimate Foundations Stage. However,
          the Product Backlog cannot be completed, because it changes dynamically and
          improves constantly. </h5>
        <h3>Which changes may be? </h3>
        <ul>
            <li><h5>If the added element does not contribute to the achievement of the goal,
              it must be deleted</h5></li>
            <li><h5>If a new function appears that will make the project better/more competitive/
              safer, e.t.c., you need to add it</h5></li>
            <li><h5>Elements inside the Backlog can be rearranged: change the priority
              and so on</h5></li>
        </ul>
        <h3>Who leads and how?</h3>
        <h5> Project Manager is responsible for the Product Backlog. He prioritizes
          Backlog elements, determines their value, importance, e.t.c. When working
          with a Backlog, Project Manager can consult with other people - for example,
          with Stakeholders or the Development Team. At the same time, the final
          decision on how the Product Backlog will look - and, in the future, the Product
          itself - remains with him. </h5>
    </b-modal>
    <b-modal size='xl' id='iter-backlog-modal' title='Iteration Backlog' ok-only>
        <h3>What is it? </h3>
        <ul>
            <li><h5>Set of specific tasks that are derived from several product backlog
                items selected for the execution in the current iteration. Also, several additional
                tasks related to the project but not to the product directly can be included</h5></li>
            <li><h5>Highly visible, real-time picture of the work that the Development
              Team plans to accomplish during the Iteration</h5></li>
        </ul>
        <h3>For what? </h3>
        <h5>To see all tasks taken to the work and be able to estimate their volume and correctly allocate time.
            It is very important to track team productivity and choose the correct number of tasks into the Iteration.</h5>
        <h3>Which stage?</h3>
        <h5> At the beginning of the Iteration - Planning Stage of the Project Phase. </h5>
        <h3>Who leads and how?</h3>
        <h5> Only the Development Team modifies the Iteration Backlog throughout the Iteration. </h5>
    </b-modal>
    <b-modal size='xl' id='team-modal' title='Team Agreement' ok-only>
        <h3>What is it? </h3>
        <h5> Guideline developed by the team about how they must work together to create a positive productive process. </h5>
        <h3>For what? </h3>
        <ul>
            <li><h5>Minimize the potential for conflict</h5></li>
            <li><h5>Form a common vision</h5></li>
            <li><h5>Make sure everyone knows the "rules of the game"</h5></li>
            <li><h5>Develop a sense of shared responsibility</h5></li>
            <li><h5>Increase member’s awareness of their own behavior</h5></li>
        </ul>
        <h3>How to create? </h3>
        <h5>The team should make a list of rules about doing business together, attitude to the tasks, measures of
            completion and conflicts’ resolution, and make sure that everyone is satisfied  with them.
            It remains only to follow them throughout the work.</h5>
            <h3>Which stage?</h3>
            <h5> Estimate Foundations Stage.</h5>
    </b-modal>
    <b-modal size='xl' id='unit-tests-modal' title='Unit Tests' ok-only>
        <h3> What is it? </h3>
        <h5> Programming process that allows
          you to check the correctness of individual modules of the program source code. </h5>
          <h3> For what?</h3>
          <h5> To be sure that everything is working correctly.</h5>
          <h3> How to create?</h3>
          <h5> The idea is to write tests for each non-trivial function or method. This
          allows you to quickly check whether the next change in the code has led to
          regression, that is, to the appearance of errors in the already tested places
          of the program, and also facilitates the detection and elimination of such errors. </h5>
    </b-modal>
    <b-modal size='xl' id='product-modal' title='Product' ok-only>
        <h3> What is it? </h3>
        <h5> The constantly changing result of human labor which has value to the market. </h5>
        <h3> For what? </h3>
        <h5> To sell it and get the most profit at a lower cost. </h5>
        <h3> How to create? </h3>
        <h5> According to our methodology. </h5>
    </b-modal>
    <b-modal size='xl' id='llr-modal' title='Lessons Learned Register' ok-only>
        <h3>What is it? </h3>
        <h5> This is a set of practices and methods that have
          worked well/poorly on this project and an explanation of why. </h5>
          <h3>For what? </h3>
          <ul>
              <li><h5>To avoid the same mistakes</h5></li>
              <li><h5>For self-improvement </h5></li>
              <li><h5>For more productive work</h5></li>
          </ul>
          <h3>How to create? </h3>
          <h5>During the meeting identify the comments and recommendations that can be learned.
              Note the detailed Lessons Learned during discussion in a report which will be available for everyone.
              Then analyze and organize the Lessons Learned so they can be applied.</h5>
          <h3>Which stage? </h3>
          <h5> It's updated every Iteration Analysis and archived at the end of the project. </h5>
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
