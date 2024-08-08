const SearchItem = ({ search, setSearch }) => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}> {/* e.preventDefault() prevents the page to reload automatically to its default stage */}
            <label htmlFor="search">Search</label>
            <input
                id="search"
                type="text"
                role="searchBox"
                placeholder="Search Items"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchItem