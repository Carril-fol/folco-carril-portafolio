"use client";

import { useEffect, useState } from "react";

import { Progress } from "@heroui/progress";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const options: ISourceOptions = {
    fullScreen: {
        enable: true,
        zIndex: -1,
    },
    background: {
        color: {
            value: "#1e1b2e",
        },
    },
    fpsLimit: 90,
    particles: {
        color: {
            value: "#818cf8",
        },
        links: {
            color: "#818cf8",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 0.5,
        },
        move: {
            direction: MoveDirection.none,
            enable: true,
            outModes: {
                default: OutMode.out,
            },
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}

export default function ParticlesBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);


    if (!init) {
        return null;
    }

    return (
        <Particles
            id="tsparticles"
            options={options}
        />
    );
}
