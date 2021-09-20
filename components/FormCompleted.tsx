import { useFormData } from '../context'
import Data from './getdata'
export default function FormCompleted() {
  // @ts-ignore
  const { data } = useFormData()
  const identifiers = Object.keys(data)
  const active = identifiers.filter(function (id) {
    return data[id]
  })
  return (
    <>
      <h2>Let&#39;s find the best places to move... 🎉</h2>
      <Data searchVars={active} />
    </>
  )
}
