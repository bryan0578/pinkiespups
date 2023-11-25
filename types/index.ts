export interface PuppiesProps {
    id: string;
    imageUrl: string;
    pupName: string;
    desc: string;
    color: string;
    sex: string;
    age: string;
    price: string;
    availability: string;
}

export interface ParamsProps {
    params: {
        id: string;
    }
}