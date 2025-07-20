import React from "react";

export default function StarshipCard({ ship, onClick}) {
    return (
        <div className="starship-card" onClick={onClick}>
            <img src="/placeholder.jpg" alt="ship" />
            <h3>{ship.name}</h3>
            <div>Model: {ship.model}</div>
            <div>Hyperdrive Rating: {ship.hyperdrive_rating}</div>
        </div>
    );
}