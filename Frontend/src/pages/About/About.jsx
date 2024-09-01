import { useEffect } from 'react';
import './About.css';

import '../../index.css';

export default function About(){
    return(
        <>
            <div className="about-div">
                <div className='card about-card'>
                    <h2>About Us</h2>
                    
                    <p>
                        <center>
                            <span className='spantopic'>OUR MISSION</span><br />
                            Making commerce better for everyone <br />
                            We help people achieve independence by making it easier to start, <br />
                            run, and grow a business. <br />
                            We believe the future of commerce has more voices, <br />
                            not fewer, so we're reducing the barriers to business ownership to make commerce better for everyone. <br /> <br />
                        </center>

                        <center>
                            <span className='spantopic'>OUR COMMITMENT TO SUSTAINABILITY</span><br />
                            We're building a 100-year company <br />
                            Shopify builds for the long term, <br />
                            and that means investing in our planet so that we can future proof <br />
                            Shopify and help our merchants future proof their businesses, too. <br />
                            Our Sustainability Fund includes kickstarting the carbon removal market and choosing renewable energy, <br />
                            reducing and removing our carbon emissions, and creating solutions for our merchants to do the same.
                        </center>
                    
                    </p>
                </div>
            </div>
        </>
        
    );
}