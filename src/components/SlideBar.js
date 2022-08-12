import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { getDataTimeFrames } from '../store/timeFramesReducer'

const SlideBar = ({ name }) => {

  const dispatch = useDispatch()
  const { push, pathname } = useRouter()

  const RouteDaily = () => {
    push('/daily')
    dispatch(getDataTimeFrames())
  }
  const RouteWeekly = () => push('/weekly')
  const RouteMonthly = () => push('/monthly')

  return (
    <div className='SlideBarContainer'>
      <div className='SlideBarContainerName'>

        <div style={{ borderRedius: '3px' }} className='image' >
          <Image
            src={'/materials/images/image-jeremy.png'}
            alt="Picture of the author"
            width={60}
            height={60}
          />
        </div>


        <p className='name'><span>Report for</span>{name}</p>



      </div>
      <ul className='list'>
        <li style={{ color: pathname === '/daily' ? 'white' : 'var(--Pale-Blue)' }} onClick={RouteDaily}>daily</li>
        <li style={{ color: pathname === '/weekly' ? 'white' : 'var(--Pale-Blue)' }} onClick={RouteWeekly}>weekly</li>
        <li style={{ color: pathname === '/monthly' ? 'white' : 'var(--Pale-Blue)' }} onClick={RouteMonthly}>monthly</li>
      </ul>


      <style jsx>{`
.SlideBarContainer{
  border-radius: 12px;
  background-color: var(--Dark-blue);
  color: white;
  height: 60vh;
  font-family: Rubik;
  font-weight: lighter;
}
.SlideBarContainerName{
  display: grid;
  padding: 20px 20px 30px;
  width: 100%;
  height: 67%;
  background-color: var(--Blue);
  border-radius: 12px;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
}
.image{
  width:60px;
  height:60px;
  border-radius:50%;
  border: 2px solid white;
}
.name span{
  color:var(--Pale-Blue);
  font-size: 12px;
}
.name{
  display:grid;
  grid-template-columns: 1fr;
  font-size: 30px;
}
.list{
  display:grid;
  grid-template-columns:'1fr';
  align-items:center;
  font-size:14px;
  margin:0px;
  padding: 5px 20px;
  height:33%;
  list-style: none;

}
.list li{
  text-transform:capitalize;
  color:var(--Pale-Blue);
  cursor:pointer;
}
.list li:hover{
  transition:.5s;
  color:#fff !important;
}
.list li:nth-child(3){
  
  margin-bottom:5px;
  list-style: none;
}

@media (max-width: 800px){
  .SlideBarContainer{
    height:200px
  }
  .SlideBarContainerName{
    grid-template-columns: .4fr 1fr;
    height:70%
  }
  .image{
    width:70px;
    height:70px;
  }
  .list{
   
    grid-template-columns:repeat(3, 1fr);
  }
  .list li{
    font-size:18px;
    text-align:center;
  }
  
}
@media (max-width: 500px){
  
  .SlideBarContainerName{
    grid-template-columns: .5fr 1.2fr;
    height:65%
  }
  .name{
  display:grid;
  font-size: 30px;
  font-size:25px;
  }
  .name span{
    font-size: 15px;
  }
}

`}</style>
    </div>
  )
}



export default SlideBar