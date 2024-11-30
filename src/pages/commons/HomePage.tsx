import SearchBar from '@/components/searchBar/SearchBar.tsx'
import './styles/homePage.scss'

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Tìm thuê trọ cho SV</h1>
                    <p>
                        Discover the location of your current residence and explore the potential destinations that hold
                        promise for your future endeavors. This powerful tool enables you to visualize both your present
                        living situation and the exciting possibilities that lie ahead, helping you make informed
                        decisions about your life's trajectory. (AI)
                    </p>
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
