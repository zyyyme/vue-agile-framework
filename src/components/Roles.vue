<template>
  <div id='app'> 
  <span style="display: flex; align-items: center; justify-content: center;">
    <svg height="800" width="800">
        
        <!--
        <line x1="590.212" y1="461.804" x2="707.768" y2="500" stroke-dasharray="4" stroke="#000000"></line>
        <line x1="517.558" y1="238.196" x2="590.211" y2="138.197" stroke-dasharray="4" stroke="#000000"></line>
        <line x1="282.442" y1="238.196" x2="209.789" y2="138.197" stroke-dasharray="4" stroke="#000000"></line>
        <line x1="209.788" y1="461.804" x2="92.232" y2="500" stroke-dasharray="4" stroke="#000000"></line>
        <line x1="400" y1="600" x2="400" y2="723.606" stroke-dasharray="4" stroke="#000000"></line>
        -->
        <a @click="$bvModal.show('team-lead-modal')"><path  d="
        M 400.000 600.000
        L 635.114 723.606
        L 590.212 461.804
        L 400.000 600.000" fill="#7EC8BD" fill-opacity="60%"></path></a>

        <a @click="$bvModal.show('coach-modal')"><path d="
        M 590.212 461.804
        L 780.422 276.394
        L 517.558 238.196
        L 590.212 461.804" fill="#78C0B6" fill-opacity="100%"></path></a>

        <a @click="$bvModal.show('pm-modal')"><path d="
        M 517.558 238.196
        L 400.000 0.000
        L 282.442 238.196
        L 517.558 238.196" fill="#228E95" fill-opacity="90%"></path></a>

        <a @click="$bvModal.show('tester-modal')"><path d="
        M 282.442 238.196
        L 19.578 276.394
        L 209.788 461.804
        L 282.442 238.196" fill="#FFDA71" fill-opacity="100%"></path></a>

        <a @click="$bvModal.show('dev-team-modal')"><path d="
        M 209.788 461.804
        L 164.886 723.606
        L 400.000 600.000
        L 209.788 461.804" fill="#FFEA9E" fill-opacity="71%"></path></a>

        <a @click="$bvModal.show('team-lead-modal')"><text font-family="Roboto Slab" style="font-size: 30px; color: #333333; font-weight: bold" transform="rotate(-36)" y="780"><tspan x="40">Team</tspan><tspan x="45" dy="30">Lead</tspan></text></a>
        <a @click="$bvModal.show('coach-modal')"><text font-family="Roboto Slab" style="font-size: 30px; color: #333333; font-weight: bold" transform="rotate(72)" x="455" y="-460">Coach</text></a>
        <a @click="$bvModal.show('pm-modal')"><text font-family="Roboto Slab" style="font-size: 30px; color: #333333; font-weight: bold" transform="rotate(0)" y="160"><tspan x="350">Project</tspan><tspan x="340" dy="30">Manager</tspan></text></a>
        <a @click="$bvModal.show('tester-modal')"><text font-family="Roboto Slab" style="font-size: 30px; color: #333333; font-weight: bold" transform="rotate(288)" x="-300" y="300">Tester</text></a>
        <a @click="$bvModal.show('dev-team-modal')"><text font-family="Roboto Slab" style="font-size: 30px; color: #333333; font-weight: bold"   transform="rotate(36)" y="290"><tspan x="465">Development</tspan><tspan x="510" dy="30">Team</tspan></text></a>

        <text font-family="Roboto Slab" style="font-size: 70px; color: #333333; font-weight: bold" x="320" y="420">Roles</text>


    </svg>
  </span>
  <b-modal size='xl' ref='team-lead-modal' id='team-lead-modal' title='Team Lead' ok-only>
        <h3>Description: </h3> 
        <h5>A proactive member of the Development Team who has more knowledge about technical moments. </h5>
        <h3>Responsibilities:</h3>
        <ul>
            <li><h5>Schedule and conduct Daily Stand-Ups and iteration planning meetings.</h5></li>
            <li><h5>Participate with the team while they estimate in order to provide feedback 
              on how reality conformed to their prior estimates, both at team level and individual 
              level that eventually help them to come up with better estimates next time.</h5></li>
            <li><h5>Ensure that the team is working towards the next release as they progress through 
              the iterations with committed schedule and committed functionality.</h5></li>
            <li><h5>Track functional testing defects.</h5></li>
            <li><h5>Track the actual time spent by each team member.</h5></li>
            <li><h5>And other duties of a member of the Development Team.</h5></li>
                
        </ul>
    </b-modal>
    <b-modal size='xl' ref='dev-team-modal' id='dev-team-modal' title='Development Team' ok-only>
        <h3>Description: </h3> 
        <h5>A cross-functional, self-organizing collection of individuals working together 
          to develop and deliver the requested and committed product increments.</h5>
        <h3>Responsibilities:</h3>
        <h5>1. Build the product that the Project Manager indicates: </h5>
        <ul>
            <li><h5>Estimate user stories and define tasks from them.</h5></li>
            <li><h5>Write code.</h5></li>
            <li><h5>Design Unit Tests and perform them; report results.</h5></li>
            <li><h5>Refactor code and perform continuous integration.</h5></li>               
        </ul>
        <h5>2. Decide how many items to build in an Iteration, and how best to accomplish that goal. </h5>
    </b-modal>
    <b-modal size='xl' ref='tester-modal' id='tester-modal' title='Tester' ok-only>
        <h3>Description: </h3> 
        <h5>A team member performing product testing and responsible for the quality of 
          the final product.</h5>
        <h3>Responsibilities:</h3>
        <ul>
            <li><h5>Write and conduct various types of testing configured to examine how 
              well the whole system meets external requirements and achieves goals, 
              such as performance.</h5></li>
            <li><h5>Provide testing status information at Daily Stand-Ups Meetings.</h5></li>
            <li><h5>Perform maintenance on the automated acceptance test suite.</h5></li>
            <li><h5>Work with a Project Manager on new test ideas.</h5></li>    
            <li><h5>Provide business support for customer testing.</h5></li>  
            <li><h5>Work on risk assessments and test strategy on emerging stories.</h5></li> 
         
        </ul>
    </b-modal>
    <b-modal size='xl' ref='coach-modal' id='coach-modal' title='Coach' ok-only>
        <h3>Description: </h3> 
        <h5>An influential leader who enables close cooperation across all roles and controls the 
          process of following the Framework’s philosophy and practices.</h5>
        <h3>Reasoning: </h3> 
        <h5> Coach fulfills role of creating and maintaining agile processes in the 
          development team to deliver value and order.</h5>
        <h3>Desired Qualities:</h3>
        <ul>
            <li><h5>Understands, lives and embodies by principles and values of agile.</h5></li>
            <li><h5>Cultivate the culture of agile in the development team.</h5></li>
            <li><h5>Strong communication and interpersonal skills.</h5></li>
            <li><h5>Training development team techniques and practices of methodology.</h5></li>    
            <li><h5>Mentoring the development team.</h5></li>  
            <li><h5>Have a lot of experience with different agile methodologies.</h5></li> 
         
        </ul>
        <h3>Responsibilities:</h3>
        <ul>
            <li><h5>Understand, in depth, the application of the Framework to the project.</h5></li>
            <li><h5>Control performance of the Framework’s practices by ALL other roles.</h5></li>
            <li><h5>Provide assistance in understanding stages, practices and 
              principles of the Framework.</h5></li>
            <li><h5>Help to perform Methodology Shaping practice.</h5></li>    
            <li><h5>Conduct Workshops during the Iteration Analysis Stage.</h5></li>  
            <li><h5>Communicate with the Team Leader, Development team and Tester, 
              and solve interpersonal conflicts.</h5></li> 
         
        </ul>
    </b-modal>
    <b-modal size='xl' ref='pm-modal' id='pm-modal' title='Project Manager' ok-only>
        <h3>Description: </h3> 
        <h5>A sole person accountable for product, budget, interactions with clients.</h5>
        <h3>Reasoning: </h3> 
        <h5> PM fulfills the role of proxy between stakeholders and everyone who is working 
          on a project. He is responsible for the project.</h5>
        <h3>Desired Qualities:</h3>
        <ul>
            <li><h5>Ability to gather and combine opinions from stakeholders.</h5></li>
            <li><h5>Negotiation skills.</h5></li>
            <li><h5>Open-mindness.</h5></li>
            <li><h5>Ability to imagine customer needs and desires, what would be a waste 
              of resources.</h5></li>    
            <li><h5>See potential in product.</h5></li>  
            <li><h5>Ability to judge what idea will be most valuable.</h5></li> 
            <li><h5>Personality to resolve conflicts and inspire people.</h5></li> 
            <li><h5>Availability to the development team and stakeholders.</h5></li> 
        </ul>
        <h3>Responsibilities:</h3>
        <h5> 1. Maximize the value of the product. </h5>
        <h5> 2. Manage the Product Backlog and Iteration Backlog which includes: </h5>
        <ul>
            <li><h5>Planning and prioritizing Iteration Backlog.</h5></li>
            <li><h5>Defining Team Agreement (Definition of Done, Acceptance 
              Criterias) of User Stories and validating completed User Stories.</h5></li>
            <li><h5>Clearly expressing Product Backlog and Iteration Backlog items, 
              so that everyone from the Development Team understands them.</h5></li>
            <li><h5>Ordering the items in the Product Backlog and Iteration Backlog, 
              optimizing the work process to achieve goals in a more efficient way.</h5></li>    
            <li><h5>Ensuring that the Product Backlog and Iteration Backlog is visible, 
              transparent, clear to all, and shows the progress of the Development Team.</h5></li>   
        </ul>
        <h5> Making decisions that are required from time to time on the extent of 
          functionality that is required. </h5>
        <h5>  Set and meet deadlines.</h5>
    </b-modal>
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
svg>a{
  cursor: pointer;
}

</style>
