import { adminApiFetch } from '@/lib/auth-api';
import type { HelpTicket, TicketStatus } from '@/lib/types/support.types';

const BASE = '/api';

export const supportApi = {
  getTickets: (status?: TicketStatus) => {
    const url =
      status != null
        ? `${BASE}/help-tickets?status=${status}`
        : `${BASE}/help-tickets`;
    return adminApiFetch<{ data: HelpTicket[] }>(url).then((r) => r.data);
  },

  getTicket: (id: string) =>
    adminApiFetch<{ data: HelpTicket }>(`${BASE}/help-tickets/${id}`).then(
      (r) => r.data,
    ),

  markInReview: (id: string) =>
    adminApiFetch<{ data: HelpTicket }>(
      `${BASE}/help-tickets/${id}/review`,
      { method: 'PATCH' },
    ).then((r) => r.data),

  resolve: (
    id: string,
    payload: { status: 'RESOLVED' | 'CLOSED'; adminNote?: string },
  ) =>
    adminApiFetch<{ data: HelpTicket }>(
      `${BASE}/help-tickets/${id}/resolve`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      },
    ).then((r) => r.data),
};
