module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    
    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
    
}