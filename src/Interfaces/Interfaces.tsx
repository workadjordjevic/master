import React from "react";

export type SearchCategory =
    | "Action"
    | "Adventure"
    | "Co-op"
    | "Fantasy"
    | "FPS"
    | "Gore"
    | "Open World"
    | "RPG"
    | "Sci-fi"
    | "Shooter"
    | "Souls-like"
    | "Stealth"
    | "Story Rich"
    | "Survival"
    | "Walking Simulator";

export interface IPropsTrendingNowCard {
    image: string;
    title: string;
    description: string;
    price: number;
}

export interface ISidebarTab {
    icon: string;
    tabName: string;
}

export interface IMockData {
    image: any;
    title: string;
    description: string;
    price: number;
    category?: SearchCategory[];
}

export interface ICustomButton{
    type?: string;
    label: string;
    // onClick?: (e:React.MouseEvent<HTMLButtonElement>)=> void;
    onClick?: any;
}

export interface AutoCompleteItem {
    value: string;
}