export type TicketStatus = 'OPEN' | 'IN_REVIEW' | 'RESOLVED' | 'CLOSED';

export interface HelpTicketSender {
  id:    string;
  name?: string | null;
  email: string;
}

export interface HelpTicket {
  id:         string;
  status:     TicketStatus;
  subject:    string;
  message:    string;
  adminNote?: string | null;
  createdAt:  string;
  updatedAt:  string;
  sender?:    HelpTicketSender | null;
}
