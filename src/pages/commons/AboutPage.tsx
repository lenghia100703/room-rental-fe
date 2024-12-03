import './styles/aboutPage.scss'

function AboutPage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <div className="flex-container">
                        <h2 style={{ marginBottom: 10 }}>Danh sách thành viên nhóm</h2>
                        <div className="nameTag">
                            <a className="imgC">
                                <img src="/logo.png" alt="" width="70" />
                            </a>
                            <p>Nguyễn Khắc Nam Huy - 21020542</p>
                        </div>
                        <div className="nameTag">
                            <a className="imgC">
                                <img src="/logo.png" alt="" width="70" />
                            </a>
                            <p>Lê Vũ Minh Nghĩa - 21020366</p>
                        </div>
                        <div className="nameTag">
                            <a className="imgC">
                                <img src="/logo.png" alt="" width="70" />
                            </a>
                            <p>Nguyễn Quang Ninh - 22021166</p>
                        </div>
                        <div className="nameTag">
                            <a className="imgC">
                                <img src="/logo.png" alt="" width="70" />
                            </a>
                            <p>Tiên Minh Hoà - 22021144</p>
                        </div>
                        <div className="nameTag">
                            <a className="imgC">
                                <img src="/logo.png" alt="" width="70" />
                            </a>
                            <p>Nguyễn Đức Hùng - 22021109</p>
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
