let vw = (window.innerWidth - 100 ) / 100;

function ShowSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function HideSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {

    function beamTrail(boxId, beamId, beamColor, beamWidth) {
        const box = document.querySelector(boxId);
        const beam = document.querySelector(beamId);

        // Set beam color
        beam.style.background = beamColor;

        const tl = gsap.timeline();

        // Beam expands
        tl.to(beam, {
            width: beamWidth,
            opacity: 0.5,
            duration: 2,
            ease: "power2.out",
        })
        .to(box, {
            x: beamWidth,
            duration: 2,
            rotation: -360,
            ease: "power2.out",
        }, "<")
        .to(beam, {
            opacity: 0.5,
            duration: 1,
            ease: "power1.in"
        });

        // Reset (IMPORTANT → reset box & beam)
        // tl.set([beam, box], { x: 0, width: 0 });
    }

    beamTrail("#green-box", "#beam-green", "rgba(0,255,0,0.7)", 10*vw);
    beamTrail("#purple-box", "#beam-purple", "rgba(128,0,128,0.7)", 50*vw);
    beamTrail("#yellow-box", "#beam-yellow", "rgba(255,255,0,0.8)", 100*vw);
});
