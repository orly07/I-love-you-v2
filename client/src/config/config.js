const config = {
  // ==== HOME PAGE ====
  homePage: {
    // Number of sentences displayed per slide
    sentencePerSlide: 2, // Adjust this to control how many sentences are shown per slide
    slides: [
      [
        "Hey my love",
        "I made something for you for Monthsarry 🥰",
        // If you set `sentencePerSlide` to 2, the next text won't be visible
        "Surprise!",
      ],
      [
        "This is not a regular website",
        "Coz I want you to do the work HAHAHA😈",
      ],
      ["I want to know how well you know me by now", "So enjoy!"],
      // You can add more slides or delete slides as needed
    ],
  },

  // ==== QUIZ PAGE ====
  quizPage: {
    // Color of the progress bar
    progressBarColor: "#cf6b87",
    // Text labels for the quiz
    text: {
      questionLabel: "Question",
      ofLabel: "out of",
      scoreLabel: "Score:",
      yourScoreLabel: "Your score:",
      nextButtonText: "Go to next page",
    },
    // Quiz questions and answers
    questions: [
      {
        id: 1, // Unique ID for the question
        title: "What is my favorite food?",
        description: "I always mention this food",
        correctAnswer: "spaghetti", // Correct answer value (must match one of the options' `value`)
        options: [
          { value: "spaghetti", label: "Filipino Style Spaghetti" },
          { value: "adobo", label: "Adobong Baboy" },
          { value: "carbonara", label: "Creamy Carbonara" },
          { value: "caldereta", label: "Caldereta" },
        ],
      },
      {
        id: 2,
        title: "What is my favorite drink?",
        description: "I buy this almost everyday",
        correctAnswer: "coffee",
        options: [
          { value: "coffee", label: "Coffee" },
          { value: "cappucino", label: "Caramel Frappucino" },
          { value: "tea", label: "Milk Tea" },
          { value: "coke", label: "Coca Cola" },
        ],
      },
      {
        id: 3,
        title: "When is my Birthday?",
        description: "Don't make the same mistake twice:D",
        correctAnswer: "sept-16",
        options: [
          { value: "sept-12", label: "September 12th" },
          { value: "oct-16", label: "October 16th" },
          { value: "august-14", label: "August 14th" },
          { value: "sept-16", label: "September 16th" },
        ],
      },
      // You can add more questions here
    ],
    // GIF ANIMATION CONFIGURATION
    gifConfig: [
      {
        check: (score) => score >= 3, // If score is 3 or above, this GIF will be shown
        heading: "Wow!!! UNBELIEVABLE! I LOVE YOU SO MUCH!",
        gifName: "gif4.gif", // Name of the GIF file in `src/assets/gifs`
        style: "w-44", // Tailwind CSS class for styling the GIF
      },
      {
        check: (score) => score === 2, // If score is exactly 2, this GIF will be shown
        heading: "Ehhh, not bad! so I still love you",
        gifName: "gif3.gif",
        style: "w-44",
      },
      {
        check: (score) => score === 1, // If score is exactly 1, this GIF will be shown
        heading: "It's okay, I know you tried so hard",
        gifName: "gif2.gif",
        style: "w-44",
      },
      {
        check: () => true, // Default case (if none of the above conditions are met)
        heading: "umm... wtf???",
        gifName: "gif1.gif",
        style: "w-44",
      },
    ],
  },

  // ==== DRAWING PAGE ====
  drawingPage: {
    // Messages displayed on the drawing page
    messages: [
      "Can you draw me a flower",
      "Give me another flower",
      "Draw me one last flower",
    ],
    // Colors available for drawing
    COLORS: ["#000000", "#FF7043", "#66BB6A", "#42A5F5", "#FFEE58"],
    // Text for the submit button
    text: {
      submitText: "Submit",
      finalText: "Thank you baby ❤️",
      loading: "Sending...",
    },
  },

  // ==== LETTER PAGE ====
  letterPage: {
    // Placeholder text for the letter input
    placeholder: {
      default: `Now, I want you to write me a letter :) Once you click "Send Message" I'll be able to see it hehe`,
      emptyInput: "You have to write me something first!! ):",
      success: "Thank you for the message my love!",
      error: "Failed to send the message. try it again!",
    },
    // Button text
    buttons: {
      sendMessage: "Send Message",
      clearText: "Clear",
      loading: "Sending...",
    },
    // API configuration for sending emails
    api: {
      baseURL: `https://i-love-you-v2-api.onrender.com/`,
      // Configure this based on your development port (check server/app.js or .env.PORT) and update this to your live backend URL after deployment

      sendEmailEndpoint: "/send-email", // Endpoint for sending emails
    },
  },

  // ==== CLOSING PAGE ====
  closingPage: {
    // Final message displayed on the closing page
    message:
      "Thank you for contributing to this project. I love you with all my heart",
    // GIF displayed on the closing page
    gifName: "closing.gif", // Name of the GIF file in `src/assets/gifs`
    style: "w-44", // Tailwind CSS class for styling the GIF
  },
};

export default config;
