import axios from 'axios'

export const testRepo = () => {
  const client = axios.create({})

  const postTest = async (id: string) => {
    const res = await client.post('/test', { id })
    return res.data
  }

  return { postTest }
}
