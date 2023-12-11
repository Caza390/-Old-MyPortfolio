import {ref} from 'vue';

/* Template
    {
        id: ref(0),
        title: "",
        description: "",
        endDate: new Date("2023-10-27"),
        startDate: new Date("2023-10-30"),
        image: "../src/components/Software/3dModelling/Files/Images/",
        route: "/projects/"
    },
*/

export const undertaking = [
    {
        id: ref(1),
        title: "My Portfolio Site",
        description: "This is about the portfolio site, the one that you are currently on. The goal is to keep this one up-to-date.",
        startDate: new Date("2023-10-30"),
        image: "../src/components/Software/Projects/Files/Images/MySite.png",
        route: '/projects/main_portfolio'
    },
]

export const twenty_three = [
    {
        id: ref(1),
        title: "My Old Portfolio Sites",
        description: "This is my old portfolio projects that I have worked on, but ether I learnt something new or went to try a whole new method.",
        startDate: new Date("2023-03-11"),
        endDate: new Date("2023-08-27"),
        image: "../src/components/Software/Projects/Files/Images/2023/OldPortfolio.png",
        route: '/projects/old_portfolio'
    },
    {
        id: ref(2),
        title: "Decaf Mechanics",
        description: "This site was a working in progress that I made for a band that I was in called Decaf Mechanics",
        startDate: new Date("2023-01-28"),
        endDate: new Date("2023-02-22"),
        image: "../src/components/Software/Projects/Files/Images/2023/DecafMechanics.png",
        route: '/projects/decaf_mechanics'
    },
]