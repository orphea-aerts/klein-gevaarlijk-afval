module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("puppies");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("admin/config.yml");
};
