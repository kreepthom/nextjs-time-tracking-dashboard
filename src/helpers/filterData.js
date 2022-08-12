
export const filterData = (timeframes,pathname) => {

    if(timeframes && pathname === '/daily'){
        const datafiltered = timeframes.map(({title,timeframes:{daily}}) => ({title,daily})) 
        return datafiltered
    }
    if(timeframes && pathname === '/monthly'){
        const datafiltered = timeframes.map(({title,timeframes:{monthly}}) => ({title,monthly})) 
        return datafiltered
    }
    if(timeframes && pathname === '/weekly'){
        const datafiltered = timeframes.map(({title,timeframes:{weekly}}) => ({title,weekly}))
        return datafiltered
    }
    return null
}

