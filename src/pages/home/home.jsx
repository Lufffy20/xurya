import React from 'react';
import Header from "../../components/home/header/header";
import Footer from "../../components/home/footer/footer";
import HeroSection from "../../sectons/herosection/herosection";
import "./home.css";

function Home() {
    return (
        <>
            <div className="home-container">
                <Header />
                <HeroSection />
                <About />
                <Footer />
            </div>
        </>
    );
}
export default Home;