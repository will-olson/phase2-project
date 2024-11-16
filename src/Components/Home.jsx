import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'
import Navbar from './Navbar'
import overview from './Overview'

function Home() {
    console.log(overview.AI.Overview);
    return (
        <div>
            <Header />
            <Navbar />

            <div className="overview">
                <h2 className="section-title">Site Overview</h2>
                <div className="content-square">
                    <p>This site is intended to provide a repository of companies to help support Flatiron Software Engineering students in their job search.</p>
                </div>
            </div>

            <div className="BigTechHeader">
                <h2 className="section-title">Big Tech</h2>
                <Link to='/BigTech' className="link">
                    <div className="content-square">
                        <p>{overview.BigTech.Overview}</p>
                    </div>
                </Link>
                <Link to='/Media' className="link">
                    <div className="content-square">
                        <p>{overview.Media.Overview}</p>
                    </div>
                </Link>
                <Link to='/AI' className="link">
                    <div className="content-square">
                        <p>{overview.AI.Overview}</p>
                    </div>
                </Link>
            </div>

            <div className="SaaS">
                <h2 className="section-title">SaaS</h2>
                <Link to='/MarketingSaaS' className="link">
                    <div className="content-square">
                        <p>{overview.MarketingSaaS.Overview}</p>
                    </div>
                </Link>
                <Link to='/B2BSaaS' className="link">
                    <div className="content-square">
                        <p>{overview.B2BSaaS.Overview}</p>
                    </div>
                </Link>
            </div>

            <div className="Finance">
                <h2 className="section-title">Finance</h2>
                <Link to='/Fintech' className="link">
                    <div className="content-square">
                        <p>{overview.Fintech.Overview}</p>
                    </div>
                </Link>
                <Link to='/Finance' className="link">
                    <div className="content-square">
                        <p>{overview.Finance.Overview}</p>
                    </div>
                </Link>
            </div>

            <div className="HealthcareHeader">
                <h2 className="section-title">Healthcare</h2>
                <Link to='/Healthcare' className="link">
                    <div className="content-square">
                        <p>{overview.Healthcare.Overview}</p>
                    </div>
                </Link>
            </div>

            <div className="IndustryLeadersHeader">
                <h2 className="section-title">Industry Leaders</h2>
                <Link to='/IndustryLeaders' className="link">
                    <div className="content-square">
                        <p>{overview.IndustryLeaders.Overview}</p>
                    </div>
                </Link>
            </div>

            <div className="MostFavoritedHeader">
                <h2 className="section-title">Favorited</h2>
                <Link to='/Favorited' className="link">
                    <div className="content-square">
                        <p>{overview.Favorited.Overview}</p>
                    </div>
                </Link>
            </div>

            <div className="CommunitySubmissionHeader">
                <h2 className="section-title">Community Submissions</h2>
                <Link to='/CommunitySubmissions' className="link">
                    <div className="content-square">
                        <p>{overview.CommunitySubmissions.Overview}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;