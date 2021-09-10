import { useFormData } from "../context";
import Data from "../pages/getdata";
export default function FormCompleted() {
  // const { data } = useFormData();
  const { data } = useFormData();
const identifiers = Object.keys(data)
const active = identifiers.filter(function(id) {
  return data[id]
})
  return (
    <>
    {/* {console.log('Here is the active data', active)} */}
      <h2>Let&aposs find the best places to move... 🎉</h2>
<Data searchVars={active} />

    </>
  );
}
