const clockTitle = document.querySelector(".js-clock");

function waitingForChristmas() {
  const christmas = new Date("2023-12-25");
  const today = new Date();
  const untilChristmas = christmas - today;

  const untilChristmasDay = String(
    Math.floor(untilChristmas / (1000 * 60 * 60 * 24))
  );
  const untilChristmasHour = String(
    Math.floor((untilChristmas / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");
  const untilChristmasMin = String(
    Math.floor((untilChristmas / (1000 * 60)) % 60)
  ).padStart(2, "0");
  const untilChristmasSec = String(
    Math.floor((untilChristmas / 1000) % 60)
  ).padStart(2, "0");

  clockTitle.innerText = `${untilChristmasDay}d ${untilChristmasHour}h ${untilChristmasMin}m ${untilChristmasSec}s 🎅🏻`;
}

waitingForChristmas();
setInterval(waitingForChristmas, 1000);
