import { useEffect } from 'react'
import { useGlobalContext } from '../../context/appContext'
import { StatsContainer, Loading, ChartsContainer } from '../../components'

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useGlobalContext()
  useEffect(() => {
    showStats()
  }, [])

  // if (isLoading) {
  // return <Loading center />
  // }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
}

export default Stats
