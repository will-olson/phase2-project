import React from 'react';
import { useState, useEffect } from 'react';


function CompanyCard({ company, category, updateFavoriteStatus, canDelete, handleDelete}) {
    const [isFavorite, setFavorite] = useState(company.favorite)

    useEffect(() => {
        setFavorite(company.favorite)
    }, [company.favorite])
    
    function handleFavorite() {
        const favorite = !isFavorite
        const newData = { ...company, favorite}
        fetch(`http://localhost:6001/${category}/${company.id}`, {
            method:'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(resp => resp.json())
        .then(data => {
            setFavorite(favorite)
            updateFavoriteStatus(data)
        })
    }

    return (
        <div className="company-tile">
            <h3 className="company-name">{company.name}</h3>
            <h4 className="company-link">
                <a href={company.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </h4>
            <h4 className="indeed-link">
                <a href={company.indeed} target="_blank" rel="noopener noreferrer">Indeed</a>
            </h4>
            <button className='favorite-button'onClick={handleFavorite}>{isFavorite ? '★' : '☆'}</button>
            {canDelete ? <button className='delete-button' onClick={() => handleDelete(company)}>Delete</button> : <></>}
        </div>
    );
}

export default CompanyCard;

