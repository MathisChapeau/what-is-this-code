import React, { useState, useEffect } from "react";
const code = require("../code.json");

function Main() {

    const [points, setPoints] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(Math.floor(Math.random() * code.length));
    })

    const zebi = code[count].Code;

    const boutons = [
        "HTML",
        "JS",
        "Kotlin"
    ]
    const reponse = code[count].Reponse


    const handleCliks = (rep) => {
        if (rep === reponse) {
            setPoints(points + Math.floor(Math.random() * 50));
        } else {
            setPoints(0);
        }
        setCount(Math.floor(Math.random() * code.length));
    }


    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl text-white pt-20 md:pt-44 font-bold text-center">
                {points} {points === 0 ? "point" : points === 1 ? "point" : "points"}
            </h1>

            <pre className="w-full md:w-1/2 h-72 md:h-96 mx-auto mt-5 rounded-xl" style={{ backgroundColor: "#a48c2b" }}>
                <code className="text-white pl-2 overflow-auto">
                    {zebi}
                </code>
            </pre>

            <div className="mt-5 text-center space-x-3">
                {boutons.map((bouton, index) => (
                    <button
                        key={index}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleCliks(bouton)}
                    >
                        {bouton}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Main;
