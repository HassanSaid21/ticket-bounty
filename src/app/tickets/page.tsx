import { CircleCheck, FileText, Pencil } from "lucide-react";
import Link from "next/link";

import Heading from "@/components/heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { tickets } from "@/data";
import { ticketPath } from "@/paths";

const TICKET_ICONS = {
  OPEN: <FileText />,
  IN_PROGRESS: <Pencil />,
  DONE: <CircleCheck />,
};

export default function TicketsPage() {
  return (
    <>
      {" "}
      <Heading description="All your tickets in one place." title="Tickets" />
      <Separator />
      <div className="flex flex-1 flex-col items-center gap-y-4 ">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            className="w-full max-w-105 rounded-lg border bg-card p-4 shadow-sm"
          >
            <CardHeader className="flex items-center gap-x-3">
              <CardTitle className="flex items-center gap-x-2 text-lg font-semibold">
                <span>{TICKET_ICONS[ticket.status]}</span>
                <span className="truncate">{ticket.title}</span>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <span className="line-clamp-3 whitespace-break-spaces">
                {ticket.content}
              </span>
            </CardContent>
            <CardFooter>
              <Link
                href={ticketPath(ticket.id)}
                className=" underline text-black-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                View Details
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
