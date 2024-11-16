import React, { useEffect, useState, useMemo } from "react";
import Header from "./Header";
import NavBar from "./Navbar";
import CompanyCard from "./CompanyCard";

function Favorited() {
  const [favoritedCompanies, setFavoritedCompanies] = useState([]);

  useEffect(() => {
    const endpoints = [
      'IndustryLeaders',
      'BigTech',
      'Media',
      'AI',
      'MarketingSaaS',
      'Healthcare',
      'Fintech',
      'Finance',
      'B2BSaaS',
      'Community'
    ];

    // Fetch all data with category information
    Promise.all(
      endpoints.map(endpoint =>
        fetch(`${process.env.REACT_APP_JSON_SERVER}/${endpoint}`)
          .then(resp => resp.json())
          .then(data => data.map(company => ({ ...company, category: endpoint })))
      )
    )
      .then(results => {
        // Flatten the results into a single array of companies
        const allCompanies = results.flat();
        // Filter companies that are favorited
        const favorites = allCompanies.filter(company => company.favorite);
        setFavoritedCompanies(favorites);
      })
      .catch(error => console.error('Error fetching companies:', error));
  }, []);

  // Update favorite status
  function updateFavoriteStatus(updatedCompany) {
    setFavoritedCompanies(prevCompanies => 
      prevCompanies.filter(company => company.id !== updatedCompany.id || updatedCompany.favorite)
    );
  }

  const sortedCompanies = useMemo(() => {
    return [...favoritedCompanies].sort((a, b) => b.favorite - a.favorite);
  }, [favoritedCompanies]);

  return (
    <div className="container">
      <Header />
      <NavBar />
      <div className="content-square">
        <h2 className="section-title">Favorited</h2>
      </div>
      <div className="company-tiles">
        {sortedCompanies.map(company => (
          <CompanyCard
            key={company.id}
            company={company}
            category={company.category} // Pass the category here
            updateFavoriteStatus={updateFavoriteStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorited;