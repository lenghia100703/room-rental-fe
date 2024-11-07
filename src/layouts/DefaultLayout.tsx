import { Layout } from 'antd'
import React from 'react'
import HeaderComponent from '@/components/commons/HeaderComponent.tsx'
import FooterComponent from '@/components/commons/FooterComponent.tsx'

const { Header, Footer, Content } = Layout

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: 'black',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: 'transparent',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
}

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: 'black',
}

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
}

const layoutStyle = {
    overflow: 'hidden',
    backgroundColor: 'transparent',
}

// @ts-ignore
const DefaultLayout = ({ children }) => {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <HeaderComponent />
            </Header>
            <Content style={contentStyle}>{ children }</Content>
            {/*<Footer style={footerStyle}>*/}
            {/*    <FooterComponent />*/}
            {/*</Footer>*/}
        </Layout>
    )
}

export default DefaultLayout
