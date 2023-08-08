import './SearchBar.css'
function SearchBar() {
    return (
        <div className="search-box" >
            <input className="search-input" type="text" placeholder="Search.." />
            <button className="material-symbols-outlined  search-btn">search</button>
        </div>
    )
}

export default SearchBar