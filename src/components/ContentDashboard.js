import Image from "next/image"

const ContentDashboard = ({ data }) => {

  if (!data) {
    return (<div className='container'>
      <span className="spinner"></span>
      <style jsx>{`
      .container{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:60vh;
      }
      .spinner{
        width:60px;
        height:60px;
        border:4px solid var(--Very-dark-blue);
        border-radius:50%;
        border-top:6px solid #fff;
        border-bottom:6px solid #fff;
        animation: spin 2s linear infinite
      }

      @keyframes spin {
        0%{
          transform: rotate(0deg);          
        }
        100%{
          border-top:6px solid var(--Very-dark-blue);
          transform: rotate(360deg);
        }
      }
      .textLoad{
        font-size:20px;
        font-weight:200;
        color:white;
      }
      `}</style>
    </div>
    )
  }
  return (
    <div className='itemContainer'>

      {
        data.map(({ title, daily, monthly, weekly }) => (

          <div key={title} style={{ background: `var(--${title})` }} className='item'>
            <div className="itemImage">
              <Image
                src={`/materials/images/icon-${title}.svg`}
                alt="Picture of the author"
                width={58}
                height={58}
              />
            </div>
            <div className='itemText'>
              <div className='itemDivf'>
                <h6>{title}</h6>
                <Image
                  src='/materials/images/icon-ellipsis.svg'
                  alt="Picture of the author"
                  width={12}
                  height={3}
                />
              </div>
              <div className='itemDivs'>
                <h1>{daily?.current || monthly?.current || weekly?.current}hrs</h1>
                <small>Last Week - {daily?.previous || monthly?.previous || weekly?.previous}hrs</small>
              </div>
            </div>
          </div>

        ))
      }


      <style jsx>{`

      .itemContainer{
        height:60vh;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(2,1fr);
        grid-gap:20px;
      }

      .item{
        
        border-radius:12px;
        overflow:hidden;
        position:relative;
        display:flex;
        flex-direction:column; 
        align-items:end;
        justify-content:flex-end;
      }

      .itemImage{
        margin:-3px 15px;
        position:absolute;
        top:0;
      }
      .itemText{
        cursor:pointer;
        padding:20px;
        border-radius:12px;
        position:absolute;
        background:var(--Dark-blue);
        color:#fff;
        width:100%;
        height:80%;
      }
      .itemText:hover{
        transition:.5s;
        background:var(--Desaturated-blue);

      }
      .itemDivf{
        font-size:18px;
        text-transform:capitalize;
        margin-bottom:10px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        
      }
      .itemDivf h6{
        font-weight:500
      }
      .itemDivs{
        width:100%;
        height:70px;
        margin-top:10px;
        display:flex;
        flex-direction:column;
        justify-content:flex-end;
      }
      .itemDivs h1{
        font-size:35px;
        font-weight:300
      }
      .itemDivs small{
        margin-top:5px;
        font-weight:300;
        font-size:11px;
        color:var(--Pale-Blue)
      }

      @media (max-width:800px){

        .itemContainer{
          
          grid-template-columns: 1fr;
          grid-template-rows: repeat(6,1fr);
          height:900px;
          gap:5px;
        }
        .item{
          margin-bottom:15px;
        }
        .itemDivf{
          text-align:end;
          align-items:end;
          margin-bottom:0px;
        }
        .itemDivf h6{
        font-size:15px
        }
        .itemDivs{
          margin-top:0px;
          flex-direction:row;
          justify-content:space-between;
          align-items:start;
        }
        .itemDivs h1{
          font-size:40px;

        }
        .itemDivs small{
          margin-top:20px;
          font-size:15px;
        }

      }
     
   `}</style>

    </div>
  )
}


export default ContentDashboard