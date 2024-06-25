const NewsAPI = require('newsapi');
const apiKey = 'ff36a2dbbc224ec887a3d0b139cc2151'; // Replace with your News API key

const newsapi = new NewsAPI(apiKey);

// Function to retrieve and display all sources (customize as needed)
const getAllSources = async () => {
  try {
    const response = await newsapi.v2.sources({
      language: 'en' // Optional: Filter by language (default: all)
    });

    if (response.status === 'ok') {
      const sources = response.sources;
      console.log('Available News Sources:');
      sources.forEach(source => {
        console.log(`  - Name: ${source.name}`);
        console.log(`    URL: ${source.url}`);
        console.log(`    Category: ${source.category}`);
        console.log('---'); // Separator between sources
      });
    } else {
      console.error('Error retrieving sources:', response.error);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

// Function to retrieve news articles (customize as needed)
const getNewsArticles = async (source, category, q) => {
    try {
      const response = await newsapi.v2.topHeadlines({
        sources: source, // Optional: Filter by source
        category: category, // Optional: Filter by category
        q: q, // Optional: Search query
        language: 'en' // Optional: Filter by language (default: all)
      });
  
      if (response.status === 'ok') {
        const articles = response.articles.map(article => ({
          // Extract relevant article properties
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.urlToImage, // Image URL (if available)
          publishedAt: article.publishedAt  // Publication date (if available)
        }));
        return articles; // Return the array of article objects
      } else {
        console.error('Error retrieving articles:', response.error);
        return []; // Return empty array on error
      }
    } catch (error) {
      console.error('Error:', error);
      return []; // Return empty array on error
    }
  };  

module.exports = {
  getAllSources,
  getNewsArticles // Export functions for use in other files
};
