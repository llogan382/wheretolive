import { useFormData } from "../context";
import Data from "../pages/getdata";

export default function FormCompleted() {
  // const { data } = useFormData();

  return (
    <>
      <h2>Let&apos;s find the best places to move... 🎉</h2>
<h4>Here are the TOP 50 that match your results:</h4>
    <Data />

    </>
  );
}
