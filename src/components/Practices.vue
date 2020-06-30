<template>
  <div id='app'> 
    <div class="box" id="left-box">
        <div class="examples" id="plan">Planning game<br>Daily meetings</div>
        <div class="examples" id="develope">Iterative Development<br>Timeboxing<br>Testing<br>Continuous integration</div>
        <div class="examples" id="analyze">Daily burnt down chart<br>System metaphor</div>
    </div><!--

    --><div class="box" id="left-dop-box">
        <div class="dop-examples" id="d1"> </div>
        <div class="dop-examples" id="d2"> </div>
        <div class="dop-examples" id="d3"> </div>
    </div><!--

    --><div class="box" id="main-box">
        <div class="types right" id="top">Design</div>
        <div class="types left">Plan</div>
        <div class="types right">Communicate</div>
        <div class="types left">Develope</div>
        <div class="types right">Improve</div>
        <div class="types left" id="bottom">Analyze</div>
    </div><!--

    --><div class="box" id="right-dop-box">
        <div class="dop-examples" id="d4"> </div>
        <div class="dop-examples" id="d5"> </div>
        <div class="dop-examples" id="d6"> </div>
    </div><!--

    --><div class="box" id="right-box">
        <div class="examples" id="design">Modelling<br>How might we<br>Five whys<br>Download your learnings<br>Group interview</div>
        <div class="examples" id="communicate">Daily communication<br>Last responsible moment<br>Workshops</div>
        <div class="examples" id="improve">Methodology shaping<br>Pair programming<br>Sustainable pace<br>Refactoring</div>
    </div>
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
    padding: .2em .2em;

    background-color: #FFEA9E;

    border: 1px solid #333333;
    border-radius: 15px;

    font-family: RobotoSlab-Regular;
    font-size: 1.5em;
}

#left-dop-box, #right-dop-box{
    width: 8%;
}

.types{
    margin: 1em 5px;
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
    padding: .5em .5em;

    background-color: rgba(126, 200, 189, 0.6);

    border: 1px solid #333333;
    border-radius: 15px;

    font-family: RobotoSlab-Regular;
    font-size: .8em;
    text-align: left;
}

#right-box{
    position: relative;
    bottom: 2em;
}

#left-box{
    position: relative;
    top: .2em;
}

#design{
    margin-bottom: 2.5em;
}

#communicate{
    margin-bottom: 3.35em;
}

#develope{
    margin-bottom: 3.7em;
}

#plan{
    margin-bottom: 3.9em;
}

.dop-examples{
    border-bottom: 1.5px solid #333;
}

#left-dop-box{
    position: relative;
    bottom: .5em;
}

#d1, #d2{
    margin-bottom: 7.4em;
}

#right-dop-box{
    position: relative;
    bottom: 4em;
}

#d4, #d5{
    margin-bottom: 7.5em;
}

</style>
