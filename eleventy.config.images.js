const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

module.exports = (eleventyConfig) => {
	eleventyConfig.addAsyncShortcode(
		"image",
		async function imageShortcode(src, alt, widths, sizes, classes = "") {
			const formats = ["webp", "auto"];
			const metadata = await eleventyImage(`./src${src}`, {
				widths: widths || ["auto"],
				formats,
				outputDir: path.join(eleventyConfig.dir.output, "img"),
			});

			const imageAttributes = {
				alt,
				sizes,
				loading: "lazy",
				decoding: "async",
				class: classes,
			};
			return eleventyImage.generateHTML(metadata, imageAttributes);
		}
	);
};
