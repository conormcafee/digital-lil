
module.exports = function(eleventyConfig) {
  // Input Directory : src Output directory: _site

  eleventyConfig.addPassthroughCopy("assets")

  return {
      dir: { input: 'src', output: '_site' }
  };
};