var articles = [];

function Project (options) {
/* TODO: This is our Model constructor. It will take in
   our source data from articleProjects and instantiate a
   new Object according to this new definition. options is
   a placeholder for the object that will ultimately be
   passed in. Use all of the properties in blogProjects
   to populate the new Project data that we'll use.  */
   this.title = options.title;
};

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newArticle.attr('data-category', this.category);
  /* TODO: We also need to fill in:
  1. author name
  2. author url
  3. article title
  4. article body
  5. publication*/
/* TODO: This cloned article is no longer a template, as it now
has real data attached to it. Remove the class from this new article! */
  return $newProject;
};

/* This sort method is a standard JavaScript Array function
   that will iterate over an array and compare its values,
   and then arrange them in ascending or descending order
   according to the return value. We are comparing the
   publishedOn properties to arrange the blog posts in
   descending order (most recent first). */
projectArticle.sort(function(currentObject, nextObject) {
  return (new Date(nextObject.publishedOn)) - (new Date(currentObject.publishedOn));
});

projectArticle.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
