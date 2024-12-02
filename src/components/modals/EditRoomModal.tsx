import React, { useState } from 'react'
import './styles/editRoom.scss'

interface EditRoomModalProps {
    room: any;
    onClose: () => void;
    onSave: (updatedRoom: any) => void;
}

const EditRoomModal: React.FC<EditRoomModalProps> = ({ room, onClose, onSave }) => {
    const [formData, setFormData] = useState({ ...room })
    const handleChange = (field: string, value: any) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleArrayChange = (field: string, index: number, value: string) => {
        const updatedArray = [...formData[field]]
        updatedArray[index] = value
        setFormData((prev) => ({
            ...prev,
            [field]: updatedArray,
        }))
    }

    const handleAddArrayItem = (field: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: [...prev[field], ''],
        }))
    }

    const handleRemoveArrayItem = (field: string, index: number) => {
        const updatedArray = [...formData[field]]
        updatedArray.splice(index, 1)
        setFormData((prev) => ({
            ...prev,
            [field]: updatedArray,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSave(formData)
        onClose()
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Chỉnh sửa phòng</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Tiêu đề:
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => handleChange('title', e.target.value)}
                        />
                    </label>
                    <label>
                        Thông tin chung:
                        <textarea
                            value={formData.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                        ></textarea>
                    </label>
                    <label>
                        Giá (VND):
                        <input
                            type="number"
                            value={formData.price}
                            onChange={(e) => handleChange('price', Number(e.target.value))}
                        />
                    </label>
                    <label>
                        Diện tích (m2):
                        <input
                            type="number"
                            value={formData.size}
                            onChange={(e) => handleChange('size', Number(e.target.value))}
                        />
                    </label>
                    <label>
                        Trạng thái:
                        <select
                            value={formData.status}
                            onChange={(e) => handleChange('status', e.target.value)}
                        >
                            <option value="available">Có sẵn</option>
                            <option value="rented">Đã thuê</option>
                        </select>
                    </label>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                        <label>
                            Số phòng ngủ:
                            <input
                                type="number"
                                value={formData.bedroom}
                                onChange={(e) => handleChange('bedroom', Number(e.target.value))}
                            />
                        </label>
                        <label>
                            Số phòng tắm:
                            <input
                                type="number"
                                value={formData.bathroom}
                                onChange={(e) => handleChange('bathroom', Number(e.target.value))}
                            />
                        </label>
                    </div>
                    <label>
                        Trường học:
                        <input
                            type="text"
                            value={formData.school}
                            onChange={(e) => handleChange('school', e.target.value)}
                        />
                    </label>
                    <label>
                        Điểm xe bus:
                        <input
                            type="text"
                            value={formData.bus}
                            onChange={(e) => handleChange('bus', e.target.value)}
                        />
                    </label>
                    <label>
                        Quán ăn:
                        <input
                            type="text"
                            value={formData.restaurant}
                            onChange={(e) => handleChange('restaurant', e.target.value)}
                        />
                    </label>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                        <label>
                            Kinh độ:
                            <input
                                type="number"
                                value={formData.longitude}
                                onChange={(e) => handleChange('longitude', Number(e.target.value))}
                            />
                        </label>
                        <label>
                            Vĩ độ:
                            <input
                                type="number"
                                value={formData.latitude}
                                onChange={(e) => handleChange('latitude', Number(e.target.value))}
                            />
                        </label>
                    </div>
                    <label>
                        Hình ảnh:
                        {formData?.images?.map((image: string, index: number) => (
                            <div key={index} className="array-item">
                                <input
                                    type="text"
                                    value={image}
                                    onChange={(e) =>
                                        handleArrayChange('images', index, e.target.value)
                                    }
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveArrayItem('images', index)}
                                >
                                    Xóa
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={() => handleAddArrayItem('images')}>
                            Thêm hình ảnh
                        </button>
                    </label>
                    <label>
                        Địa chỉ:
                        {formData.address.map((addr: string, index: number) => (
                            <div key={index} className="array-item">
                                <input
                                    type="text"
                                    value={addr}
                                    onChange={(e) =>
                                        handleArrayChange('address', index, e.target.value)
                                    }
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveArrayItem('address', index)}
                                >
                                    Xóa
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={() => handleAddArrayItem('address')}>
                            Thêm địa chỉ
                        </button>
                    </label>
                    <label>
                        Thành phố:
                        <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => handleChange('city', e.target.value)}
                        />
                    </label>
                </form>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button type="button" onClick={onClose}>
                        Hủy
                    </button>
                    <button type="submit" onClick={handleSubmit}>Sửa</button>
                </div>
            </div>
        </div>
    )
}

export default EditRoomModal
