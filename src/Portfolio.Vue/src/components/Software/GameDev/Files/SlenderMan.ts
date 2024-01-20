import {ref} from 'vue';
import basicMovement from '@/components/Software/GameDev/Files/Images/SlenderMan/BasicMovement.png';

export const playerFiles = [
    {
        id: ref(1),
        title: "Movement",
        description: "First I needed to create my player with some basic movement. I started off with making my Gamemode set so I can spawn as my player pawn. Next I got to work on designing my player pawn to have a camera before moving on to the final task for this basic movement start which is to make a look and movement blueprint.",
        image: basicMovement,
    },
]
