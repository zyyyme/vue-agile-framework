<template>
    <div id='app'>
        <svg height="1000" width="1100">	
            <router-link to="/roles"><path d="
            M366,541
            A200 200 0 0 1 366,374
            L 456,421
            A100 100 0 0 0 456,498
            Z" fill="#FFDA71" fill-opacity="100%"></path></router-link>

            <router-link to="/values"><path d="
            M383,350
            A200 200 0 0 1 525,268
            L 532,368
            A100 100 0 0 0 465,408
            Z" fill="#228E95" fill-opacity="90%"></path></router-link>

            <router-link to="/rationale"><path d="
            M560,268
            A200 200 0 0 1 699,353
            L 616,408
            A100 100 0 0 0 549,368
            Z" fill="#78C0B6" fill-opacity="100%"></path></router-link>

            <router-link to="/stages"><path d="
            M714,381
            A200 200 0 0 1 710,544
            L 621,500
            A100 100 0 0 0 622,422
            Z" fill="#7EC8BD" fill-opacity="60%"></path></router-link>

            <router-link to="/artifacts"><path d="
            M696,568
            A200 200 0 0 1 555,651
            L 546,550
            A100 100 0 0 0 614,511
            Z" fill="#FBEBB5" fill-opacity="76%"></path></router-link>

            <router-link to="/practices"><path d="
            M520,648
            A200 200 0 0 1 380,566
            L464,508
            A100 100 0 0 0 530,550
            Z" fill="#FFEA9E" fill-opacity="71%"></path></router-link>
            <router-link to="/roles"><text font-family="Roboto Slab" style="font-size: 30px; color: #333333"  x="360" y="465">Roles</text></router-link>
            <router-link to="/values"><text font-family="Roboto Slab" style="font-size: 30px; color: #333333" transform="rotate(-30)" x="185" y="540">Values</text></router-link>
            <router-link to="/rationale"><text font-family="Roboto Slab" style="font-size: 30px; color: #333333" transform="rotate(30)" x="635" y="-20">Rationale</text></router-link>
            <router-link to="/stages"><text font-family="Roboto Slab" style="font-size: 30px; color: #333333" x="635" y="465">Stages</text></router-link>
            <router-link to="/artifacts"><text font-family="Roboto Slab" style="font-size: 30px; color: #333333" transform="rotate(-30)" x="175" y="820">Artifacts</text></router-link>
            <router-link to="/practices"><text font-family="Roboto Slab" style="font-size: 30px; color: #333333"   transform="rotate(30)" x="630" y="290">Practices</text></router-link>
            <polyline points="250,465 350,465" fill="none" stroke="black" />
            <polyline points="435,300 365,230 265,230" fill="none" stroke="black" />
            <polyline points="650,305 720,235 790,235" fill="none" stroke="black" />
            <polyline points="730,465 830,465" fill="none" stroke="black" />
            <polyline points="640,620 710,690 785,690" fill="none" stroke="black" />
            <polyline points="430,615 360,685 260,685" fill="none" stroke="black" />

            <text font-family="Roboto Slab" style="font-size: 20px; color: #333333" y="200">
                <tspan x="85">Values are important</tspan>
                <tspan dy="20" x="85">because the help to</tspan>
                <tspan dy="20" x="85">develop and create</tspan>
                <tspan dy="20" x="85">exactly the framework</tspan>
                <tspan dy="20" x="85">that is the most efficient</tspan></text>
            <text font-family="Roboto Slab" style="font-size: 20px; color: #333333" y="470">
                <tspan x="50">Division on roles for</tspan>
                <tspan dy="20" x="50">teams of different sizes</tspan>
            </text>
            <text font-family="Roboto Slab" style="font-size: 20px; color: #333333" y="670">
                <tspan x="60">Bank of practices aimed</tspan>
                <tspan dy="20" x="60">to help follow the</tspan>
                <tspan dy="20" x="60">philosophy and values</tspan>
            </text>
            <text font-family="Roboto Slab" style="font-size: 20px; color: #333333" y="200">
                <tspan x="790">Philosophy of the</tspan>
                <tspan dy="20" x="790">framework. Helpes to</tspan>
                <tspan dy="20" x="790">understand the ideas</tspan>
                <tspan dy="20" x="790">behind that are aimed</tspan>
                <tspan dy="20" x="790">to improve project</tspan>
                <tspan dy="20" x="790">managment process</tspan>
            </text>
            <text font-family="Roboto Slab" style="font-size: 20px; color: #333333" y="450">
                <tspan x="830">Stages  of Product</tspan>
                <tspan dy="20" x="830">Development</tspan>
                <tspan dy="20" x="830">Process</tspan>
            </text>
            <text font-family="Roboto Slab" style="font-size: 20px; color: #333333" y="670">
                <tspan x="790">Documentation taken</tspan>
                <tspan dy="20" x="790">during the</tspan>
                <tspan dy="20" x="790">development process</tspan>
            </text>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Overview',
    data () {
        return {
            msg: 'Overview'
        }
    }
}
</script>

<style scoped>

</style>