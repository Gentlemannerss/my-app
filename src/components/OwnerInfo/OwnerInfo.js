import React from 'react';
import './OwnerInfo.css';
import ownerImage from '../../assets/Owner.webp';

function OwnerInfo() {
    return (
        <div className="outerContainer">
            <section className="innerContainer ownerinfo">
                <div className="imageContainer">
                    <img
                        className="ownerImage"
                        src={ownerImage}
                        alt="Damon Close Up"
                    />
                    <div className="imageOverlay"></div>
                </div>
                <div className="">
                    <div className="infoAboutTile">
                        <h3>Damon van Bergen</h3>
                    </div>
                    <div className="segmentsContainer">
                        <div className="leftSegment">
                            <h4>Coding Languages</h4>
                            <ul>
                                <li>Java</li>
                                <li>SpringBoot</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>HTML & CSS</li>
                            </ul>
                        </div>
                        <div className="centerLeftSegment">
                            <h4>Microsoft Skills</h4>
                            <ul>
                                <li>OneDrive & SharePoint</li>
                                <li>Word, Excel & PowerPoint</li>
                                <li>Azure Services</li>
                                <li>Windows Admin</li>
                            </ul>
                        </div>
                        <div className="centerRightSegment">
                            <h4>Coaching Skills</h4>
                            <ul>
                                <li>Active Listening</li>
                                <li>Feedback & Reflection</li>
                                <li>Motivation & Support</li>
                                <li>Communication & Empathy</li>
                            </ul>
                        </div>
                        <div className="rightSegment">
                            <h4>Microsoft Examination</h4>
                            <ul>
                                <li>AZ-900</li>
                                <li>MS-900</li>
                                <li>SC-900</li>
                                <li>MD-102</li>
                                <li>MS-102</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OwnerInfo;