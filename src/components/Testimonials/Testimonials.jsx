import React, { useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1654172501173-1d20f2fad942?w=600&auto=format&fit=crop&q=60",
      name: "Olia Jackson",
      location: "Edusity, USA",
      text: "Studying at this university has been a great experience. The faculty is supportive and the learning is practical. I improved my skills with clear guidance and would definitely recommend this university."
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60",
      name: "Ajanli Mehta",
      location: "Pune, Maharashtra",
      text: "The learning environment here is excellent. Teachers explain concepts clearly and make difficult topics easy. Practical assignments helped me gain confidence. I truly enjoyed studying here."
    },
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
      name: "Aayan Sharma",
      location: "Jaipur, Rajasthan",
      text: "My time here has been valuable and memorable. Faculty encouraged me throughout. Real-life examples improved my understanding, and this university prepared me for my future goals."
    },
    {
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
      name: "Priyanka Patel",
      location: "Ahmedabad, Gujarat",
      text: "I had a very positive journey here. The teaching style is simple and practical. I felt supported and developed strong skills. It was the perfect place to grow with confidence."
    }
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((i) => (i + 1) % slides.length);
  const prevSlide = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div className="testimonials-container" id='testimonials'>
      
      {/* BACK BUTTON */}
      <button className="arrow-btn left" onClick={prevSlide}>
        <img src="https://cdn-icons-png.flaticon.com/128/2767/2767192.png" alt="Previous"/>
      </button>

      {/* CARD */}
      <div className="testimonial-card">
        <div className="user-section">
          <img src={slides[index].img} alt={slides[index].name} />
          <div>
            <h3>{slides[index].name}</h3>
            <p className="location">{slides[index].location}</p>
          </div>
        </div>
        <p className="review">{slides[index].text}</p>
      </div>

      {/* NEXT BUTTON */}
      <button className="arrow-btn right" onClick={nextSlide}>
        <img src="https://cdn-icons-png.flaticon.com/128/93/93634.png" alt="Next"/>
      </button>
    </div>
  );
};

export default Testimonials;
