import * as styles from './stepper.module.scss';

import { Slider, ConfigProvider } from 'antd';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Stepper2() {
    const contentWrapper = useRef(null);

    // Temporary state and function for testing
    const [stepperPos, setStepperPos] = useState(0)
    const [stepperState, setStepperState] = useState({
        stops: [],
        height: 0
    });

    useEffect(() => {
        function resizeHandler() {
            const [head1, list1] = contentWrapper.current.children[0].children
            const [head2, list2] = contentWrapper.current.children[1].children
            const [head3, list3] = contentWrapper.current.children[2].children
            function findMidPt(elem) {
                return (elem.getBoundingClientRect().top + (elem.getBoundingClientRect().height / 2))
            }
            const subStops = [findMidPt(head1)]
            for (let child of list1.children) {
                subStops.push(findMidPt(child))
            }
            subStops.push(findMidPt(head2))
            for (let child of list2.children) {
                subStops.push(findMidPt(child))
            }
            subStops.push(findMidPt(head3))
            for (let child of list3.children) {
                subStops.push(findMidPt(child))
            }
            const height = subStops[9] - subStops[0]
            setStepperState({
                stops: subStops.map(pos => (pos - findMidPt(head1)) * (100 / height)),
                height
            })
        }
        resizeHandler();

        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])

    function stepInc() {
        setStepperPos(prev => {
            if (prev === 9) {
                return 0
            }
            return prev + 1
        })
    }

    useGSAP(() => {
        gsap.to('.ant-slider-handle', {
            top: `${stepperState.stops[stepperPos]}%`,
            ease: "power1.inOut",
            duration: 0.5
        })

        gsap.to('.ant-slider-track', {
            height: `${stepperState.stops[stepperPos]}%`,
            ease: "power1.inOut",
            duration: 0.5
        })
    }, { dependencies: [stepperPos] })

    return (
        <>
            {/* Temporary button for testing */}
            <button
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0
                }}
                onClick={stepInc}
            >
                Step
            </button>

            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.stepperContainer}>
                        <div style={{ height: `${stepperState.height}px` }}>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorBgElevated: '#FB723D',
                                        colorPrimaryBorderHover: '#FFFFFF'
                                    },
                                    components: {
                                        Slider: {
                                            handleColor: '#FFFFFF',
                                            handleSize: 22,
                                            handleLineWidth: 4,
                                            railBg: '#FFC4A6',
                                            railSize: 3,
                                            trackBg: '#FFFFFF'
                                        }
                                    }
                                }}
                            >
                                <Slider
                                    vertical
                                    keyboard={false}
                                    reverse={true}
                                    tooltip={{
                                        open: false
                                    }}
                                />
                            </ConfigProvider>
                        </div>
                    </div>
                    <div className={styles.contentContainer} ref={contentWrapper}>
                        <div className={styles.content}>
                            <h2>Founder's Profile</h2>
                            <ul>
                                <li>About You</li>
                                <li>Team</li>
                            </ul>
                        </div>
                        <div className={styles.content}>
                            <h2>Product</h2>
                            <ul>
                                <li>Details</li>
                                <li>Market</li>
                                <li>Vision</li>
                            </ul>
                        </div>
                        <div className={styles.content}>
                            <h2>Imperative</h2>
                            <ul>
                                <li>Fundraising</li>
                                <li>Why Conquest</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}