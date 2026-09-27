// "use client";

import { Ticket } from "@prisma/client";
import clsx from "clsx";
import {
  CircleCheck,
  FileText,
  Pencil,
  SquareArrowOutUpRight,
  Trash2,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/paths";

import { deleteTicket } from "../actions/delete-ticket";

const TICKET_ICONS = {
  OPEN: <FileText />,
  IN_PROGRESS: <Pencil />,
  CLOSED: <CircleCheck />,
};

export default function TicketItem({
  ticket,
  isDetail,
}: {
  ticket: Ticket;
  isDetail?: boolean;
}) {
  // const handleDelete = async () => {
  //   try {
  //     await deleteTicket(ticket.id);
  //   } catch (error) {
  //     console.error("Error deleting ticket:", error);
  //   }
  // };

  const detailsButton = (
    <Button
      asChild
      variant="outline"
      size="icon"
      className=" underline text-black hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
    >
      <Link
        prefetch
        href={ticketPath(ticket.id)}
        aria-label={`View details for ${ticket.title}`}
      >
        <SquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  const deleteButton = (
    <form action={deleteTicket.bind(null,ticket.id)}>
    <Button
      // onClick={handleDelete}
      variant="outline"
      size="icon"
      className="text-red-500 hover:text-red-700 transition-colors"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
    </form>
  );
  return (
    <div
      className={clsx("w-full   flex gap-x-2", {
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

      <div className="flex flex-col gap-y-1">
        {!isDetail ? detailsButton : deleteButton}
      </div>
    </div>
  );
}
