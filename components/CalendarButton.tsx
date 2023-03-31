import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalendarButton() {
  useEffect(()=>{
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#02c5a9"}},"hideEventTypeDetails":false});
    })();
  }, [])
  return <button data-cal-link="rcabrera1">Test</button>;
};
