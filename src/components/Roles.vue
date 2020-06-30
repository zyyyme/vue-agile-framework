<template>
  <div id='app'> 
    <div class="container measurements">
      <div class="row">
          <div class="col-2 col-border team"><h1>Small team</h1></div>
          <div class="col-5 col-border team"><h1>Medium-sized team</h1></div>
          <div class="col-5 col-border team"><h1>Big team</h1></div>
      </div>
      <div class="row borders">
          <div class="col-2 col-border">
              <div class="row">
                  <div class="col">
                      <div class="panel panel-small panel-product-owner"><p><a href="roles/product_owner.html">Product Owner</a></p></div>
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                      <div class="panel panel-small panel-team-lead"><p><a href="roles/team_lead.html">Team Leader</a></p></div>
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                      <div class="panel panel-small panel-development-team"><p><a href="roles/development_team.html">Development team</a></p></div>
                  </div>
              </div>
          </div>

          <div class="col-5 col-border">
              <div class="row align">
                  <div class="col">
                      <div class="panel panel-small panel-product-owner panel-medium">
                          <p><a href="roles/business_sponsor.html">Business sponsor</a></p>
                          <p><a href="roles/senior_designer.html">Senior designer</a></p>
                          <p><a href="roles/project_manager.html">Project manager</a></p>
                          <p><a href="roles/business_expert.html">Business expert/Business analyst</a></p>
                      </div>
                  </div>
              </div>
              <div class="row align">
                  <div class="col">
                      <div class="panel panel-small panel-team-lead panel-medium">
                          <p><a href="roles/master.html">Master/Coach</a></p>
                          <p><a href="roles/teamlead_tracker.html">Team Leader/Tracker</a></p>
                      </div>
                  </div>
              </div>
              <div class="row align">
                  <div class="col">
                      <div class="panel panel-small panel-development-team panel-medium">
                          <h2><a href="roles/development_team.html">Development team</a></h2>
                          <p><a href="roles/tester.html">Tester</a></p>
                          <p><a href="roles/ui_designer.html">UI Designer</a></p>
                          <p><a href="roles/writer.html">Writer</a></p>
                          <p><a href="roles/architect.html">Architect</a></p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-5 col-border">
              <div class="row align">
                  <div class="col">
                      <div class="panel panel-small panel-product-owner panel-big">
                          <p><a href="roles/business_sponsor.html">Business sponsor</a></p>
                          <p><a href="roles/senior_designer.html">Senior designer</a></p>
                          <p><a href="roles/project_manager.html">Project manager</a></p>
                          <p><a href="roles/business_visionary.html">Business visionary</a></p>
                          <p><a href="roles/technical_coordinator.html">Technical coordinator</a></p>
                          <p><a href="roles/business_analyst.html">Business expert/Business analyst</a></p>
                      </div>
                  </div>
              </div>
              <div class="row align">
                  <div class="col">
                      <div class="panel panel-small panel-team-lead panel-big">
                          <p><a href="roles/master.html">Master/Coach</a></p>
                          <p><a href="roles/teamlead_tracker.html">Team Leader/Tracker</a></p>
                      </div>
                  </div>
              </div>
              <div class="row align">
                  <div class="col">
                      <div class="panel panel-small panel-development-team panel-big">
                          <h2><a href="roles/development_team.html">Development team</a></h2>
                          <p><a href="roles/tester.html">Tester</a></p>
                          <p><a href="roles/ui_designer.html">UI Designer</a></p>
                          <p><a href="roles/writer.html">Writer</a></p>
                          <p><a href="roles/architect.html">Architect</a></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-2 col-border small"><h2>1-6 members</h2></div>
          <div class="col-5 col-border medium"><h2>6-20 members</h2></div>
          <div class="col-5 col-border big"><h2>20-40 members</h2></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Roles',
  data () {
    return {
      msg: 'Roles'
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 576px) and (max-device-width : 900px){
    .panel-small {
        margin-top: 10px;
        margin-bottom: 10px;
        height: 50px;
        width: 60px;
    }
    .panel-medium {
        margin-bottom: 10px;
        margin-top: 10px;
        height: 130px;
        width: 165px;
    }
    .panel-big {
        margin-top: 10px;
        margin-bottom: 10px;
        height: 175px;
        width: 190px;
    }
    .h1 {
        font-weight: bold;
        font-size: 24px;
    }
    h2 {
        font-size: 17px;
        font-weight: bold;
    }
    p {
        font-size: 9px;
    }
}

@media only screen and (min-width: 900px) and (max-device-width : 1200px){
    .panel-small {
        margin-top: 10px;
        margin-bottom: 10px;
        height: 100px;
        width: 100px;
    }
    .panel-medium {
        margin-bottom: 10px;
        margin-top: 10px;
        height: 200px;
        width: 250px;
    }
    .panel-big {
        margin-top: 10px;
        margin-bottom: 10px;
        height: 290px;
        width: 270px;
    }
    .h1 {
        font-weight: bold;
        font-size: 40px;
    }
    h2 {
        font-size: 24px;
        font-weight: bold;
    }
    p {
        font-size: 20px;
    }
}

@media only screen and (min-width: 1200px){
    .panel-small {
        margin-top: 10px;
        margin-bottom: 10px;
        height: 100px;
        width: 150px;
    }
    .panel-medium {
        margin-bottom: 10px;
        margin-top: 10px;
        height: 225px;
        width: 350px;
    }
    .panel-big {
        margin-top: 10px;
        margin-bottom: 10px;
        height: 275px;
        width: 350px;
    }
    .h1 {
        font-weight: bold;
        font-size: 40px;
    }
}

    .col-border:not(:last-child) {
        border-right: 1px solid #333333;
    }
    .col-border + .col-border {
        border-left: 2px solid #333333;
        margin-left: 0px;
    }
    .borders {
        border-bottom: solid 2px #333333;
        border-top: solid 2px #333333;
    }
    .panel-product-owner {
        background: rgba(34,142,149,0.9);
    }
    .panel-team-lead {
        background: #78C0B6;
        opacity: 100%;
    }
    .panel-development-team {
        background: rgba(126,200,189,0.6);
    }
    .align {
        margin: 0 auto;
    }
    p {
        color: #333333;
    }
    a {
        color: #333333;
        text-decoration: none;
    }
    .panel {
        border: solid 0px;
        border-radius: 10px;
    }
    body {
        font-family: "Roboto Slab";
        color: #333333;
        background: #ffffff;
        text-align: center;
    }
    .small {
        background: rgba(251,235,181,0.76);
        font-weight: bold;
    }
    .medium {
        background: rgba(255,234,158,0.71);
        font-weight: bold;
    }
    .big {
        opacity: 100%;
        background: #FFDA71;
        font-weight: bold;
    }
</style>
