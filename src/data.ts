import { Ticket } from "./types";



export const tickets : Ticket[] = [{
    id: '1',
    title: "Fix login bug",
    content: "Users are unable to log in with correct credentials.",
    status :"OPEN",

} ,
{
    id: '2',  
    title:"master next" ,
    content:"Master Next.js by building a ticket management app.",
    status:"DONE",

}
,
{    id: '3',  
    title:"Implement dark mode" ,
    content:"Add a dark mode toggle to the user interface.",
    status:"IN_PROGRESS",
}
]

