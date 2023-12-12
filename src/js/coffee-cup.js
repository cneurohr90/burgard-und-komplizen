const html = document.documentElement;
const img = document.getElementById("coffee-cup");

const frameCount = 14;
const currentFrame = (index) =>
	`/img/coffee-cup-${(index + 1).toString().padStart(2, "0")}.png`;

const preloadImages = () => {
	for (let i = 0; i < frameCount; i++) {
		const img = new Image();
		img.src = currentFrame(i);
	}
};

window.addEventListener("scroll", () => {
	const maxScrollTop = window.innerHeight - 50;
	const scrollFraction = html.scrollTop / maxScrollTop;
	const frameIndex = Math.min(
		frameCount - 1,
		Math.ceil(scrollFraction * frameCount)
	);

	requestAnimationFrame(() => {
		img.src = currentFrame(frameIndex);
		img.style.top = `${50 - scrollFraction * 50}%`;
	});
});

img.src = currentFrame(0);
preloadImages();
