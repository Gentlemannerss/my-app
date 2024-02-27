import React from 'react';
import "./Benefits.css";

function Benefits() {
    return (
        <div className="outerContainer benefitsAfter">
            <section className="innerContainer benefits">
                <h4 className="titleOfSection">Wat kunnen wij u bieden: </h4>
                <div className="cardContainer">
                    <div className="card">
                        <h4>Persoonlijke begeleiding: </h4>
                        <p>We begrijpen de unieke behoeften van micro-ondernemingen en bieden op maat gemaakte begeleiding en ondersteuning.</p>
                    </div>
                    <div className="card">
                        <h4>Deskundigheid in technologie:</h4>
                        <p>Ons team beschikt over diepgaande kennis van Azure, cloudmigratie, Microsoft Office en Windows.</p>
                    </div>
                    <div className="card">
                        <h4>Praktische benadering:</h4>
                        <p>We streven naar concrete, haalbare oplossingen die direct toepasbaar zijn voor jouw bedrijf.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Benefits;