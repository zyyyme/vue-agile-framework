<template>
  <div id='app'> 
    <svg height="1000" width="1000">
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7"
                    refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" />
            </marker>
        </defs>
        <text font-family="Roboto Slab" stroke="#333333" font-size="30" x="490" y="580">Success</text>
        <path d="M528.5,706 a200 100 30 0 1 -100 100" stroke="black" fill="transparent" marker-end="url(#arrowhead)"></path>
        <path d="M440,502.5 a200 100 -30 0 1 -100 -100" stroke="black" fill="transparent" marker-end="url(#arrowhead)"></path>
        <path d="M658.5 526.5 a200 100 30 0 0 100 -100" stroke="black" fill="transparent" marker-end="url(#arrowhead)"></path>
        <path d="
        M342,670
        L538,335
        A 7 7 0 0 1 548,336
        A 1000 1000 0 0 1 585,436
        A 1000 1000 0 0 1 602,516
        A 500 500 0 0 1 602,556
        A 100 100 0 0 0 489 529
        A 800 800 0 0 0 342,670" fill="#FFDA71" fill-opacity="100%" stroke="#333333" stroke-width="1px"></path>
        <path d="
        M561,359
        L756,694
        A 7 7 0 0 1 749,702
        A 1000 1000 0 0 1 699,696
        A 1000 1000 0 0 1 597,673
        A 500 500 0 0 1 531,640
        A 100 100 0 0 0 606,516
        A 800 800 0 0 0 561,359
        " fill="#FFEA9E" fill-opacity="90%" stroke="#333333" stroke-width="1px"></path>
        <path d="
        M718,706
        L331,706
        A 7 7 0 0 1 331,694
        A 1000 1000 0 0 1 356,660
        A 1000 1000 0 0 1 398,612
        A 500 500 0 0 1 492,538
        A 100 100 0 0 0 553,662
        A 800 800 0 0 0 718,706
        " fill="#FBEBB5" fill-opacity="76%" stroke="#333333" stroke-width="1px"></path>
        <text font-family="Roboto Slab" style="font-size: 30px; color: #333333; font-weight:500;"  x="475" y="465">Product</text>
        <text font-family="Roboto Slab" style="font-size: 30px; color: #333333; font-weight:500;"  x="590" y="650">Dev team</text>
        <text font-family="Roboto Slab" style="font-size: 30px; color: #333333; font-weight:500;" x="380" y="660">Customer</text>
        <path d="
        M145,250
        h310
        a20 20 0 0 1 20 20
        v105
        a20 20 0 0 1 -20 20
        h-310
        a20 20 0 0 1 -20 -20
        v-105
        a20 20 0 0 1 20 -20
        Z
    " fill="none" stroke="#333333" stroke-width="3px"></path>
        <path d="
        M675,270
        h300
        a20 20 0 0 1 20 20
        v110
        a20 20 0 0 1 -20 20
        h-300
        a20 20 0 0 1 -20 -20
        v-110
        a20 20 0 0 1 20 -20
        Z
    " fill="none" stroke="#333333" stroke-width="3px"></path>
        <path d="
        M115,750
        h285
        a20 20 0 0 1 20 20
        v70
        a20 20 0 0 1 -20 20
        h-285
        a20 20 0 0 1 -20 -20
        v-70
        a20 20 0 0 1 20 -20
        Z
    " fill="none" stroke="#333333" stroke-width="3px"></path>
        <text font-family="Roboto Slab" stroke="#333333" font-size="20" y="280">
            <tspan x="180">Represent the needs </tspan>
            <tspan dy="20" x="180">of the target audience</tspan>
        </text>
        <text font-family="Roboto Slab" style="color: #228E95;" font-size="20" y="300">
            <a @click="$bvModal.show('min-waste-modal')"><tspan dy="40" x="130">Minimum waste & Maximum value</tspan></a>
            <a @click="$bvModal.show('people-oriented-modal')"><tspan dy="40" x="200">People oriented</tspan></a>
        </text>

        <text font-family="Roboto Slab" stroke="#333333" font-size="20" y="300">
            <tspan x="680">Knows how to implement ideas</tspan>
        </text>
        <text font-family="Roboto Slab" style="color: #228E95;" font-size="20" y="300">
            <a @click="$bvModal.show('cfso-modal')"><tspan dy="40" x="660">Cross-functional & Self-organizing </tspan></a>
            <a @click="$bvModal.show('otd-modal')"><tspan dy="40" x="760">On time delivery</tspan></a>
            
        </text>

        <text font-family="Roboto Slab" stroke="#333333" font-size="20" y="780">
            <tspan x="105">Knows how to run the business</tspan>
        </text>
        <text font-family="Roboto Slab" style="color: #228E95;" font-size="20" y="800">
            <a @click="$bvModal.show('tnc-modal')"><tspan dy="40" x="100">Transparency & Communication</tspan></a>
        </text>
        
    </svg>
    <b-modal size='xl' ref='min-waste-modal' id='min-waste-modal' title='Minimum Waste & Maximum Value' ok-only>
        <h5>Identify every step that does not create value and then find 
            ways to eliminate those wasteful steps.</h5>
        <ol>
            <li><h5>Teams will have a defined process and understand the value each stage adds. </h5></li>
            <li><h5>Teams limit the amount of work they have in progress / not released. </h5></li>
            <li><h5>Teams defer making decisions until the last responsible moment — 
                they don’t box themselves into corners — they reduce the amount of 
                rework (n.b. the key word on this one is “responsible” — don’t fall into 
                the procrastination trap). </h5></li>
            <li><h5>Teams have established a “need” before embarking on developing a feature. </h5></li>
            <li><h5>Team regularly reviews its processes to eliminate wasteful process. </h5></li>
            <li><h5>Team frequently inspects its goal(s) to check it’s still the right 
                thing to be doing. </h5></li>
            <li><h5>Teams readily make use of solutions (designs / code libraries etc) 
                created by others (internal or external). </h5></li>
        </ol>
        <h3>Techniques that can help to achieve the state:</h3>
        <ol>
            <li><h5>Stand-ups and retrospectives are a great way to ensure you’re 
                all focused on doing the right thing, and to review your processes 
                and agree experiments to see if improvements can be made.</h5></li>
            <li><h5>Kanban, with WIP (work in progress) limits are a great way 
                to control the amount of work started and identify the 
                bottlenecks in your process — with that information you 
                can inspect and adapt.</h5></li>
            <li><h5>Systems Thinking; Current Reality Trees; The 5 
                Whys are all techniques that can help you explore 
                your process and the problems you’re experiencing.</h5></li>
            <li><h5>User story mapping and focusing on an MVP (minimum viable 
                product) can help ensure you’re focusing on the right bit of 
                functionality, and a Spike and Stabilise approach can help 
                ensure you don’t gold plate unnecessarily.</h5></li>               
        </ol>
        <h3>Key Benefits:</h3>
        <h5>Faster fulfillment, and greater demand for customized products and service.</h5>

    </b-modal>
    <b-modal size='xl' ref='people-oriented-modal' id='people-oriented-modal' title='Orientation on People' ok-only>
        <h5>Agile methods assert that no process will ever make up the skill of the development 
            team, so the role of a process is to support the development team in their work. 
            “According to many studies, people aspects are crucial to the implementation of 
            agile approaches in project management..”.</h5>
        <h3>Techniques that can help to achieve the state: </h3>
        <ol>
            <li><h5>Focus on smaller and more frequent interactions on the project, 
                since they enable faster and more frequent feedback. </h5></li>
            <li><h5> Promotion of face-to-face communication. </h5></li>
            <li><h5>Sustainable pace of work. </h5></li>
            <li><h5>Adapting the behavior of team members as a reflection of the previous phase. </h5></li>
        </ol>
        <h3>Key benefits:</h3>
        <ol>
            <li><h5>Positive working atmosphere and work with motivated team members.</h5></li>
            <li><h5>Joint work of all partners on the project.</h5></li>
            <li><h5>Greater customer/manager satisfaction with faster 
                returns of money invested at the end of each iteration.</h5></li>
        </ol>
    </b-modal>
    <b-modal size='xl' ref='cfso-modal' id='cfso-modal' title='Cross-functional & Self-organizing teams' ok-only>
        <h5>Cross-functional teams have all competencies needed to accomplish the work without 
            depending on others not part of the team. It is essential that there is no division 
            based on “responsibilities” or grades within a Development Team — every team member 
            has equal rights and is a part of any team’s success or failure.</h5>
        <h5>Self-organizing means a high degree of autonomy and accountability in terms of 
            technical details of implementation of the product. Best requirements, architectural 
            and technical solutions are born within self-organizing teams.</h5>
        <h5>From Agile Manifesto:</h5>
        <h5>“Build projects around motivated individuals. Give them the environment and 
            support they need, and trust them to get the job done.”</h5>
        <h3>Techniques that can help to achieve the state: </h3>
        <ol>
            <li><h5> Pair programming. </h5></li>
            <li><h5> Test Driven Development. </h5></li>
            <li><h5> Having 5(+-2) people in a dev team. </h5></li>
            <li><h5> Code Review. </h5></li>
        </ol>
        <h3>Key benefits:</h3>
        <ol>
            <li><h5>Quick hypothesis testing.</h5></li>
            <li><h5>Frequent product delivery.</h5></li>
            <li><h5>Transparency (achieved through the events that 
                make team gathering and communication frequent).</h5></li>
            <li><h5>Equality of participants.</h5></li>
        </ol>
    </b-modal>
    <b-modal size='xl' ref='otd-modal' id='otd-modal' title='On Time Delivery' ok-only>
        <h5>OTD refers to a key performance indicator measuring the rate of finished 
            product and deliveries made in time. This rate is expressed in a total 
            number of units delivered within a set period defined by the customer 
            and the supplier. Customers expect you to meet the promised delivery 
            date. It is important to set the right expectations with your customers and meet them</h5>
        <h3>Techniques that can help to achieve the state: </h3>
        <ol>
            <li><h5> Cross-functional and self-organizing teams. </h5></li>
            <li><h5> Estimate features, rather than tasks. </h5></li>
            <li><h5> Keep your estimates high-level intuitive guesses (don’t analyse the 
                details). </h5></li>
            <li><h5> Estimate in points to indicate the relative size of each feature. </h5></li>
            <li><h5> At the end of your Sprint (or iteration), score the points for 
                all features you managed to deliver. Only score points for features 
                100% complete, tested and potentially shippable. This is your Velocity. 
                Count zero for incomplete features. </h5></li>
            <li><h5> Track your Velocity over time on a graph. You can also track your 
                Reliability, i.e. the number of points delivered as a percentage of the 
                number of points committed to at the start of the Sprint. </h5></li>
            <li><h5> At the start of each Sprint, look back at your Velocity for recent Sprints 
                to decide how much to commit to for the coming Sprint. </h5></li>
            <li><h5> Don’t try to reconcile points with hours or days. </h5></li>
        </ol>
        <h3>Key benefits:</h3>
        <h5> Drives better collaboration with your customers, ensures reliability of 
            delivery and most importantly customer loyalty. The improvement of On Time 
            Delivery is a major challenge to increase the enterprise’s level of customer 
            service and strengthen its competitive position in the market.</h5>
    </b-modal>
    <b-modal size='xl' ref='tnc-modal' id='tnc-modal' title='Transparency & Communication' ok-only>
        <h5>Transparency describes the underlying need for Agile teams to ‘be in the know.’ 
            This is born out of the fundamental characteristic of complex problems. 
            Complexity, by its very nature is unknown, to solve a complex problem 
            requires an individual, team or organization to do something and then 
            inspect the results.</h5>
        <h5>It is crucial to make transparent the following parts:</h5>
        <ol> 
            <li><h5>The work being done – It is important that the team frequently 
                inspects the work being undertaken. Daily Stand-Ups provides a formal 
                structure where the team inspects the Iteration and determines if they 
                should change or adapt anything to improve the outcomes. </h5></li>
            <li><h5>The work that has been done – Agile teams deliver incrementally or 
                continuously. That means that the work is not just interesting when 
                being developed, but also when it is being used. </h5></li>
            <li><h5>The way the work is being done – Not only does the end product 
                need to be transparent, but also the way the work is being done. 
                Agile teams are always looking to improve their craft and deliver 
                better products with less effort. Every Iteration should include at 
                least one team improvement.</h5></li>
            <li><h5>The potential next chunk of work – No highly effective team 
                concentrates solely on the immediate work. In fact, they are 
                always looking to what is next. </h5></li>
            <li><h5>The progress against the vision – This seems obvious, but 
                how often have you been so focused on the immediate task at 
                hand that you forget the context that work is in? This is even 
                more true for larger and more complex problems where the ultimate 
                vision is broad and long term. By making the vision transparent 
                and accessible to the team, agile teams will always work with 
                that goal in mind.</h5></li>
        </ol>
        <h3>Techniques that can help to achieve the state: </h3>
        <h5>Ask these questions to reach better transparency: </h5>
        <ol>
            <li><h5> Can we make this more visible? </h5></li>
            <li><h5> How do we measure the outcome of this work? </h5></li>
            <li><h5> How do we keep this information up to date? </h5></li>
            <li><h5> Can this be easier?(The team needs to work 
                on making things easy, putting in automation and 
                using tools that make transparency a natural part of working.)  </h5></li>
            <li><h5> Use burndown charts to be honest about how the team is 
                performing in a given Sprint. A burndown chart tells 
                the true story of how the team is performing.  </h5></li>
            <li><h5> Better communication is achieved through the Communication Practices. </h5></li>
        </ol>
        <h3>Key benefits:</h3>
        <ul>
            <li><h5>Builds trust and strengthens relationships.</h5></li>
            <li><h5>Helps make better decisions and promotes better feedback.</h5></li>
            <li><h5>Helps ensure team members are more aligned with each other and 
                fosters a culture of higher engagement — employees who trust that 
                their leaders are open and honest will engage at a higher level, 
                feel more ownership of company goals, and work harder.</h5></li>
            <li><h5>Reduces risk and surprises.</h5></li>
            <li><h5>Increases accountability.</h5></li> 
        </ul>
    </b-modal>
    <b-modal size='xl' ref='ci-modal' id='ci-modal' title='Continous Integration' ok-only>
        <h5>Development team should always work on the latest version of the software. 
            Developers integrate code into a shared repository frequently, preferably 
            several times a day. Each integration may then be verified by an automated 
            build and automated tests. This practice makes sure the code individual 
            developers work on doesn’t divert too much. When you combine the process 
            with automated testing, continuous integration can enable your code to be dependable.</h5>
        <h3>Techniques that can help to achieve the state: </h3>
        <ol>
            <li><h5>Maintain a Single Source Repository. </h5></li>
            <li><h5>Automate the Build. </h5></li>
            <li><h5>Make Your Build Self-Testing. </h5></li>
            <li><h5>Everyone Commits To the Mainline Every Day. </h5></li>
            <li><h5>Every Commit Should Build the Mainline on an Integration Machine. </h5></li>
            <li><h5>Fix Broken Builds Immediately. </h5></li>
            <li><h5>Keep the Build Fast. </h5></li>
            <li><h5>Test in a Clone of the Production Environment. </h5></li>
            <li><h5>Make it Easy for Anyone to Get the Latest Executable. </h5></li>
            <li><h5>Everyone can see what's happening. </h5></li>
            <li><h5>Automate Deployment. </h5></li>
        </ol>
        <h3>Key benefits:</h3>
        <ol>
            <li><h5>Reduced risk.</h5></li>
            <li><h5> Errors are detected quickly and located more easily. As each change 
                introduced is typically small, pinpointing the specific change that introduced 
                a defect can be done quickly</h5></li>
            <li><h5>Breaks down the barriers between customers and development via 
                frequent deployment, which also allows your users to get new features 
                more rapidly, to give more rapid feedback on those features.</h5></li>
        </ol>
    </b-modal>
  </div>
  
</template>

<script>
export default {
  name: 'Rationale',
  data () {
    return {
      msg: 'Rationale'
    }
  }
}
</script>

<style scoped>
    svg {
        font-weight: 300;
        position: relative;
        top: -200px;
    }

    a{
        cursor: pointer;
    }
</style>
