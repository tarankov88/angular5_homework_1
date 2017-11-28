type Env = {
    production: boolean
};

type Place = {
    img_1: string,
    img_2: string,
    address: string,
    phone: number,
    weather: Weather,
    social_info: Social,
    type: string
};

type Weather = {
    title: string,
    icon: string,
    water: number,
    temperatur: number
};

type Social = {
    title: string,
    img: string,
    followers: number,
    following: number
};


type FilterType = {
    all: string,
    fishing: string
    tour: string,
    weather: string
}