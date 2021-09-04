import React from 'react'

const Google = () => {
    const handleSearch = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            console.log(window.location.href)
            let url = `https://www.google.com/search?q=${e.target.value}`;
            window.location.assign(url)
        }
    }
    return (
        <div className="search">
            <div className="gcse-search"></div>
            <input type="text" placeholder="Search" onKeyDown={handleSearch}></input>
        </div>
    )
}

export default Google
