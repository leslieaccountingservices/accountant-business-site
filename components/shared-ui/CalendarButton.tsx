import { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CalendarButton({ freeConsult }: { freeConsult: boolean }) {
  const [isWeb, setIsWeb] = useState(true)
  
  useEffect(()=>{
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#348834"}},"hideEventTypeDetails":false});
    })();

    // console.log(window.innerWidth)

    if (window.innerWidth < 767) {
      setIsWeb(false);
    }

  }, [])

  return isWeb ? <button className="h-10 min-w-fit w-36 md:w-48 md:mb-2 mx-1 md:mx-0 border bg-navy px-1 text-bone rounded-md shadow-md md:transition md:ease-in-out md:delay-50 md:hover:scale-110" data-cal-link={`rcabrera1/${freeConsult ? 'rcabrera1/free-consultation' : 'rcabrera1'}`}>
      { freeConsult ? "Free Consultation" : "Book now!" }
  </button> :

  <Link target="_blank" href={`${freeConsult ? 'https://cal.com/rcabrera1/free-consultation' : "https://cal.com/rcabrera1/"}`}>
    <button className="h-10 min-w-fit w-36 md:w-48 md:mb-2 mx-1 md:mx-0 border bg-navy px-1 text-bone rounded-md shadow-md md:transition md:ease-in-out md:delay-50 md:hover:scale-110">
      { freeConsult ? "Free Consultation" : "Book now!" }
    </button>
  </Link>
};
