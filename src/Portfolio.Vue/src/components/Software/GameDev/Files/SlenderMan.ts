import {ref} from 'vue';
import basicMovement from '@/components/Software/GameDev/Files/Images/SlenderMan/BasicMovement.png';
import sprint from '@/components/Software/GameDev/Files/Images/SlenderMan/Sprint.png'
import flashlight from '@/components/Software/GameDev/Files/Images/SlenderMan/Flashlight.png'
import pages from '@/components/Software/GameDev/Files/Images/SlenderMan/Pages.gif'

/*
    {
        id: ref(0),
        title: "title",
        description: "description",
        image: imagename,
    },
*/

export const playerFiles = [
    {
        id: ref(1),
        title: "Movement",
        description: "First I needed to create my player with some basic movement. I started off with making my Gamemode set so I can spawn as my player pawn. Next I got to work on designing my player pawn to have a camera before moving on to the final task for this basic movement start which is to make a look and movement blueprint. One problem I have come accross is when the player is looking down, they don't move as fast - this will be something I will have to look into later",
        image: basicMovement,
    },
    {
        id: ref(2),
        title: "Sprint and Stamina",
        description: "Using a video created by 'Matt Aspland - Sprinting and Stamina' I managed to make my character start off at a slow walking speed so that the player, when they feel the need to, they can sprint. But to stop the abuse of over using the sprint function I wanted to create a stamina limitation. So using this video, I managed to add the ability to sprint for a set amount of time before having to wait a little bit before you can run at full capacity. A current bug I am seeing right now is when the player holds shift, despite not moving the stamina will still go down.",
        image: sprint,
    },
    {
        id: ref(3),
        title: "Flashlight",
        description: "I have created a flashlight for my project. Since the game relies on the darkness, I needed to make sure the players can see with ease. This is where a great tool known as the flashlight comes in. I also made it so the player can pick up the flashlight, creating a real object to be placed in their hand compared to just shining from the players face. The current problem I am facing with my light is a possible Lumen cause. This wasn't something I had to deal with before and from my current research and asking for help, it just lead me down a problem that doesn't seem to be fixable (for now of course) I used my old UE4 tutorial and some other help by Gorka Games.",
        image: flashlight,
    },
    {
        id: ref(3),
        title: "Pages",
        description: "Since the game relies on finding pages to finish the game, I needed to make it so I can interact with the pages, have it tell the player they have collected a page and have the pages count up. The goal from this stage is to make it so eventually the pages will allow you access to a house which will lead to the escape of SlenderMan.",
        image: pages,
    },
]
