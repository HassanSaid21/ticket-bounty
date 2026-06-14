import clsx from "clsx";
import {
  CircleCheck,
  FileText,
  Pencil,
  SquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket } from "@/features/ticket/types";
import { ticketPath } from "@/paths";

const TICKET_ICONS = {
  OPEN: <FileText />,
  IN_PROGRESS: <Pencil />,
  DONE: <CircleCheck />,
};

function TicketItem({
  ticket,
  isDetail,
}: {
  ticket: Ticket;
  isDetail?: boolean;
}) {
  const detailsButton = (
    <Button asChild variant="outline" size="icon"
    
      className=" underline text-black hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
    >
      <Link
        href={ticketPath(ticket.id)}
          aria-label={`View details for ${ticket.title}`}
      >
        <SquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );
  return (
    <div
      className={clsx("w-full   flex gap-x-1", {
        "max-w-105": !isDetail,
        "max-w-146": isDetail,
      })}
    >
      <Card
        key={ticket.id}
        className=" w-full rounded-lg border bg-card p-4 shadow-sm"
      >
        <CardHeader className="flex items-center gap-x-3">
          <CardTitle className="flex items-center gap-x-2 text-lg font-semibold">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <span
            className={clsx(" whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      {!isDetail && (
        <div className="flex flex-col gap-y-1">{detailsButton}</div>
      )}
    </div>
  );
}

export default TicketItem;
