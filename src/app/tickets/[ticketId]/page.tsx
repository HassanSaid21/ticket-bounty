import Link from "next/link";

import Placeholder from "@/components/placeholder";
import { Button, buttonVariants } from "@/components/ui/button";
import { tickets } from "@/data";
import { ticketsPath } from "@/paths";

type props = {
  params: Promise<{ ticketId: string }> ;
};

export default async function TicketPage({ params }: props) {
  const {ticketId}  =  await params
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
    <div>
      <h1>{ticket?.title}</h1>
      <p>{ticket?.content}</p>
      <p>Status: {ticket?.status}</p>
    </div>
  );
}
