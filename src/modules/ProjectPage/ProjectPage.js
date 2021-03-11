import React from 'react';
import { CardDeck } from 'react-bootstrap';

import './ProjectPage.css';

import ProjectCard from '../../components/ProjectCard/ProjectCard';

import house_img from '../../data/house.png';
import native_img from '../../data/natives.png';
import wildfire_img from '../../data/wildfire.png';

function ProjectPage() {
    return (
        <div>
            <CardDeck className="card-deck">
                <ProjectCard
                    image={house_img}
                    title="Zillow Home Value Index Map"
                    text="The yearly average home values by state in the United States from 1996 to 2020."
                    src="/zillow-home-value-index" />
                <ProjectCard
                    image={native_img}
                    title="California Native American Tribal Boundaries Map"
                    text="The Native American tribal boundaries across California at the time of European contact based on anthropological research of linguistic and cultural groupings."
                    src="/ca-native-american-tribal-boundaries" />
                <ProjectCard
                    image={wildfire_img}
                    title="United States Wildfire and Air Quality Map"
                    text="The current reported incidients, wildfire perimeters and air quality readings across the United States based on the most recent IRWIN, NIFC, and AirNow data."
                    src="/usa-wildfire-air-quality" />
            </CardDeck>
        </div>
    );
}

export default ProjectPage;