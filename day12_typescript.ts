"use strict";
const input = `<x=-1, y=7, z=3>
<x=12, y=2, z=-13>
<x=14, y=18, z=-8>
<x=17, y=4, z=-4>`.split("\n").map(e => [e.replace(/<|>/g, "")
        .split(", ")
        .map(v => +v.split("=")[1]),[0, 0, 0]]);
const next = (moonSystem) => moonSystem.map((moon, moonIndex, moons) => [moon[0].map((moonProp, propIndex) => moon[1][propIndex] + moons.reduce((acc, moon2, moon2Index) => {
        let moon2Prop = moon2[0][propIndex];
        return moonIndex == moon2Index ? moonProp + acc : acc + (moon2Prop > moonProp ? 1 : moon2Prop < moonProp ? -1 : 0);
    }, 0)), moon[0]]).map(m => [m[0], m[1].map((p, i) => m[0][i] - p)]);
const moonSteps = (moonSystem, steps, n=0) => n++ < steps ? moonSteps(next(moonSystem),steps,n) : moonSystem.reduce((y, h) => y + h.reduce((i, j) => i * j.reduce((a, b) => (Math.abs(a) + Math.abs(b))), 1), 0);

const answer = moonSteps(input,1000);
