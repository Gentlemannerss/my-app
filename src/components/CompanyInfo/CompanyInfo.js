import React from 'react';
import "./CompanyInfo.css";

function CompanyInfo() {
    return (
        <div className="outerContainer">
            <section className="innerContainer companyContainer"> {/*classnames hebben geen comma ertussen, wel een spatie!!*/}
                <div className="leftSection">
                    <p className="title">Over MountainInnovations</p>
                    <p>
                        Welkom bij MountainInnovations, waar we ons inzetten voor het ondersteunen en begeleiden van kleine micro-ondernemers op hun reis door het complexe landschap van technologie. Onze missie is duidelijk: het bieden van waardevolle begeleiding en coaching om ondernemers te helpen bij het ontdekken en omarmen van de mogelijkheden die de Azure-cloud en gerelateerde Microsoft-producten te bieden hebben.
                    </p>
                    <p className="subtitle">Onze Missie:</p>
                    <p>
                        Bij MountainInnovations is onze missie helder gedefinieerd: we zijn er om kleine micro-ondernemers te ondersteunen in het navigeren door de vaak overweldigende wereld van technologie. We geloven sterk in het empoweren van ondernemers door hen te voorzien van de nodige tools, kennis en begeleiding om succesvol te zijn in een steeds digitaler wordende omgeving.
                    </p>
                    <p className="subtitle">Onze Toewijding:</p>
                    <p>
                        Onze toewijding strekt zich uit tot het aanbieden van effectieve coaching, ondersteuning en training op gebieden zoals Microsoft Office, Windows en het belangrijkste - de voordelen en overgang naar de cloud. We begrijpen de uitdagingen waarmee kleine bedrijven worden geconfronteerd en streven ernaar om praktische oplossingen te bieden die bijdragen aan groei, efficiëntie en concurrentievoordeel.
                    </p>
                </div>
                <div className="rightSection">
                    <img
                        className="companyImage"
                        src="https://via.placeholder.com/300"
                        alt="Company Group Photo"
                    />
                </div>
            </section>
        </div>
    );
}

export default CompanyInfo;