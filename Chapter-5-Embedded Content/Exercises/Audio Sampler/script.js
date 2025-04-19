document.querySelectorAll(".sample").forEach(sample => {
    sample.addEventListener("click", () => {
        const audio = sample.querySelector("audio");

        // Remove 'playing' from all other samples
        document.querySelectorAll(".sample").forEach(el => el.classList.remove('playing'));

        // Reset and play this audio
        audio.currentTime = 0;
        audio.play();

        // Add playing class
        sample.classList.add("playing");

        // Remove it when finished
        audio.onended = () => {
            sample.classList.remove("playing");
        };
    });
});

