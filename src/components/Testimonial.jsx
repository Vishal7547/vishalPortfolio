import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>My Clients</h2>

      <section>
        <TestimonialCard
          name={"Coding Ninjas"}
          feedback={
            "Resolved 2500+ React queries on Coding Ninjas, showcasing expertise and commitment to community support. Kudos!"
          }
        />

        <TestimonialCard
          name={"Rajeev Kumar"}
          feedback={
            "Engineered a striking, personalized e-commerce hub for Shivam, seamlessly blending aesthetics with user-friendly navigation, dedicated to all things electronics."
          }
        />

        <TestimonialCard
          name={"Pal Kagrecha"}
          feedback={
            "Crafted a striking, personalized portfolio website for Pal Kagrecha, blending aesthetics with seamless navigation."
          }
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
