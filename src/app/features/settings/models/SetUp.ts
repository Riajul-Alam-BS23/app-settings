

export interface SingleAlert{
    label: string;
    subLabel: string;
    option: string[];
    default: string;
}

export interface AlertOptions{
    label: string;
    subLabel: string;
    options:SingleAlert[];
}