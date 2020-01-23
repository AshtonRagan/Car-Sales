export const initValue = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const Reducer = (state = initValue, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log("Hello", action.payload);
      const newstate = state.additionalFeatures.filter(
        ele => ele.id !== action.payload.id
      );
      return {
        ...state,
        additionalFeatures: newstate,
        additionalPrice: (state.additionalPrice += action.payload.price),
        car: { ...state.car, features: [...state.car.features, action.payload] }
      };
    case "REMOVE_ITEM":
      console.log("Remove", action.payload);
      const newFeatures = state.car.features.filter(
        ele => ele.id !== action.payload.id
      );

      return {
        ...state,
        car: { ...state.car, features: newFeatures },
        additionalPrice: (state.additionalPrice -= action.payload.price),
        additionalFeatures: [...state.additionalFeatures, action.payload]
      };
    default:
      return state;
  }
};
