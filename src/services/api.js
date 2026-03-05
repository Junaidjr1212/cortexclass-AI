// Simulated API delay
const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// ===== AI CHAT =====
export const sendAIMessage = async (message) => {
  await delay(1000);

  return `This is a demo AI response for: "${message}"`;
};

// ===== QUIZ GENERATION =====
export const generateQuizAPI = async (topic) => {
  await delay(800);

  return {
    question: `Sample Question about ${topic}?`,
    options: ["Option A", "Option B", "Option C", "Option D"]
  };
};

// ===== ANALYTICS DATA =====
export const fetchAnalyticsData = async () => {
  await delay(700);

  return {
    weekly: [70, 85, 78, 92, 88, 96, 82],
    subjects: [
      { name: "Math", score: 90 },
      { name: "Physics", score: 75 },
      { name: "Chemistry", score: 85 }
    ]
  };
};