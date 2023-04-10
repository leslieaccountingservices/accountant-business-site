import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalendarButton() {
  useEffect(()=>{
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#02c5a9"}},"hideEventTypeDetails":false});
    })();
  }, [])
  return <button className="h-8 min-w-fit w-16 bg-navy px-1 text-bone rounded-md ring ring-bone shadow-md hover:animate-pulse" data-cal-link="rcabrera1">Free Consultation</button>;
};
