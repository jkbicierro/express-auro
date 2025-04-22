
export interface Approval_Ticket {
    id: number;
    reference_id: string;
    title: string;
    type: string;
    status: string;
    department: string;
    createdAt: string;
    updatedAt: string;
}

export interface Approval_Ticket_Logs {
    id: number;
    approval_id: number;
    department: string;
    action: string;
    remarks: string;
    createdAt: string;
}