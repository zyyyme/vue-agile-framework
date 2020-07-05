<template>
  <div id="app">
    <div class="container">
      <div class="timeline">

        <div class="timeline-item">
          <div class="card border-0">
            <div class="card-header border-0">
              <b-button variant="link" v-b-modal="'courage-modal'">Courage</b-button>
            </div>
            <div class="card-body">
              <p class="card-text">
                plan for today, not for tomorrow
              </p>
            </div>
          </div>
        </div>

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
              <b-button variant="link" v-b-modal="'focus-modal'">Focus</b-button>
            </div>
            <div class="card-body">
              <p class="card-text">
                working software over documentation
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
    <b-modal size='xl' id='courage-modal' title='Courage' ok-only>
        <h5>Courage to do the right thing and work on tough problems. 
          Plan for today, not tomorrow, constantly refactor and be persistent. 
          Enables developers to feel comfortable with refactoring their code 
          whenever necessary. Practise persistence and do whatever it takes to resolve problems </h5> 
    </b-modal>
    <b-modal size='xl' id='simplicity-modal' title='Simplicity' ok-only>
        <h5>From the Agile Manifesto: </h5> 
        <h5>“Simplicity — the art of maximizing the amount of work not done — is essential.” </h5> 
        <h5>Always start with the simplest solution(which is most effective) and add to it later. </h5> 
    </b-modal>
    <b-modal size='xl' id='feedback-modal' title='Feedback' ok-only>
        <h5>Received from the system, customer and dev team, frequent verbal 
          communication and feedback. System feedback using Unit tests and 
          system diagnostics. Customer feedback using functional tests and 
          periodic reviews(Acceptance tests) - once in every 2-3 weeks so the 
          customer can easily steer the development. Team feedback using pair 
          programming and changing requirements. </h5> 
        <h5><i>“Optimism is an occupational hazard of programming. Feedback is the treatment.” </i> </h5> 
    </b-modal>
    <b-modal size='xl' id='openness-modal' title='Openness' ok-only>
        <h5>Great Coach facilitates openness in daily meetings so the team is always aware of 
          exactly how the Iteration is going. Coach encourages openness in reviews by ensuring 
          that stakeholder feedback is constructive and that team members are able to hear it. 
          Coach reminds teams that learning about product shortcomings early is much less 
          expensive and much more helpful than hearing about them late in the project, or 
          worse, after the product is in customer’s hands. In the same way, Coach fosters 
          an open environment in sprint retrospectives so that teams can grow and develop 
          from sprint to sprint. </h5> 
    </b-modal>
    <b-modal size='xl' id='commitment-modal' title='Commitment' ok-only>
        <h5>It is essential for building an agile culture. Scrum teams work together as a 
          unit. This means that teams trust each other to follow through on what they say 
          they are going to do. When team members aren’t sure how work is going, they ask. 
          Agile teams only agree to take on tasks they believe they can complete, so they 
          are careful not to overcommit.</h5> 
    </b-modal>
    <b-modal size='xl' id='focus-modal' title='Focus' ok-only>
        <h5>Focus means that whatever Scrum teams start they finish - so agile teams 
          are relentless about limiting the amount of work in process (limit WIP). 
          Great Coach encourages team focus by holding the team to their own Team 
          Agreement, by encouraging full team participation at each daily meetings, 
          and by ensuring that team members only present work that is complete at the reviews. </h5> 
    </b-modal>
    <b-modal size='xl' id='respect-modal' title='Respect' ok-only>
        <h5>Respect for others on the team as well as self respect by always striving for 
          highest quality code. Ensure no one in the team feels forgotten, ignored or unappreciated 
          by the team. </h5> 
        <h5>Leads to high motivation and loyalty towards the team and work. </h5> 
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

  /*кружочки по линии*/
  /* .second-timeline-item:before {
      content: " ";
      width: 1em;
      height: 1em;
      border-radius: 50%;
      position: absolute;
      background-color: rgba(126, 200, 189, .6);
  } */

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
