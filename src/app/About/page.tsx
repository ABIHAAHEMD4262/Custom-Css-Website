import React from "react";

const About = () => {
  return (
    <div>
      <section className="about" style={{ backgroundImage: "url(/images/about-bg.webp)" }}>
        <div className="about-content">
          <h1 className="fade-in">About Us</h1>
          <p>
            Welcome to our exclusive collection of timeless watches, where
            craftsmanship meets elegance. At <b>Watch World</b>, we are
            passionate about creating watches that combine precision, style, and
            durability. Each piece is thoughtfully designed to enhance your
            personality, whether you&apos;re seeking a classic design or a modern
            statement. With a commitment to quality and attention to detail, we
            aim to deliver timepieces that not only tell time but also tell a
            story. Explore our collection and find the perfect watch to
            accompany you on every occasion.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;