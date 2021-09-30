import { useEffect, useState } from "react"
const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  //因為只要設定一次監聽事件，所以第二個參數放 []
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handleLocationChange)
    return () => {
      console.log('cleanup')
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  return currentPath === path ? children : null
}

export default Route