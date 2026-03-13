import React from 'react';
import Header from "../../components/home/header/header";
import HeroSection from "../../sectons/herosection/herosection";
import "./home.css";
import About from "../../sectons/about/about";

function Home() {
    return (
        <>
            <div className="home-container">
                <Header />
                <HeroSection />
                <About />
            </div>
        </>
    );
}
export default Home;