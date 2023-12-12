const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const pluginImages = require("./eleventy.config.images.js");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/img/**");
	eleventyConfig.addPassthroughCopy("src/js/**");
	eleventyConfig.addPassthroughCopy("src/static/**");
	eleventyConfig.addPlugin(pluginImages);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addWatchTarget("src/**/*.{svg,webp,png,jpeg}");

	return {
		templateFormats: ["md", "njk", "html"],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "src",
			data: "data",
			includes: "includes",
			layouts: "layouts",
		},
	};
};
