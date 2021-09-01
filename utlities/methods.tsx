export const amtToRemove = (items: []) => {
  items.length - 3;
}


export const arrayAverage = (items: Number[]) => {
  items.reduce<any>((a ,b) => a + b, 0)/ items.length;
}


export const arrayWithoutVariables = (items: [], amtToRemove: number) => {
  items.splice(1, amtToRemove);
}
