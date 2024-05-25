import React from 'react'
import newsimage from '../newsimage.jpg'


export default function HomeBody() {
    return (
        <>
        
           
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0,  }}>
      <header style={{ textAlign: 'center', padding: '20px' }}>
        <h1 style={{ fontSize: '25px', margin: 0 }}>Our Mission</h1>
      </header>
      <div style={{display:'flex'}}>
      <div>
            <img src={newsimage} alt='newsimage'></img>
        </div>

      
        <div style={{ padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
          <p style={{ fontSize: '16px' }}>"Our mission is to deliver reliable, timely, and diverse news coverage that empowers our readers to make informed decisions and stay connected to the world. We are committed to upholding the highest standards of journalism, providing you with unbiased reporting on a wide range of topics including politics, business, technology, health, entertainment, sports, and more.

Our dedicated team of journalists and editors work tirelessly to bring you the most accurate and relevant news stories from around the globe. We believe in the importance of free and open discourse, and we are here to facilitate conversations, spark curiosity, and foster a sense of community among our readers.

Whether you're seeking the latest headlines, in-depth analysis, or human-interest stories, [Your News Website Name] is your trusted source for news. Thank you for choosing us as your news source, and we look forward to being a part of your daily journey in staying informed and engaged."

Feel free to customize this mission paragraph to align with the specific goals and values of your news website.</p>

       

        {/* Add more articles as needed */}
      </div>
      </div>

      <footer style={{  textAlign: 'center', padding: '10px' }}>
        &copy; 2023 News Website
      </footer>
    </div>

        </>
    )
}
