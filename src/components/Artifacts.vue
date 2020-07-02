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
          <div class='col-12 col-lg-6 artifact border-left '>
              <h5 class='number col-4'>1</h5><h5 class="col-10">Architecture</h5>
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-6 artifact border-left '>
              <h5 class='number col-4'>2</h5><h5 class="col-10">Risks Estimation</h5>
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-6 artifact border-left '>
              <h5 class='number col-4'>3</h5><h5 class="col-10">Product Backlog</h5>
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-6 artifact border-left '>
              <h5 class='number col-4'>4</h5><h5 class="col-10">Iteration Backlog</h5>
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-6 artifact border-left '>
              <h5 class='number col-4'>5</h5><h5 class="col-10">Team Agreement (Definition of Done, ACs)</h5>
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-6 artifact border-left'>
              <h5 class='number col-4'>6</h5><h5 class="col-10">Unit Tests</h5>
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-6 artifact border-left '>
              <h5 class='number col-4'>7</h5><h5 class="col-10">Product</h5>
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-6 artifact border-left '>
              <h5 class='number col-4'>8</h5><h5 class="col-10">Lessons Learned Register </h5>
          </div>
      </div>

      
    </div>
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
