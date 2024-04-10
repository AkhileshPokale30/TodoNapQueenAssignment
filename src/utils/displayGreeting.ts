/**
 * Returns a greeting based on the current time.
 * @returns {string} The appropriate greeting.
 */
export const displayGreeting = (): string => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting: string;
  if (currentHour < 12 && currentHour >= 5) {
    greeting = "VIT BHOPAL UNIVERSITY";
  } else if (currentHour < 18 && currentHour > 12) {
    greeting = "VIT BHOPAL UNIVERSITY";
  } else {
    greeting = "VIT BHOPAL UNIVERSITY";
  }

  return greeting;
};
