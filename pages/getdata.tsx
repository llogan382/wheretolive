import { useEffect, useState } from "react";


export default function Data():any {

   const [advice, setAdvice] = useState("");
useEffect(() => {
  const hostname = `https://api.census.gov/data`;
  const year = `2020`;
  const datasets = `acs/acs1`;
  const variables = `?get=NAME,B02015_009E`;
  const variablePredicates = ``;
  const geographies = `&for=state:37`;
  const key = `ee638959ae386e00dd646af2980f3da1f171a529`

  //https://api.census.gov/data/2019/acs/acs1?get=NAME,B02015_009E,B02015_009M‌&for=state:*

  //  https://api.census.gov/data/2020/acs/acs1?get=NAME,B02015_009E&in=state:37&key=ee638959ae386e00dd646af2980f3da1f171a529
    // https://api.census.gov/data/2019/acs/acs1?get=NAME,B01001_001E&for=county:*&in=state:*&key=YOUR_KEY_GOES_HERE

    const url = `https://api.census.gov/data/2019/acs/acs1?get=NAME,B01001_001E&for=county:*&in=state:37&key=${key}`
    console.log(url)


        const fetchData = async () => {
            try {
                const response = await fetch(url);


                const json = await response.json();
                console.log(json);
                setAdvice(json[0]);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <p>{advice}</p>
        </div>
    );
};

