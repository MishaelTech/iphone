import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setvideoSrc(smallHeroVideo)
        } else {
            setvideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);

        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        };
    }, []);

    useGSAP(() => {
        gsap.to('#hero-text', {
            opacity: 1,
            delay: 1,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: "#hero-text",
                toggleActions: 'restart reverse restart reverse',
                start: 'bottom bottom'
            }
        })

        gsap.to('#cta', {
            opacity: 1,
            y: -50,
            delay: 2,
            duration: 1.5,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: "#cta",
                toggleActions: 'restart reverse restart reverse',
                start: '-0% bottom'
            }
        })

    }, [])
    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero-text" className="hero-title">IPhone 15 Pro</p>

                <div className="md:w-10/12 w-9/12">
                    <video className="pointer-events-none" autoPlay loop muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" width={100} />
                    </video>
                </div>
            </div>

            <div
                id="cta"
                className="flex flex-col items-center opacity-0 translate-y-20"
            >
                <a href="#highlights" className="btn">Buy</a>
                <p>From $199/month or $999</p>
            </div>
        </section>
    )
}

export default Hero