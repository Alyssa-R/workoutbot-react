
const randomName = () => {
  const names = [
    "crunches",
    "squats",
    "burpees",
    "high knees",
    "tuck jumps",
    "shadowboxers",
    "black widows",
    "lunges",
    "lemon squeezers",
    "tricep dips",
    "jumping jacks"
  ];
  return names[Math.floor(Math.random() * names.length)];
};

const randomReps = () => {
  return Math.floor(Math.random() * 25);
};

export { randomName, randomReps };
