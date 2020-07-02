<template>
  <div id='app'> 
    <div class="box" id="left-box">
        <div class="examples" id="plan"><b-button variant='link'>Planning game </b-button>
            <br><b-button variant='link'>Daily Stand-Ups</b-button>
            <br><b-button variant='link'>User Stories</b-button></div>
        <div class="examples" id="develope"><b-button variant='link'>Iterative Development</b-button>
            <br><b-button variant='link'>Timeboxing</b-button>
            <br><b-button variant='link'>Testing</b-button>
            <br><b-button variant='link'>Continuous integration</b-button></div>
        <div class="examples" id="analyze"><b-button variant='link'>Daily burnt down chart</b-button>
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
        <div class="examples" id="improve"><b-button variant='link'>Methodology shaping</b-button>
            <br><b-button variant='link'>Pair programming</b-button>
            <br><b-button variant='link'>Sustainable pace</b-button>
            <br><b-button variant='link'>Refactoring</b-button></div>
    </div>

    <b-modal size='xl' id='user-stories-modal' title='User Stories' ok-only>
        <h3>Stage: </h3> 
        <h5 class='modal-text'> establish feasibility of the project from a technical perspective
             and its cost-effectiveness from a business perspective </h5>
        <h3>Continuity: </h3> <h5> 1 - 5 days </h5>
        <h3>Key Notes: </h3>
        <ul>
            <li><h5>The effort associated with Feasibility should be just enough to decide whether
             further investigation is justified, or whether the project should be stopped now,
              since it is unlikely to be viable. </h5></li>
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

</style>
