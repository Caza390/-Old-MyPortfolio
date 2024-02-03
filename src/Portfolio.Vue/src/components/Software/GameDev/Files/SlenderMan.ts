import {ref} from 'vue';
import basicMovement from '@/components/Software/GameDev/Files/Images/SlenderMan/BasicMovement.png';
import sprint from '@/components/Software/GameDev/Files/Images/SlenderMan/Sprint.png'

export const playerFiles = [
    {
        id: ref(1),
        title: "Movement",
        description: "First I needed to create my player with some basic movement. I started off with making my Gamemode set so I can spawn as my player pawn. Next I got to work on designing my player pawn to have a camera before moving on to the final task for this basic movement start which is to make a look and movement blueprint.",
        image: basicMovement,
    },
    {
        id: ref(2),
        title: "Sprint and Stamina",
        description: "Using a video created by 'Matt Aspland - Sprinting and Stamina' I managed to make my character start off at a slow walking speed so that the player, when they feel the need to, they can sprint. But to stop the abuse of over using the sprint function I wanted to create a stamina limitation. So using this video, I managed to add the ability to sprint for a set amount of time before having to wait a little bit before you can run at full capacity.",
        image: sprint,
    },
]
