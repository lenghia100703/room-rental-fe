import './filter.scss'
import React, { useState } from 'react'

interface FilterProps {
    onSave: (params: any) => void;
}

const  Filter:React.FC<FilterProps> = ({ onSave }) => {
    const [formData, setFormData] = useState({
        city: '',
        priceFrom: 0,
        priceTo: 0,
        bedroom: 0,
        bathroom: 0,
    })
    const handleChange = (field: string, value: any) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSave(formData)
    }
    return (
        <div className="filter">
            <div className="top" style={{display: 'block'}}>
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City Location"
                    />
                </div>
            </div>
            <div className="bottom" style={{alignItems: 'end'}}>
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="">any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input
                        type="number"
                        id="minPrice"
                        value={formData.priceFrom}
                        onChange={(e) => handleChange('priceFrom', e.target.value)}
                    />
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input
                        type="text"
                        id="maxPrice"
                        name="maxPrice"
                        placeholder="any"
                    />
                </div>
                <div className="item">
                    <label htmlFor="bedroom">Số phòng ngủ</label>
                    <input
                        type="text"
                        id="bedroom"
                        value={formData.bedroom}
                        onChange={(e) => handleChange('bedroom', e.target.value)}
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
