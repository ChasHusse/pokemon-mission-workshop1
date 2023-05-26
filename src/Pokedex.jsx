import React from "react";
import Pokecard from "./Pokecard";


function Pokedex() {
    const allPokemons = [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]

    let pokemons = allPokemons.map(pokemon => {
        return (
            <Pokecard
                key={pokemon.id}
                name={pokemon.name}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                type={pokemon.type}
                exp={pokemon.base_experience}
            />
        );
    });

    let teamRed = pokemons.map(pokemon => pokemon)
    let teamBlue = []

    let teamRedScore;
    let teamBlueScore;
    let highestScore;

    function randomTeam() {
        for (let i = 0; i < Math.floor(allPokemons.length / 2); i++) {
            let randomPokemon = Math.floor(Math.random() * teamRed.length)
            teamBlue.push(teamRed[randomPokemon])
            teamRed.splice(randomPokemon, 1)
        };

        teamRedScore = teamRed.map(element => element.props.exp)
        teamRedScore = teamRedScore.reduce((a, b) => {
            return a + b;
        }, 0);

        teamBlueScore = teamBlue.map(element => element.props.exp)
        teamBlueScore = teamBlueScore.reduce((a, b) => {
            return a + b;
        }, 0);

        highestScore = teamRedScore > teamBlueScore ? "RED TEAM" : "BLUE TEAM";
    };
    randomTeam();

    const [teams, setTeams] = React.useState({
        team1: teamRed,
        team2: teamBlue,
        winner: highestScore
    })



    function playAgain() {
        setTeams(prevState => {
            return {
                team1: teamRed,
                team2: teamBlue,
                winner: highestScore

            };
        });
    };

    return (
        <>
            <div className="teamRed">
                <h3>SCORE: {teamRedScore}</h3>
                <div className="pokemons">
                    {teamRed}
                </div>
            </div>
            <div className="game-board">
                <button onClick={playAgain}>PLAY AGAIN</button>
                <h1>The winner is the {highestScore}</h1>
            </div>
            <div className="teamBlue">
                <h3>SCORE: {teamBlueScore}</h3>
                <div className="pokemons">
                    {teamBlue}
                </div>
            </div>
        </>
    );
};

export default Pokedex;