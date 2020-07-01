<template>
  <div id='app'> 
    <div class="container">

        <div class="column first-col">
            <div class="text-block">
                <h3 class=" number left-number duble-down">1</h3><h3 class="stage left-stage">Estimate feasibility and foundations</h3>            
            </div>
            <h2 class="header" id="pre-project">Pre-Project</h2>
        </div><!--

        --><div class="column second-col">
            <div class="text-block">
                <h3 class="number left-number triple-down">2</h3><h3 class="stage left-stage center">Planning (Development & Methodology)</h3>
                <h5 class="left-paragraph"> choosing practices</h5>
                <h5 class="left-paragraph"> listening</h5>
                <h5 class="left-paragraph"> designing</h5>
            </div>
            <div class="text-block">
                <h3 class="number right-number triple-down">3</h3><h3 class="stage right-stage center">Development</h3>
                <h5 class="right-paragraph"> coding</h5>
                <h5 class="right-paragraph"> testing</h5>
            </div>
            <div class="text-block">
                <h3 class="number left-number triple-down">4</h3><h3 class="stage left-stage center">Iteration Analysis</h3>
                <h5 class="left-paragraph"> review</h5>
                <h5 class="left-paragraph"> retrospective</h5>
            </div>
            <h2 class="header" id="project">Project</h2>
        </div><!--

        --><div class="column third-col">
            <div class="text-block">
                <h3 class="number right-number duble-down">5</h3><h3 class="stage right-stage">Finalization & Summary</h3>
            </div>
            <div class="text-block">
                <h3 class="number right-number duble-down">6</h3><h3 class="stage right-stage">Maintenance</h3>
            </div>
            <h2 class="header" id="post-project">Post-Project</h2>
        </div>
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
</style>
