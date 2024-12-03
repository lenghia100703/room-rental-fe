import { Empty, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { PATHS } from '@/router/path'

function NotFound() {
    return (
        <div style={{ marginTop: '100px' }}>
            <Empty
                description={
                    <Typography.Title level={4}>
                        Không tìm thấy trang này!
                        <br />
                        <Link to={PATHS.HOME}>Trở về trang chủ</Link>
                    </Typography.Title>
                }
            >
            </Empty>
        </div>
    )
}

export default NotFound