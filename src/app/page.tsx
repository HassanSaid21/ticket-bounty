import Link from "next/link";

import Heading from "@/components/heading";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Heading
        title="Welcome to Ticket Bounty!"
        description="Find and claim tickets to earn rewards."
      />
      <Separator />
      <div className="mt-8 flex flex-col items-center flex-1 gap-y-8 ">
        <Link
          href="/tickets"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          View Available Tickets
        </Link>
      </div>
    </>
  );
}
