/**
 * Returns a random greeting message to inspire productivity.
 * @returns {string} A random greeting message with optional emoji code.
 */
export const getRandomGreeting = (): string => {
 

  const greetingsText: string[] = [
    "Akhilesh Pokale",
    "akhilesh.pokale2020@vitbhopal.ac.in",
    "akhilesh.pokale.edu@gmail.com",
    "VIT BHOPAL",
    

    
  ];

  const randomIndex = Math.floor(Math.random() * greetingsText.length);
  return greetingsText[randomIndex];
};
