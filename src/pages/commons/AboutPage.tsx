import './styles/aboutPage.scss'

function AboutPage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1>Thành viên</h1>
                    <div className="flex-container">
                        <div className="nameTag">
                            <a className="imgC">
                                <img src="/logo.png" alt="" width="70"/>
                            </a>
                            <p>Minh Hoà</p>
                        </div>
                        <div className="nameTag">
                            <a className="imgC">
                                <img src="/logo.png" alt="" width="70"/>
                            </a>
                            <p>Lê Minh Nghĩa</p>
                        </div>
                        <div className="nameTag">
                            <a className="imgC">
                                <img src="/logo.png" alt="" width="70"/>
                            </a>
                            <p>Nguyễn Khắc Nam Huy</p>
                        </div>
                        <div className="nameTag">
                            <a className="imgC">
                                <img src="/logo.png" alt="" width="70"/>
                            </a>
                            <p>Nguyễn Đức Hùng</p>
                        </div>
                        <div className="nameTag">
                            <a className="imgC">
                                <img src="/logo.png" alt="" width="70"/>
                            </a>
                            <p>Nguyễn Quang Ninh</p>
                        </div>
                    </div>

                    
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default AboutPage
