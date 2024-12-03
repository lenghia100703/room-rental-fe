import React, { useState } from 'react'
import './searchBar.scss'
import { useDispatch } from 'react-redux'
import { setQueryStore } from '@/store/querySlice'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '@/router/path'

function SearchBar() {
    const [query, setQuery] = useState({
        city: '',
        priceFrom: null,
        priceTo: null,
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (field: string, value: any) => {
        setQuery((prev) => ({
            ...prev,
            [field]: value,
        }))
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(setQueryStore(query))
        navigate(PATHS.LIST_ROOM)
    }
    return (
        <div className="searchBar">
            <form>
                <input
                    type="text"
                    value={query.city}
                    name="city"
                    placeholder="Thành phố"
                    onChange={(e) => handleChange('city', e.target.value)}
                />
                <input
                    type="number"
                    name="priceFrom"
                    value={query.priceFrom}
                    min={0}
                    placeholder="Giá tối thiểu"
                    onChange={(e) => handleChange('priceFrom', e.target.value)}
                />
                <input
                    type="number"
                    name="priceTo"
                    value={query.priceTo}
                    min={0}
                    placeholder="Giá tối đa"
                    onChange={(e) => handleChange('priceTo', e.target.value)}
                />
                <button onClick={handleSubmit}>
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar
