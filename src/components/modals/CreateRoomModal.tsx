import React, { useState } from 'react'
import './styles/editRoom.scss'

interface CreateRoomModalProps {
    onClose: () => void;
    onSave: (updatedRoom: any) => void;
}

const CreateRoomModal: React.FC<CreateRoomModalProps> = ({ onClose, onSave }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: 0,
        size: 0,
        bedroom: 0,
        bathroom: 0,
        school: '',
        bus: '',
        restaurant: '',
        longitude: 0,
        latitude: 0,
        images: [],
        address: [],
        city: '',
    })
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
                            placeholder="Nhập tiêu đề"
                            type="text"
                            value={formData.title}
                            onChange={(e) => handleChange('title', e.target.value)}
                        />
                    </label>
                    <label>
                        Thông tin chung:
                        <textarea
                            placeholder="Nhập thông tin chung"
                            value={formData.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                        ></textarea>
                    </label>
                    <label>
                        Giá (VND):
                        <input
                            placeholder="Nhập giá phòng"
                            type="number"
                            value={formData.price || ''}
                            onChange={(e) =>
                                handleChange('price', e.target.value === '' ? '' : Number(e.target.value))
                            }
                        />
                    </label>
                    <label>
                        Diện tích (m2):
                        <input
                            type="number"
                            placeholder="Nhập diện tích phòng"
                            value={formData.size || ''}
                            onChange={(e) =>
                                handleChange('size', e.target.value === '' ? '' : Number(e.target.value))
                            }
                        />
                    </label>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                        <label>
                            Số phòng ngủ:
                            <input
                                type="number"
                                placeholder="Nhập số phòng ngủ"
                                value={formData.bedroom || ''}
                                onChange={(e) =>
                                    handleChange('bedroom', e.target.value === '' ? '' : Number(e.target.value))
                                }
                            />
                        </label>
                        <label>
                            Số phòng tắm:
                            <input
                                type="number"
                                placeholder="Nhập số phòng tắm"
                                value={formData.bathroom || ''}
                                onChange={(e) =>
                                    handleChange('bathroom', e.target.value === '' ? '' : Number(e.target.value))
                                }
                            />
                        </label>
                    </div>
                    <label>
                        Trường học:
                        <input
                            type="text"
                            placeholder="Nhập khoảng cách với trường học"
                            value={formData.school}
                            onChange={(e) => handleChange('school', e.target.value)}
                        />
                    </label>
                    <label>
                        Điểm xe bus:
                        <input
                            type="text"
                            placeholder="Nhập khoảng cách với điểm xe bus"
                            value={formData.bus}
                            onChange={(e) => handleChange('bus', e.target.value)}
                        />
                    </label>
                    <label>
                        Quán ăn:
                        <input
                            type="text"
                            placeholder="Nhập khoảng cách với quán ăn"
                            value={formData.restaurant}
                            onChange={(e) => handleChange('restaurant', e.target.value)}
                        />
                    </label>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                        <label>
                            Vĩ độ:
                            <input
                                placeholder="Nhập vĩ độ"
                                type="number"
                                value={formData.latitude || ''}
                                onChange={(e) =>
                                    handleChange('latitude', e.target.value === '' ? '' : Number(e.target.value))
                                }
                            />
                        </label>
                        <label>
                            Kinh độ:
                            <input
                                placeholder="Nhập kinh độ"
                                type="number"
                                value={formData.longitude || ''}
                                onChange={(e) =>
                                    handleChange('longitude', e.target.value === '' ? '' : Number(e.target.value))
                                }
                            />
                        </label>
                    </div>
                    <label>
                        Hình ảnh:
                        {formData?.images?.map((image: string, index: number) => (
                            <div key={index} className="array-item">
                                <input
                                    type="text"
                                    placeholder="Nhập đường dẫn ảnh"
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
                                    placeholder="Nhập địa chỉ phòng"
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
                            placeholder="Nhập thành phố"
                            value={formData.city}
                            onChange={(e) => handleChange('city', e.target.value)}
                        />
                    </label>
                </form>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button type="button" onClick={onClose}>
                        Hủy
                    </button>
                    <button type="submit" onClick={handleSubmit}>Đăng phòng</button>
                </div>
            </div>
        </div>
    )
}

export default CreateRoomModal
