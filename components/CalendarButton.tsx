import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalendarButton() {
  useEffect(()=>{
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#02c5a9"}},"hideEventTypeDetails":false});
    })();
  }, [])
  return <button className="h-8 min-w-fit w-16 bg-slate-300 rounded-md ring ring-cta ring-offset-2" data-cal-link="rcabrera1">Test</button>;
};
