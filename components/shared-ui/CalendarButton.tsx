import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalendarButton() {
  useEffect(()=>{
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#02c5a9"}},"hideEventTypeDetails":false});
    })();
  }, [])
  return <button className="h-10 min-w-fit w-48 mb-2 border bg-navy px-1 text-bone rounded-md shadow-md hover:animate-pulse" data-cal-link="rcabrera1">Free Consultation</button>;
};
