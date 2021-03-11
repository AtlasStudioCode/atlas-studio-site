import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

import './VideoPage.css';

import EmbedsPage from '../../components/EmbedsPage/EmbedsPage';

function VideoPage() {
    return (
        <div >
            <CardDeck className="video-card-deck">
                <Card className="video-card">
                    <EmbedsPage
                        title="Pacific Raider Fishing Charter"
                        src="https://www.youtube.com/embed/M5P6VL2LkI8" />
                </Card>
                <Card className="video-card">
                    <EmbedsPage
                        title="Chlorissa Boulder"
                        src="https://www.youtube.com/embed/HhKcP7K1WgY" />
                </Card>
            </CardDeck>
        </div>
    );
}

export default VideoPage;