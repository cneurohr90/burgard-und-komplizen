const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

module.exports = (eleventyConfig) => {
	eleventyConfig.addAsyncShortcode(
		"image",
		async function imageShortcode(
			src,
			alt,
			widths,
			sizes,
			classes,
			attributes
		) {
			const metadata = await eleventyImage(`./src${src}`, {
				widths: widths || ["auto"],
				formats: ["auto"],
				outputDir: path.join(eleventyConfig.dir.output, "img"),
			});

			const imageAttributes = {
				alt,
				sizes,
				loading: "lazy",
				decoding: "async",
				class: classes ?? "",
				...attributes,
			};
			return eleventyImage.generateHTML(metadata, imageAttributes);
		}
	);
};
