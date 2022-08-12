import Layout from "../components/Layout"
import { useSelector } from "react-redux"
import {filterData} from '../helpers/filterData'
import { useRouter } from "next/router"

const Weekly = () => {
  const {pathname} = useRouter()
  const  {timeframes} = useSelector(state => state.data)

  const data = filterData(timeframes,pathname)
  return (
    <div>
        <Layout data={data}/>
    </div>
  )
}

export default Weekly