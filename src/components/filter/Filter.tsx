import './filter.scss'

function Filter() {
    return (
        <div className="filter">
            {/*<h1>*/}
            {/*    Search results for <b>London</b>*/}
            {/*</h1>*/}
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Quận</label>
                    <input
                        type="text"
                        id="district"
                        name="district"
                        placeholder="Quận"
                    />
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Thành phố</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Thành phố"
                    />
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input
                        type="number"
                        id="minPrice"
                        name="minPrice"
                        placeholder="any"
                    />
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input
                        type="number"
                        id="minPrice"
                        name="minPrice"
                        placeholder="any"
                    />
                </div>
                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input
                        type="text"
                        id="bedroom"
                        name="bedroom"
                        placeholder="any"
                    />
                </div>
                <div className="item">
                    <label htmlFor="bathroom">Bathroom</label>
                    <input
                        type="text"
                        id="bathroom"
                        name="bathroom"
                        placeholder="any"
                    />
                </div>
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Filter
