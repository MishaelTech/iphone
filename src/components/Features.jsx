import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "../utils/animation";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.to("#exploreVideo", {
            scrollTrigger: {
                trigger: "#exploreVideo",
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom'
            },
            onComplete: () => {
                videoRef.current.play();
            }
        })

        gsap.fromTo(".g_text", {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            duration: 2,
            opacity: 1,
            stagger: 0.1,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: ".g_text",
                toggleActions: 'restart reverse restart reverse',
                start: 'top 85%'
            }
        }

        )

        animateWithGsap('#features_title', {
            y: 0,
            opacity: 1,
            duration: 2
        })

        animateWithGsap(".g_grow",
            { scale: 1, opacity: 1, ease: 'power1', duration: 2 },
            { scrub: 5.5 })

        // animateWithGsap(".g_text",
        //     { y: 0, opacity: 1, ease: 'power2.inOut', duration: 2 })
    }, []);

    return (
        <section className="h-full common-padding bg-zinc relative overflow-hidden">
            <div className="screen-max-width">
                <div className="mb-12 w-full">
                    <h1 id="features_title" className="section-heading">
                        Explore the full story.
                    </h1>
                </div>

                <div className="flex flex-col justify-center items-center overflow-hidden">
                    <div className="mt-32 mb-24 pl-24">
                        <h2 className="text-5xl lg:text-7xl font-semibold">IPhone</h2>
                        <h2 className="text-5xl lg:text-7xl font-semibold">Forged in Titanium.</h2>
                    </div>

                    <div className="flex-center flex-col sm:px-10">
                        <div className="relative h-[50vh] w-full flex items-center">
                            <video
                                playsInline
                                autoPlay
                                muted
                                preload="none"
                                id="exploreVideo"
                                className="w-full h-full object-cover object-center"
                                ref={videoRef}
                            >
                                <source src={exploreVideo} type="video/mp4" />
                            </video>
                        </div>

                        <div className="flex flex-col w-full relative">
                            <div className="feature-video-container">
                                <div className="overflow-hidden flex-1 h-[50vh]">
                                    <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                                </div>

                                <div className="overflow-hidden flex-1 h-[50vh]">
                                    <img src={explore2Img} alt="titanium" className="feature-video g_grow" />
                                </div>
                            </div>

                            <div className="feature-text-container mb-16">
                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">
                                        IPhone 15 Pro is {' '}
                                        <span className="text-white">
                                            the first iPhone to feature an aerospace grade tianium design
                                        </span>,
                                        using the same alloy that spacecrafts use for missions to Mars.
                                    </p>
                                </div>

                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">
                                        Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                                        <span className="text-white">
                                            lightest Pro models ever.
                                        </span>,
                                        You'll notice the different the moment you pick one up.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features