<template>
  <div id="app">
    <div class="container">
      <div class="timeline">

        <div class="timeline-item">
          <div class="card border-0">
            <div class="card-header border-0">
              <b-button variant="link" v-b-modal="'openness-modal'">Openness</b-button>
            </div>
            <div class="card-body">
              <p class="card-text">
                problems need to be discussed
              </p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="card border-0">
            <div class="card-header border-0">
              <b-button variant="link" v-b-modal="'commitment-modal'">Commitment</b-button>
            </div>
            <div class="card-body">
              <p class="card-text">
                everyone should contribute
              </p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="card border-0">
            <div class="card-header border-0">
              <b-button variant="link" v-b-modal="'respect-modal'">Respect</b-button>
            </div>
            <div class="card-body">
              <p class="card-text">
                everyone is good in his own way
              </p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="card border-0">
            <div class="card-header border-0">
              <b-button variant="link" v-b-modal="'feedback-modal'">Feedback</b-button>
            </div>
            <div class="card-body">
              <p class="card-text">
                 from system, customer and team
              </p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="card border-0">
            <div class="card-header border-0">
              <b-button variant="link" v-b-modal="'simplicity-modal'">Simplicity</b-button>
            </div>
            <div class="card-body">
              <p class="card-text">
                start with the simplest solution
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <b-modal size='xl' id='simplicity-modal' title='Simplicity' ok-only>
        <h3>What is it? </h3>
        <h5>Simplicity is understanding a requirement and building the simplest 
          solution that might meet that requirement, and then if necessary, incrementally 
          building upon it until the customer is satisfied. </h5> 
        <h5>From the Agile Manifesto: “Simplicity — the art of maximizing the amount of 
          work not done — is essential.”  </h5> 

        <h3>What if not to use? </h3>
        <h5>Too many teams want a detailed description of the requirement and spend way 
          too long building it, only to find that it misses the mark. “There is nothing 
          so wasteful as doing with great efficiency, that which should not be done at all.”</h5> 

        <h3>How to reach? </h3>
        <h5>Make sure you understand the reasoning behind the requirement — the desired 
          outcome — write the least amount of code that could possibly meet that outcome, 
          obtain feedback, and then incrementally and iteratively improve and extend it 
          until it does, all the while making it as simple to understand and maintain as 
          possible. Always start with the simplest solution, which is usually most effective 
          and add to it later.</h5> 
    </b-modal>
    <b-modal size='xl' id='feedback-modal' title='Feedback' ok-only>
        <h3>What is it? </h3>
        <h5>Firstly, feedback is information about reactions to a product, a person's performance of a task, 
          etc. which is used as a basis for improvement.</h5> 
        <h5><i>“Optimism is an occupational hazard of programming. Feedback is the treatment.”</i></h5> 

        <h3>Why use it? </h3>
        <h5>Frequent feedback from business stakeholders and end users keeps the development team 
          focused on the solution’s intended goals and helps ensure they deliver high-value features. 
          Equally important, feedback loops allow the team to accommodate change later in the 
          development process, particularly as new or refined requirements emerge.</h5> 

        <h3>How to reach? </h3>
        <h5>System feedback using Unit tests and system diagnostics.  </h5> 
        <h5>Customer feedback using functional tests and periodic reviews - 
          once in every 2-3 weeks so the customer can easily steer the development. </h5> 
        <h5>Team feedback using pair programming and changing requirements. </h5> 
    </b-modal>
    <b-modal size='xl' id='openness-modal' title='Openness' ok-only>
        <h3>What is it? </h3>
        <h5>Openness is lack of secrecy or concealment; frankness. It supports transparency, 
          but it’s not the same thing. Openness is more about the interactions between individuals. 
          In other words, openness is more about how people interact. </h5> 

        <h3>Why use it? </h3>
        <h5>Being open about our work helps create transparency to our progress. 
          Without transparency, any attempts to inspect and adapt will be flawed. </h5> 
        <h5>Openness enables team members to ask for help. </h5>
        <h5>Openness allows team members to offer help to each other. </h5>
        <h5>Openness enables team members to share their perspectives, feel heard by 
          their peers, and be able to support team decisions. </h5>
        <h5>When our assumptions turn out to be invalid, openness helps us admit we were 
          wrong and change direction.  This applies to a feature we thought would be valuable. 
          This also applies to how we chose to implement a feature in the product. </h5>

        <h3>How to reach? </h3>
        <h5>Great Coach facilitates openness in daily meetings so the team is always 
          aware of exactly how the Iteration is going. </h5> 
        <h5>Coach encourages openness in reviews by ensuring that stakeholder feedback is 
          constructive and that team members are able to hear it. </h5> 
        <h5>Coach reminds teams that learning about product shortcomings early is much less 
          expensive and much more helpful than hearing about them late in the project, or 
          worse, after the product is in customer’s hands. </h5> 
        <h5>Coach fosters an open environment in sprint retrospectives so that teams can 
          grow and develop from sprint to sprint. </h5> 
    </b-modal>
    <b-modal size='xl' id='commitment-modal' title='Commitment' ok-only>
        <h3>What is it? </h3>
        <h5>Commitment is the state or quality of being dedicated to the same goal 
          and collaboration within the team. </h5> 

        <h3>Why use it? </h3>
        <h5>For any long-term success, a team needs to be committed to attaining that. 
          Leaders should be responsible for ensuring that their teams are well dedicated 
          towards the achievement. While this is in place, commitment produces results 
          even when the leader is absent. On many occasions, teams would want to ensure 
          that their projections are met even if there is no form of supervision.  </h5>
        <h5>Secondly, with a committed team, goals are met and even exceeded to some extent. </h5>
        <h5>Thirdly, clients and customers prefer working with committed teams thus 
          giving an advantage over other companies. </h5>
        
        <h3>How to reach? </h3>
        <h5>It is essential for building an agile culture.Teams work together as a unit. 
          This means that teams trust each other to follow through on what they say they 
          are going to do. When team members aren’t sure how work is going, they ask. 
          Teams only agree to take on tasks they believe they can complete, so they are 
          careful not to overcommit. </h5> 
    </b-modal>
    <b-modal size='xl' id='respect-modal' title='Respect' ok-only>
        <h3>What is it? </h3>
        <h5>Respect grounds in valuing each member’s opinions, as well as their 
          skills and working experiences. Respect means trusting that everyone 
          works and communicates with good intentions, which plays a significant 
          role in maintaining a functional level of communication. </h5> 
        <h5>Respect for everyone’s background and individual history creates 
          a safe environment for each member. </h5> 

        <h3>Why use it? </h3>
        <h5>Elevates the team members, increases motivation, and saves resources 
          by boosting the performance of each individual member. </h5> 
        <h5>Top performance comes from a safe environment which can’t be achieved 
          if anyone on the team feels mistreated. </h5>
        <h5>Team members tend to accept criticism and apply feedback better in a 
          respectful environment. The belief of the best intention behind feedback 
          helps members to see it as an opportunity for improvement. </h5>
        <h5>Shifting directions when working on a project becomes more natural when there’s 
          an atmosphere of trust present in the team. It prevents tensions and conflicts 
          between members. </h5>
        <h5>Maximizing performance is another benefit of nurturing the value of respect. 
          When people work with autonomy based on a trust in their skills, the results 
          are better-finished products and better facilitation of the work. </h5>

        <h3>How to reach? </h3>
        <h5>Including every member into the meetings and planning process. </h5> 
        <h5>Presenting only “Done” work. </h5> 
        <h5>Giving developers ownership over the Sprint Backlog. </h5> 
        <h5>Building a cross-functional team. </h5> 
        <h5>It is vital for each scrum team to re-define the meaning of respect when necessary, 
          as well as to re-evaluate the strategies for promoting it within an organization. </h5> 
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Values',
  data () {
    return {
      msg: 'Values'
    }
  }
}
</script>

<style scoped>

  /*расположение картинки по центру экрана и определенным размером*/
  .container {
      width: 60%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
  }

  .timeline {
      display: flex!important;
      flex-direction: column!important;
      position: relative;
  }

  /* линия по центру */
  .timeline:before {
      content: " ";
      position: absolute;
      top: 0;
      left: 50%;
      bottom: 0;
      width: 1px;
      margin: 20px -1.5px;
      background-color: #fff;
      border: 1px dashed rgba(34, 142, 149, .9);
  }

  .timeline-item{
      position: relative;
      padding: 10px 25px;
      width: 50%;
  }

  /* треугольнички у блоков */
  .timeline-item:before {
      content: " ";
      position: absolute;
      top: 20px;/*двигает треугольники по вертикали*/
      right: -10px;/*двигает треугольники по горизонтали*/
      border-width: 17.5px;/*уменьшает размер треугольников*/
      border-color: transparent transparent transparent rgba(251, 235, 181, .76);/*transparent transparent transparent rgb*/
      border-style: solid;
  }

  .timeline-item:nth-child(even) {
    align-self: flex-end;
  }

  .timeline-item:nth-child(even):before {
      content: " ";
      position: absolute;
      top: 20px;/*двигает треугольники по вертикали*/
      right: auto;
      left: -10px;/*двигает треугольники по горизонтали*/
      border-width: 17.5px;
      border-color: transparent rgba(251, 235, 181, .76) transparent transparent;
      border-style: solid;
  }

  .card {
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
  }

  .card-header {
      padding: .5rem 1.25rem;
      margin-bottom: 0;
      color: #333333;
      font-weight: 500;
      font-size: 20pt;
      background-color: rgba(251, 235, 181, .76);
  }

  .card-body {
      flex: 1 1 auto;
      min-height: 1px;
      padding: .25rem;
  }

  .card-text {
      margin-bottom: 0;
      color: #333333;
      font-size: 16pt;
      font-weight: 300;
  }

  .border-0 {
    border: 0!important;
  }
</style>
