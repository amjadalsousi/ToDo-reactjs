import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div>
            <h3 className="registry">
                <strong> </strong> Originally, I started out by volunteering my time to
                help improve some of the web infrastructure for the project,
                and that role gradually evolved to be responsible for more and more
                of the community and its growth.
            </h3>
            <Link to="/registry">Clik Here to Registry </Link>

        </div>
    )

}

export default Home;