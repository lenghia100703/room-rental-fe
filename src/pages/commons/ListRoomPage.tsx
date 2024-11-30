import { listData } from '../../lib/dummydata'
import './styles/listRoom.scss'
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card'
import Map from '../../components/map/Map'

function ListRoomPage() {
    const data = listData

    return <div className="listPage">
        <div className="listContainer">
            <div className="wrapper">
                <Filter />
                {data.map((item: any) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
        <div className="mapContainer">
            <Map items={data} />
        </div>
    </div>
}

export default ListRoomPage
