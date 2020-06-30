<template>
  <div id='app'> 
    <div class="container">

        <div class="column first-col">
            <h3 class=" number left-number duble-down">1</h3><h3 class="stage left-stage">Estimate feasibility</h3>
            <h5 class="left-paragraph">Understand:<br>the scope of the work</h5>
            <h5 class="left-paragraph">Estimate:<br>needed and available resourses</h5>
            <h3 class=" number left-number down">2</h3><h3 class="stage left-stage">Build Foundations</h3>
            <h5 class="left-paragraph">Work out:<br>a potential solution for the project</h5>
            <h5 class="left-paragraph">Determine:<br>the development team<br>the project life cycle</h5>
            <h2 class="header" id="pre-project">Pre-Project</h2>
        </div><!--

        --><div class="column second-col">
            <h3 class="number left-number triple-down">3</h3><h3 class="stage left-stage center">Gather Requirements</h3>
            <h3 class="number right-number up">4</h3><h3 class="stage right-stage center">Plan & Design</h3>
            <h3 class="number left-number up">5</h3><h3 class="stage left-stage center">Choose Practices</h3>
            <h3 class="number right-number up">6</h3><h3 class="stage right-stage center">Code & Test</h3>
            <h3 class="number left-number up">7</h3><h3 class="stage left-stage center" title="Review + Retrospective">Analyze Results</h3>
            <h2 class="header" id="project">Project</h2>
        </div><!--

        --><div class="column third-col">
            <h3 class="number right-number duble-down">9</h3><h3 class="stage right-stage">Finalize</h3>
            <h5 class="right-paragraph">Assess:<br>project perfomance</h5>
            <h5 class="right-paragraph">Examine:<br>business value achieved</h5>
            <h3 class="number right-number down" id="ten">10</h3><h3 class="stage right-stage">Maintain</h3>
            <h5 class="right-paragraph">Train and support:<br>the working system</h5>
            <h5 class="right-paragraph">Introduce:<br>enhancements<br></h5>
            <h2 class="header" id="post-project">Post-Project</h2>
        </div>

    <img id="repeat-img" src="pic/repeat.png" alt="stage 8 - repeat">

    </div>
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

/* images */
.second-col::after{

    background-size: 70%;
    background-position: center;
    background-repeat: no-repeat;
    content: "";
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
}

#repeat-img{
    display: block;
    margin: 0 auto;
    width: calc(1/3*100%);
}

/* fonts */
.header{
    font-family: RobotoSlab-Bold, serif;
    font-size: 1.8rem;
    text-align: center;
    margin: .6em auto 0 auto;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
}

.column>h3{
    font-family: RobotoSlab-Regular, serif;
    font-size: 1.3rem;
}

.column>h5{
    font-family: RobotoSlab-Regular, serif;
    font-size: .7rem;
    margin-top: 1em;
    margin-bottom: 1em;
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
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: .1px solid #333;
    background-color: #FFEA9E;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 0;
}

.left-number{
    margin-right: 5px;
    margin-left: -17px;
    float: left;
}

.right-number{
    margin-left: 5px;
    margin-right: -17px;
    float: right;
}

.up{
    margin-top: -.2em;
}

.down{
    margin-top: .3em;
}

.duble-down{
    margin-top: .85em;
}

.triple-down{
    margin-top: 1.25em;
}

/* stages */
.stage{
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
}

.right-stage{
    text-align: right;
}

.left-stage{
    text-align: left;
}

.center{
    margin-top: 1.4em;
    margin-bottom: 1.4em;
}

.right-paragraph{
    text-align: right;
    padding-right: .5em;
}

.left-paragraph{
    text-align: left;
    padding-left: .5em;
}

/* media requests */
@media all and (max-width: 995px) {
  .header{
      font-size: 1.7rem;
  }
  .column>h3{
      font-size: 1.2rem;
  }
  .column>h5{
      font-size: .6rem;
  }
}

@media all and (max-width: 770px) {
  .header{
      font-size: 1.3rem;
  }
  .column>h3{
      font-size: .9rem;
  }
  .column>h5{
      font-size: .6rem;
  }
  .number{
      width: 20px;
      height: 20px;
  }
  .left-number{
      margin-right: 5px;
      margin-left: -10px;
  }
  .right-number{
      margin-left: 5px;
      margin-right: -10px;
  }
}

@media all and (max-width: 550px) {
  .header{
      font-size: 1.1rem;
  }
  .column>h3{
      font-size: .7rem;
  }
  .column>h5{
      font-size: .5rem;
  }
}

@media all and (max-width: 445px) {
  .header{
      font-size: 1rem;
  }
  .column>h3{
      font-size: .6rem;
  }
  .column>h5{
      font-size: .4rem;
  }
  .number{
      width: 15px;
      height: 15px;
  }
  .left-number{
      margin-right: 5px;
      margin-left: -8px;
  }
  .right-number{
      margin-left: 5px;
      margin-right: -8px;
  }
}

</style>
