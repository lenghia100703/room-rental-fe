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
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Thành phố</label>
                    <input
                        type="text"
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleChange('city', e.target.value)}
                        placeholder="Nhập thành phố"
                    />
                </div>
            </div>
            <div className="bottom" style={{alignItems: 'end'}}>
                <div className="item">
                    <label htmlFor="minPrice">Giá phòng (từ)</label>
                    <input
                        type="number"
                        id="minPrice"
                        value={formData.priceFrom}
                        onChange={(e) => handleChange('priceFrom', e.target.value)}
                    />
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Giá phòng (đến)</label>
                    <input
                        type="text"
                        id="maxPrice"
                        value={formData.priceTo}
                        onChange={(e) => handleChange('priceTo', e.target.value)}
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
                <div className="item">
                    <label htmlFor="bedroom">Số phòng tắm</label>
                    <input
                        type="text"
                        id="bedroom"
                        value={formData.bathroom}
                        onChange={(e) => handleChange('bathroom', e.target.value)}
                    />
                </div>
                <button type="submit" onClick={handleSubmit} style={{height: 38}}>
                    <img src="/search.png" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Filter
