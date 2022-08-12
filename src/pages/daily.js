import { useEffect } from "react"
import Layout from "../components/Layout"
import {getDataTimeFrames} from '../store/timeFramesReducer'
import { useDispatch, useSelector } from "react-redux"
import {filterData} from '../helpers/filterData'
import { useRouter } from "next/router"

const Daily = () => {

  const dispatch = useDispatch()
  const {pathname} = useRouter()
  const  {timeframes} = useSelector(state => state.data)

  useEffect(() => {
    dispatch(getDataTimeFrames())
  }, [dispatch])
  
  const data = filterData(timeframes,pathname)
  return (
    <div>
      <Layout data={data} />
    </div>
  )
}

export default Daily


