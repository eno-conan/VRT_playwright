import { useCallback, useEffect, useState } from 'react'
import { testRepo } from '../repository/sample'

export const HelloWorld = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    const repo = testRepo()
    const responseData = await repo.postTest('1')
    setData(responseData.id)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchData().catch(console.error)
  }, [fetchData])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return <p data-testid="fetch-test">{data}</p>
}
