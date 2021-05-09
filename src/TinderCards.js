import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import { SwipeableDrawer } from "@material-ui/core";


function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/400px-Elon_Musk_Royal_Society_%28crop1%29.jpg"

        },
        {
            name: 'Jeff Bezos',
            url: "https://media.newyorker.com/photos/5c5daf63ae58262aa8c4a1b6/master/pass/Cassidy-Bezos.jpg"

        }

    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("Removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tindercards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div style={{ backgroundImage: `url(${person.url})` }} className="card"></div>
                    </TinderCard>
                ))}
            </div>
        </div >
    );
}

export default TinderCards;