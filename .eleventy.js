module.exports = function (eleventyConfig) {
  // Input Directory : src Output directory: _site

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("assets/**/*.jpg");
  eleventyConfig.addPassthroughCopy("assets/**/*.jpeg");

  return {
    dir: { input: "src", output: "_site" },
  };
};
