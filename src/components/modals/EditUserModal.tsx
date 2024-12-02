import React, { useState } from 'react'
import './styles/editUser.scss'

interface EditUserModalProps {
    user: any;
    onClose: () => void;
    onSave: (updatedUser: any) => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ user, onClose, onSave }) => {
    const [formData, setFormData] = useState({ ...user })
    const [errors, setErrors] = useState({ username: '', email: '', phone: '' })

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const validatePhone = (phone: string) => {
        const regex = /^(0[3|5|7|8|9])[0-9]{8}$/
        return regex.test(phone) || phone === ''
    }

    const validateForm = () => {
        const newErrors: { username?: string; email?: string; phone?: string } = {}

        if (!formData.username) {
            newErrors.username = 'Tên người dùng là bắt buộc.'
        }

        if (!formData.email) {
            newErrors.email = 'Email là bắt buộc.'
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Email không hợp lệ.'
        }

        if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Số điện thoại không hợp lệ.'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (field: string, value: any) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
        setErrors((prev) => ({
            ...prev,
            [field]: '',
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        onSave(formData)
        onClose()
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Chỉnh sửa hồ sơ</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Tên người dùng:
                        <input
                            type="text"
                            value={formData.username}
                            placeholder="Nhập tên người dùng"
                            onChange={(e) => handleChange('username', e.target.value)}
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            placeholder="Nhập email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </label>
                    <label>
                        Số điện thoại:
                        <input
                            type="text"
                            placeholder="Nhập số điện thoại"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </label>
                </form>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button type="button" onClick={onClose}>
                        Hủy
                    </button>
                    <button type="submit" onClick={handleSubmit}>
                        Sửa
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditUserModal
