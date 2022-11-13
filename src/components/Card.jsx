import React from 'react';




const Card = () => {
    return (

        <section>
            <header></header>
            <div>
                <h1>The Grumpy Cafe</h1>
            </div>
            <div>
                <h2>€ - Portuguese, Cafe</h2>
                <span className="fa fa-star checked">
                    &#11088;&#11088;&#11088;&#11088;&#11088; (5/5)
                </span>

                <p>
                    Come to the Grumpy Cafe; we have the best meals in town. We have small
                    plates, salads and sadwiches with 12 indoor seats plus patio seatings.
                </p>
            </div>
            <hr />
            <div>
                <h3> Availability </h3>
                <div className="bcontainer">
                    <button className="button-87">8AM</button>
                    <button className="button-87">10AM</button>
                    <button className="button-87">13PM</button>
                    <button className="button-87">20PM</button>
                </div>
            </div>
            <hr />
            <footer>RESERVE NOW</footer>
        </section>
    )

};

export default Card;
