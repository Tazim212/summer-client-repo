import anime from 'animejs/lib/anime.es.js';
import Banner from "./Banner/Banner";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import OurCommunity from "./OurCommunity/OurCommunity";
import PopularClass from "./PopularClasses/PopularClass";

anime({
    targets: 'div',
    translateX: 60,
    loop: 2,
    direction: 'reverse',
    easing: 'easeInOutSine'
});

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Morning Sun Sports Academies || Home</title>
            </Helmet>
            <Banner></Banner>
            <SectionTitle heading="Popular Classes"></SectionTitle>
            <PopularClass></PopularClass>
            <SectionTitle heading="Popular Instructors"></SectionTitle>
            <PopularInstructor></PopularInstructor>
            <SectionTitle heading="Our Teacher's Community"></SectionTitle>
            <OurCommunity></OurCommunity>
        </div>
    );
};

export default Home;