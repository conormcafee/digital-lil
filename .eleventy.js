module.exports = function (eleventyConfig) {
  // Input Directory : src Output directory: _site

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/img");

  return {
    dir: { input: "src", output: "_site" },
  };
};
