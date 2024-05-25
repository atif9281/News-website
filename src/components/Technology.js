import './card.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';

export default function AllNews() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Set loading state to true initially

  useEffect(() => {
    // Move the Axios request to the useEffect hook
    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=a9c8965aed794e82b3031ae9902b41a0')
      .then((res) => {
        setArticles(res.data.articles);
        setIsLoading(false); // Set loading state to false when data is fetched
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false); // Set loading state to false in case of an error
      });
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  return (
    <>
      {isLoading ? ( // Show loading component when isLoading is true
        <Loading />
      ) : (
        <div className="container">
          <div className="row">
            {articles.map((value) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12 my-3" key={value.url == null ? '' : value.url}>
                  <div className="card shadow" style={{ width: '18rem' }}>
                    <img
                      src={
                        value.urlToImage == null
                          ? 'https://ca-times.brightspotcdn.com/dims4/default/024b553/2147483647/strip/true/crop/5482x2878+0+384/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9b%2Fcd%2F0cff04bf41acb19306076a27290d%2Fet-maria-bartiromo-gettyimages-07.JPG'
                          : value.urlToImage
                      }
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{value.title == null ? '' : value.title.slice(0, 20)}...</h5>
                      <a href={value.url == null ? '' : value.url} className="btn btn-danger border border-primary border-2 rounded-pill mb-2">See Details</a>

                      <p className="card-text">Content:{` ${value.content == null ? '' : value.content.slice(0, 30)}`}...</p>

                      <p className="card-text">Description:{` ${value.description == null ? '' : value.description.slice(0, 50)}`}...</p>

                      <p className="card-text my-3">Published at:{` ${value.publishedAt == null ? '' : value.publishedAt}`}</p>
                      <p className="card-text">Source:{` ${value.source.name == null ? '' : value.source.name}`}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}