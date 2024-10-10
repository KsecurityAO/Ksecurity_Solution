import React from 'react'

function useMeida(media) {
const [match, setMatch]=React.useState(null)

  React.useEffect(()=>{

    function mudarMatch(){
      const {matches}=window.matchMedia('(max-width:42rem)')
      setMatch(matches)
    }
    mudarMatch()
    window.addEventListener('resize', mudarMatch)
    return ()=>{
      window.removeEventListener('resize', mudarMatch)
    }

 }, [media])

  return match
}

export default useMeida
