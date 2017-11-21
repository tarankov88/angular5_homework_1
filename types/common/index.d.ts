type Env = {
  production: boolean
};

type Place = {
  img_1: string,
  img_2: string,
  address: string,
  phone:  number,
  weather: {
     title: string,
     icon: string,
     water: number,
     temperatur: number
  },
  social_info:{ 
     title: string,
     img: string,
     followers: number,
     following: number
  }, 
  type: string
}

type FilterType = {
  all: string,
  fishing: string
  tour: string,
  weather: string
}