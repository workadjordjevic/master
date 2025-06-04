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
    hasDiscount?: boolean;
    discountAmount?:number;
    discountedPrice?: number;
}

export interface ISidebarTab {
    icon: string;
    tabName: string;
    isDisabled?: boolean;
}

export interface IMockData {
    image: any;
    title: string;
    description: string;
    price: number;
    category?: SearchCategory[];
    hasDiscount?: boolean;
    discountAmount?:number;
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

export interface IDisplayCategoryButton {
    categories?: string[];
    onClick?: any;
}

export interface ISetSearchCategory {
    setSearchCategory: React.Dispatch<React.SetStateAction<string>>;
}

export interface ISearchCategory {
    searchCategory: string;
    setSearchCategory: React.Dispatch<React.SetStateAction<string>>;
}