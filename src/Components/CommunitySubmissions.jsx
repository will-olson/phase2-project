import React from "react"
import { useEffect, useState, useMemo } from "react"
import Header from "./Header"
import NavBar from "./Navbar"
import CompanyCard from "./CompanyCard"
import overview from "./Overview"

function CommunitySubmissions() {
    const [isLoading, setLoading] = useState(false)
    const [companies, setCompanies] = useState([])
    const [showForm, setFormVisable] = useState(false)
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [indeedLink, setIndeedLink] = useState('')
    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        if(!isLoading) {
            fetch('http://localhost:6001/Community')
            .then(resp => resp.json())
            .then(data => {
                setCompanies(data)
                setLoading(true)
        })}
    }, [isLoading, deleted])

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

    function toggleForm() {
        setFormVisable(!showForm)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newCompany = {
            name: e.target.name.value,
            link: e.target.linkedin.value,
            indeed: e.target.indeed.value,
            favorite: false
        }
        setName('')
        setLink('')
        setIndeedLink('')
        fetch(`http://localhost:6001/Community`, {
            method: "POST",
            body: JSON.stringify(newCompany),
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(() => {
            setLoading(false)
        })
    }

    function handleDelete(company){
        fetch(`http://localhost:6001/Community/${company.id}`, {
            method:'DELETE'
        })
        .then(resp => resp.json)
        .then(() => {
            setDeleted(true)
            setLoading(false)
        })
    }

    return (
        <div className="container">
            <Header />
            <NavBar />
            <div className="content-square">
                <h2 className="section-title">Community Submissions</h2>
                <p>{overview.CommunitySubmissions.Overview}</p>
                <button onClick={toggleForm}>{showForm ? 'Close Form' : 'Add Company'}</button>
                {showForm ? 
                    <form onSubmit={handleSubmit}>
                        <input name='name' placeholder="Company Name" value={name} onChange={e => setName(e.target.value)} required></input>
                        <input name='linkedin' placeholder="LinkedIn Link" value={link} onChange={e => setLink(e.target.value)} required></input>
                        <input name='indeed' placeholder="Indeed Link" value={indeedLink} onChange={e => setIndeedLink(e.target.value)} required></input>
                        <button>Submit</button>
                    </form> : <></>}
            </div>
            <div className="company-tiles">
                {sortedCompanies.map((company) => (
                    <CompanyCard
                        key={company.id}
                        company={company}
                        category = 'Community'
                        updateFavoriteStatus = {updateFavoriteStatus}
                        canDelete = {true}
                        handleDelete = {handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default CommunitySubmissions