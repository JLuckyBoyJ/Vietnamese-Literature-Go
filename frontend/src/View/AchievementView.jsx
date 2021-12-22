import React, {useState, useEffect} from "react";

export default function Achievement() {
    const fakeData = [
        {
            id: 1,
            name: "Ke huy diet van hoc Hung Yen",
        },
        {
            id: 2, 
            name: "Nu hoang van hoc",
        }
    ]

    return(
        <div>
            <ul>
                {fakeData.map(achivement => {
                    return (
                        <li id={achivement.id}>{achivement.name}</li>
                    )
                })}
            </ul>
        </div>
    );
}