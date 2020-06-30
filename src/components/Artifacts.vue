<template>
  <div id='app'> 
    <div class='container col-10 col-lg-8 mt-5'>
      <div class='row'>
          <div class='col-12 col-lg-6 text-center border-left border-dark  pre-project'>
              <h1> Pre-Project </h1>
          </div>
          <div class='col-12 col-lg-6 text-center border-left border-dark  development'>
              <h1> Development </h1> 
          </div>
      </div>
      <!-- List of artifacts -->
      <div class='row text-left'>
          <div class='col-12 col-lg-6 artifact border-left border-dark'>
              <h5 class='number col-4'>1</h5><h5 class="col-10">Business Case </h5>
          </div>
          <div class='col-12 col-lg-6 artifact border-left border-dark'>
              <h5 class='number col-4'>1</h5><h5 class="col-10">Product Backlog + Estimates / Sprint Backlog + Estimates </h5> 
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-6 artifact border-left border-dark'>
              <h5 class='number col-4'>2</h5><h5 class="col-10">Terms of Reference </h5>
          </div>
          <div class='col-12 col-lg-6 artifact border-left border-dark'>
              <h5 class='number col-4'>2</h5><h5 class="col-10">Definition of Done </h5> 
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-6 artifact border-left border-dark'>
              <h5 class='number col-3'>3</h5><h5 class="col-10"> The Feasibility/Foundation summary </h5>
          </div>
          <div class='col-12 col-lg-6 artifact border-left border-dark'>
              <h5 class='number col-4'>3</h5><h5 class="col-10">Acceptance Criteria / Acceptance Tests </h5> 
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-6 artifact border-left border-dark'>
              <h5></h5>
          </div>
          <div class='col-12 col-lg-6 artifact border-left border-dark'>
              <h5 class='number col-4'>4</h5><h5 class="col-10">Unit Tests </h5> 
          </div>
      </div>
      <div class='row text-left'>
          <div class='col-12 col-lg-6 artifact border-left border-dark'>
              <h5></h5>
          </div>
          <div class='col-12 col-lg-6 artifact border-left border-dark'>
              <h5 class='number col-4'>5</h5><h5 class="col-10">Project Increment Review Report </h5> 
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

.pre-project {
    background-color: #78C0B6;
}

.development {
    background-color: #B2DED7;
}

.col {
    padding-top: 20px;
    border-width: 4px !important;
}

.artifact {
    display: flex;
    align-items: center;  
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
