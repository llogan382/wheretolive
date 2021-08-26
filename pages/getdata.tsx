import { InferGetServerSidePropsType } from 'next'

type Data = {}

export const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(`https://api.census.gov/data/2019/acs/acs1?get=NAME,B01001_001E&for=state:*&key=ee638959ae386e00dd646af2980f3da1f171a529`)
  const data: Data = await res.json()

  return {
    props: {
      data,
    },
  }
}

function Getdata({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // will resolve posts to type Data
  console.log(data)
  return(
    <>
  {console.log({data})}

    Hello!
    </>
  )
}

export default Getdata
