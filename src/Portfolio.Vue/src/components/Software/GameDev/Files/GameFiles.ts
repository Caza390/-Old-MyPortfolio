import {ref} from 'vue';
import mySite from '@/components/Software/Projects/Files/Images/MySite.png';

import oldPortfolio from '@/components/Software/Projects/Files/Images/2023/OldPortfolio.png';

/* Template
    {
        id: ref(0),
        title: "",
        description: "",
        startDate: new Date("2023-03-11"),
        endDate: new Date("2023-08-27"),
        image: ,
        route: "/game_dev/"
    },
*/

export const undertaking = [
    {
        id: ref(1),
        title: "SlenderMan",
        description: "This is a first game project. Making something similar to the game known as SlenderMan. Following similar concept.",
        startDate: new Date("2023-10-30"),
        image: mySite,
        route: '/game_dev/slender-man'
    },
]

export const twenty_three = [
    {
        id: ref(1),
        title: "My Old Portfolio Sites",
        description: "This is my old portfolio projects that I have worked on, but ether I learnt something new or went to try a whole new method.",
        startDate: new Date("2023-03-11"),
        endDate: new Date("2023-08-27"),
        image: oldPortfolio,
        route: '/projects/old_portfolio'
    },
]