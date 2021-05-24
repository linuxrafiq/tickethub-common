import { Subjects } from './subjects';

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
    //ticket created event dose not have orderId, but ticket updated event has
    //because an ordered ticket could be canceled, then we need to update the ticket
    //by incrementing verson and orderId to null/undefined, since version chnaged every
    //service who listen order updated need to know ticket property changed
    orderId: string;
  };
}
