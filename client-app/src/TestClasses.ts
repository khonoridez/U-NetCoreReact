export interface ICar {
  color: string;
  model: string;
  topSpeed?: number;
}

const car1: ICar = {
  color: "blue",
  model: "bmw"
};

const car2: ICar = {
  color: "red",
  model: "Mercedes"
};

export const cars = [car1, car2];
