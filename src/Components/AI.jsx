import React from "react"
import { useEffect, useState, useMemo } from "react"
import Header from "./Header"
import NavBar from "./Navbar"
import CompanyCard from "./CompanyCard"
import overview from "./Overview"

function AI() {
    const [isLoading, setLoading] = useState(false)
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        if(!isLoading) {
            fetch('http://localhost:6001/AI')
            .then(resp => resp.json())
            .then(data => {
                setCompanies(data)
                setLoading(true)
        })}
    }, [isLoading])

    function updateFavoriteStatus(updatedCompany) {
        setCompanies((prevCompanies) =>
          prevCompanies.map((company) =>
            company.id === updatedCompany.id ? { ...company, ...updatedCompany } : company
          )
        );
      }

    const sortedCompanies = useMemo(() => {
        return [...companies].sort((a, b) => b.favorite - a.favorite);
    }, [companies]);

    return (
        <div className="container">
            <Header />
            <NavBar />
            <div className="content-square">
                <h2 className="section-title">AI</h2>
                <p>{overview.AI.Overview}</p>
            </div>
            <div className="company-tiles">
                {sortedCompanies.map((company) => (
                    <CompanyCard
                        key={company.id}
                        company={company}
                        category = 'AI'
                        updateFavoriteStatus = {updateFavoriteStatus}
                    />
                ))}
            </div>
        </div>
    );
}

export default AI