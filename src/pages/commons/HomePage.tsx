import SearchBar from '@/components/searchBar/SearchBar.tsx'
import './styles/homePage.scss'

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Tìm thuê trọ cho SV</h1>
                    <SearchBar />

                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage
