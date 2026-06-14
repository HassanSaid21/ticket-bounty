import Heading from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import { tickets } from "@/data";
import TicketItem from "@/features/ticket/components/ticket-item";

export default function TicketsPage() {
  return (
    <>
      {" "}
      <Heading description="All your tickets in one place." title="Tickets" />
      <Separator />
      <div className="flex flex-1 flex-col items-center gap-y-4 ">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </>
  );
}
