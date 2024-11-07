import type { GetProps } from 'antd'
import { Col, Input, Row, Typography } from 'antd'

import './styles/home.css'

type SearchProps = GetProps<typeof Input.Search>;

const HomePage = () => {
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value)
    return (
        <>
            <Row align="middle">
                <Col span={12}>
                    <Typography.Title level={1}>
                        Tìm trọ cho sinh viên
                    </Typography.Title>
                    <Input.Search size="large" style={{ width: '60%' }} placeholder="Nhập từ khóa tìm kiếm"
                                  onSearch={onSearch} enterButton />
                </Col>
                <Col span={12}>
                    <img
                        className="img-container"
                        src="https://raw.githubusercontent.com/lenghia100703/intro-web-store/refs/heads/main/bg.png"
                        alt="background" />
                </Col>
            </Row>
        </>
    )
}

export default HomePage