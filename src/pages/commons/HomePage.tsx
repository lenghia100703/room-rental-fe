import SearchBar from '@/components/searchBar/SearchBar.tsx'
import './styles/homePage.scss'

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Tìm thuê trọ cho SV</h1>
                    <p>
                        Một sản phẩm của nhóm 4 - Các hệ thống thương mại điện tử - 2425I_INT3506
                    </p>

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

export default HomePage
