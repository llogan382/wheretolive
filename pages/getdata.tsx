import { InferGetServerSidePropsType } from 'next'

type Data = {}

export const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(`https://api.census.gov/data/2019/acs/acs1?get=NAME,B01001_001E&for=state:*&key=${process.env.CENSUS_KEY}`)
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
