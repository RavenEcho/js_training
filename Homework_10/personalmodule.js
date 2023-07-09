function getGreetingMessage(userName) {
  const currentTime = new Date();
  const hour = currentTime.getHours();

  let timeOfDay;

  if (hour >= 0 && hour < 6) {
    timeOfDay = "night";
  } else if (hour >= 6 && hour < 12) {
    timeOfDay = "morning";
  } else if (hour >= 12 && hour < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  return `Good ${timeOfDay}, ${userName}`;
}

module.exports = {
  getGreetingMessage,
};
