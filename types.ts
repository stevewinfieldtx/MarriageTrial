export interface NavLink {
    label: string;
    path: string;
}

export interface Profile {
    id: string;
    name: string;
    age: number;
    location: string;
    avatarUrl: string;
    isOnline?: boolean;
    isVerified?: boolean;
}

export interface Message {
    id: string;
    senderId: string;
    text: string;
    timestamp: string;
    isSystem?: boolean;
    type?: 'text' | 'photo';
}
