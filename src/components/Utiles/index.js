function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export const RandomCategory = () => {

const arr = [5,2,15,14,1,7,4];

const a = getRandomInt(7)

return arr[a]

}