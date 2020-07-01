<template>
  <div id="app">
    <div class="container">
      <div class="timeline">

        <div class="timeline-item">
          <div class="card border-0">
            <div class="card-header border-0">Courage</div>
            <div class="card-body">
              <p class="card-text">
                plan for today, not for tomorrow
              </p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="card border-0">
            <div class="card-header border-0">Openness</div>
            <div class="card-body">
              <p class="card-text">
                problems need to be discussed
              </p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="card border-0">
            <div class="card-header border-0">Commitment</div>
            <div class="card-body">
              <p class="card-text">
                everyone should contribute
              </p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="card border-0">
            <div class="card-header border-0">Focus</div>
            <div class="card-body">
              <p class="card-text">
                working software over documentation
              </p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="card border-0">
            <div class="card-header border-0">Respect</div>
            <div class="card-body">
              <p class="card-text">
                everyone is good in his own way
              </p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="card border-0">
            <div class="card-header border-0">Communication</div>
            <div class="card-body">
              <p class="card-text">
                to share a common understanding
              </p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="card border-0">
            <div class="card-header border-0">Feedback</div>
            <div class="card-body">
              <p class="card-text">
                 from system, customer and team
              </p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="card border-0">
            <div class="card-header border-0">Simplicity</div>
            <div class="card-body">
              <p class="card-text">
                start with the simplest solution
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  data () {
    return {
      msg: 'Overview'
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
