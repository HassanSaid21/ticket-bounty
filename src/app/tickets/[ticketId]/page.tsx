import Link from "next/link";

import Placeholder from "@/components/placeholder";
import { Button, buttonVariants } from "@/components/ui/button";
import { tickets } from "@/data";
import TicketItem from "@/features/ticket/components/ticket-item";
import { ticketsPath } from "@/paths";

type props = {
  params: Promise<{ ticketId: string }>;
};

export default async function TicketPage({ params }: props) {
  const { ticketId } = await params;
  const ticket = tickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild>
            <Link
              className={buttonVariants({ variant: "link", size: "lg" })}
              href={ticketsPath()}
            >
              Go to Tickets
            </Link>
          </Button>
        }
      />
    );
  }

  return (
    <div className="flex flex-1 flex-col items-center gap-y-4  animate-fade-from-top ">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
}
