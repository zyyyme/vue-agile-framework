<template>
  <div id='app'> 
    <div class="box" id="left-box">
        <div class="examples" id="plan">Planning game
            <br>Daily Stand-Ups
            <br>User Stories</div>
        <div class="examples" id="develope">Iterative Development
            <br>Timeboxing
            <br>Testing
            <br>Continuous integration</div>
        <div class="examples" id="analyze">Daily burnt down chart
            <br>System metaphor</div>

    </div><div class="box" id="left-dop-box">
        <div class="dop-examples" id="d1"></div>
        <div class="dop-examples" id="d2"></div>
        <div class="dop-examples" id="d3"></div>
    </div><div class="box" id="main-box">
        
        <div class="types right" id="top">Design</div>
        <div class="types left">Plan</div>
        <div class="types right">Communicate</div>
        <div class="types left">Develope</div>
        <div class="types right">Improve</div>
        <div class="types left" id="bottom">Analyze</div>

    </div>
    
    <div class="box" id="right-dop-box">
        <div class="dop-examples" id="d4"></div>
        <div class="dop-examples" id="d5"></div>
        <div class="dop-examples" id="d6"></div>
    </div>
    
    <div class="box" id="right-box">
        <div class="examples" id="design">Modelling
            <br>How Might We
            <br>Five Whys (Inspiration)
            <br>Download Your Learnings(Ideation)
            <br>Group Interview (Inspiration)</div>
        <div class="examples" id="communicate">Daily communication
            <br>Last responsible moment
            <br>Workshops</div>
        <div class="examples" id="improve">Methodology shaping
            <br>Pair programming
            <br>Sustainable pace
            <br>Refactoring</div>
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


</style>
