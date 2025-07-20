import React from "react";

export default function StarshipDetail({ ship, onBack }) {
  return (
    <div className="starship-detail">
      <button className="back-btn" onClick={onBack}>←</button>
      <h2>{ship.name}</h2>
      <img src="/placeholder.jpg" alt="ship" />
      <div className="detail-info">
        <div><strong>Model:</strong> {ship.model}</div>
        <div><strong>Hyperdrive Rating:</strong> {ship.hyperdrive_rating}</div>
        <div><strong>Passengers:</strong> {ship.passengers}</div>
        <div><strong>Max Atmosphering Speed:</strong> {ship.max_atmosphering_speed}</div>
        <div><strong>Manufacturer:</strong> {ship.manufacturer}</div>
        <div><strong>Crew:</strong> {ship.crew}</div>
        <div><strong>Cargo Capacity:</strong> {ship.cargo_capacity}</div>
      </div>
    </div>
  );
}
