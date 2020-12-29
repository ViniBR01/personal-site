import React from 'react';
import './home.css';
import HeroSlider, {
    Slide,
    Nav,
    OverlayContainer
} from 'hero-slider';

//import images
import austin_art from './austin-art.jpg';
import austin_capitol from './austin-capitol.jpg';
import brooklyn_park from './brooklyn-park.jpg';
import itajuba_party from './itajuba-party.jpg';
import manhattan_skyline from './manhattan-skyline.jpg';
import sandiego_beach from './sandiego-beach.jpg';
import sandiego_shop from './sandiego-shop.jpg';


function Home() {
    return (
        <div className="page-wrapper-home">
        
        <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        style={{
            color: '#FFF'
        }}
        settings={{
            slidingDuration: 250,
            slidingDelay: 100,
            shouldAutoplay: true,
            shouldDisplayButtons: true,
            autoplayDuration: 5000,
            height: '90vmin',
        }}
        >
        <OverlayContainer
        style={{
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.33)',
            textAlign: 'center',
        }}
        >
        <h1>
        HELLO! I'm VINI
        </h1>
        <h3>
        Welcome to my website
        </h3>
        </OverlayContainer>
        <Slide
        background={{
            backgroundImage: austin_capitol,
            backgroundAttachment: 'scroll',
            backgroundPosition: 'center center',
        }}
        />
        <Slide
        background={{
            backgroundImage: sandiego_shop,
            backgroundAttachment: 'scroll',
            backgroundPosition: 'center center',
        }}
        />
        <Slide
        background={{
            backgroundImage: brooklyn_park    ,
            backgroundAttachment: 'scroll',
            backgroundPosition: 'center center',
        }}
        />
        <Slide
        background={{
            backgroundImage: itajuba_party,
            backgroundAttachment: 'scroll',
            backgroundPosition: 'center center',
        }}
        />
        <Slide
        background={{
            backgroundImage: sandiego_beach,
            backgroundAttachment: 'scroll',
            backgroundPosition: 'center center',
        }}
        />
        <Slide
        background={{
            backgroundImage: manhattan_skyline,
            backgroundAttachment: 'scroll',
            backgroundPosition: 'center center',
        }}
        />
        <Slide
            background={{
                backgroundImage: austin_art,
                backgroundAttachment: 'scroll',
                backgroundPosition: 'center center',
            }}
        />
        
        <Nav />
        </HeroSlider>
        
        <div className="page-text" >
            <p>I'm an engineer, researcher and developer. And an amateur photographer in the free time.</p>
            <p>Please explore the top menu to learn more about my work and my latest projects and updates.</p>
        </div>
        </div>
    );
}
 export default Home;
