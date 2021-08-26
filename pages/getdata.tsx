import { useEffect, useState } from "react";


export default function Data():any {

   const [advice, setAdvice] = useState("");
useEffect(() => {
    const url = "https://api.census.gov/data/2019/acs/acs1?get=NAME,B01001_001E&for=state:*&key=ee638959ae386e00dd646af2980f3da1f171a529";

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

