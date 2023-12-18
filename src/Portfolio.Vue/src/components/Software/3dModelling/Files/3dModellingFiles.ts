import {ref} from 'vue';
import badgeStand from '@/components/Software/3dModelling/Files/Images/2023/Badge_Stand_(27_11_2023).png';
import drawers from '@/components/Software/3dModelling/Files/Images/2023/Drawers_(14_08_2023).png';

import colt1911 from '@/components/Software/3dModelling/Files/Images/2020/Colt_1911_(17_08_2020).png';
import glock19 from '@/components/Software/3dModelling/Files/Images/2020/Glock_19_LoPo_(14_08_2020).png';
import ar22 from '@/components/Software/3dModelling/Files/Images/2020/AR_22_Unfinished_(16_08_2020).png';
import m1a1carbine from '@/components/Software/3dModelling/Files/Images/2020/M1A1_Carbine_Unfinished_(26_08_2020).png';

/* Template
    {
        id: ref(0),
        title: "",
        description: "",
        date: new Date("2023-11-06"),
        image: 
    },
*/

export const twenty_three = [
    {
        id: ref(1),
        title: "Badge Stand",
        description: "This model was used in a 3D print for my brother. He needed a stand to fit his badges and asked if I could print him a badge stand. First I checked around to see if there were any about, before creating this item. This is the first time I went to make a 3D printed model and had to make sure I set my measurements right before sending it to the printer. When I first created this model I had some what of a different idea but resulted to making this due to my beginner level in 3D printing. I also needed to make sure the badge holders would fit the model so I created a template in blender too.",
        date: new Date("2023-11-27"),
        image: badgeStand,
    },
    {
        id: ref(2),
        title: "Drawers",
        description: "Here was a design idea I had for a set of changable drawer system I wanted in my room. At the time I did not have a 3D printer to make this model a reality. The goal of this model was that the part which connects the wood would be 3D printed, all wooded parts would have the same hole placement to each similar part which allowed the ability to not make mistakes and allow changes to fit each environment perfectly.",
        date: new Date("2023-11-06"),
        image: drawers,
    },
]

export const twenty_twenty = [
    {
        id: ref(1),
        title: "Colt 1911",
        description: "During a time that I was attempting in making a VR FPS I took the challenge to make myself some Lo-Poly gun models. While making this model you can see that the Lo-Poly design went out the window. This is my most proudest 3D model since it was the first one I have ever completed and manage to get into the game that I was making on Unreal Engine 4. Everything from the triger, hammer, mag, slider and safety can all function to be animated.",
        date: new Date("2020-08-17"),
        image: colt1911,
    },
    {
        id: ref(2),
        title: "Glock 19 (Lo-Poly)",
        description: "This is the first model I have ever made in blender. Glocks are one of my favourite guns. Being the benefit of having an airsoft version of a glock 19 it was no surprise for me to give it ago at modelling. This was following the idea of the game I was working on, since the game was to follow a lo-poly style, I made the glock like this. If I recall correctly - this model had the ability to move the slide back.",
        date: new Date("2020-08-14"),
        image: glock19,
    },
    {
        id: ref(3),
        title: "AR-22 (Unfinished - somewhat)",
        description: "Here is the first time I decided to make a bigger weapon for the game I was making. Dispite the label being classed as unfinished, this technically was a finish design. I classed it as unfinshed since there are some things missing to this weapon like the iron sights. but at the time of making this gun I was proud with what I created and was happy enough to finish it up as an obj file and have it in my game.",
        date: new Date("2020-08-16"),
        image: ar22,
    },
    {
        id: ref(4),
        title: "M1A1 Carbine (Unfinished)",
        description: "This was the last model I made before putting the game to rest. I ended up hitting a fair few roadblocks along the way that I was not ready at the time, along with this my gaming group playing other games and the VR enjoyment fading away. This is still an important part of my development/modelling path hence me keeping it here.",
        date: new Date("2020-08-26"),
        image: m1a1carbine,
    },
]