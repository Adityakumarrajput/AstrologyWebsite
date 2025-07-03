
///based on basic insights based on dob 

///based on month
const zodiacMessages = {
  Aries: "You're bold, confident, and love adventure.",
  Taurus: "Reliable, patient, and very grounded.",
  Gemini: "You're smart, social, and curious.",
  Cancer: "Caring, emotional, and family-oriented.",
  Leo: "You're a natural leader, full of charisma.",
  Virgo: "You are practical, logical, and a perfectionist.",
  Libra: "Charming, balanced, and love harmony.",
  Scorpio: "Mysterious, passionate, and intuitive.",
  Sagittarius: "Adventurous, honest, and love freedom.",
  Capricorn: "Disciplined, ambitious, and hardworking.",
  Aquarius: "Innovative, independent, and humanitarian.",
  Pisces: "Dreamy, kind-hearted, and artistic."
};

function getZodiacSign(day, month) {
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
  if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
  if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn";
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
  return "Unknown";
}

const compliments = ["You light up every room you enter.", "Your smile is contagious.", /* ... add up to 31 items */];
const victimCardCompliments = ["You give so much to others, even when they don’t notice.", /* ... 20 items */];
const futurePredictions = ["You will become a crorepati — and sooner than you think!", /* ... 20 items */];
const lifeRecommendations = ["Help someone today, even if it’s just with a smile.", /* ... 30 items */];

const form = document.getElementById("astroForm");
const result = document.getElementById("result");
const loading = document.getElementById("loading");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const surname = document.getElementById("surname").value.trim();
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  if (!name || !surname || isNaN(day) || isNaN(month) || isNaN(year)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  loading.style.display = "block";
  result.innerHTML = "";

  setTimeout(() => {
    loading.style.display = "none";

    const zodiac = getZodiacSign(day, month);
    const first_message = `Hello ${name} ${surname}, based on your birthdate, here's what the stars say:`;
    const second_message = `Your zodiac sign is: <strong>${zodiac}</strong><br>${zodiacMessages[zodiac] || "No message found."}`;
    const third_message = compliments[(day - 1) % compliments.length];
    const fourth_message = victimCardCompliments[Math.floor(Math.random() * victimCardCompliments.length)];
    const futureIndex = (name.length * surname.length * year.toString().length) % futurePredictions.length;
    const fifth_message = futurePredictions[futureIndex];
    const lifeIndex = (day * month * year) % lifeRecommendations.length;
    const sixth_message = lifeRecommendations[lifeIndex];

    result.innerHTML = `
      <p>${first_message}</p>
      <p>${second_message}</p>
      <p>${third_message}</p>
      <p>${fourth_message}</p>
      <p>Our recommendation for you: ${fifth_message}</p>
      <p>${sixth_message}</p>
    `;
  }, 1500);
});