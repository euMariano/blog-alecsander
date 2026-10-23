module.exports = function (eleventyConfig) {
  // Copiar pastas estáticas diretamente para o build final
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });

  // Coleção de posts ordenados do mais recente para o mais antigo
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/posts/*.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  // Filtro de formatação de data por extenso em Português
  eleventyConfig.addFilter("readableDate", function (dateObj) {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "UTC"
    }).format(d);
  });

  // Filtro de data compacta (DD/MM/AAAA)
  eleventyConfig.addFilter("shortDate", function (dateObj) {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "UTC"
    }).format(d);
  });

  // Filtro de data para atributo datetime de tags <time>
  eleventyConfig.addFilter("htmlDateString", function (dateObj) {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    return d.toISOString().split("T")[0];
  });

  // Filtro para limitar arrays (ex: últimos 5 posts)
  eleventyConfig.addFilter("limit", function (arr, limit) {
    return Array.isArray(arr) ? arr.slice(0, limit) : [];
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: process.env.PATH_PREFIX || "/"
  };
};
