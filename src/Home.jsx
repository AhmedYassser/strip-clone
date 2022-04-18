import React from 'react';
import img from "./images/phone.svg";
import { useGlobalContext } from './Context'

function Home() {
  const { closeSubmenu } = useGlobalContext();

  
  return (
    <section className="body-img" onMouseOver={closeSubmenu}>
      <div className="home-Body" >
        <article className="header_section">
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">Start Now !</button>
        </article>
        <article>
          <img src={img} alt="" className="Img-phone" />
        </article>
      </div>
    </section>
  )
}

export default Home;
