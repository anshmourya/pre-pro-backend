require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "I will provide you with a YouTube video URL. From this video, you must create 10 questions that are directly related to its content. The questions should be designed to assess whether I have fully understood the video or need to watch it again. Ensure all questions can be answered solely based on the video and do not include any questions that require external knowledge or context.",
});

const qnaConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
    responseSchema: {
        type: "object",
        properties: {
            data: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        question: {
                            type: "string"
                        },
                        options: {
                            type: "array",
                            items: {
                                type: "string"
                            }
                        },
                        correct_answer: {
                            type: "string"
                        },

                    },
                    required: [
                        "question",
                        "options",
                        "correct_answer"
                    ]
                }
            }
        },
        required: [
            "data",
        ]
    },
};

// get question from video
/**
 * @param {string} videoUrl
 * @returns {Promise<string>}
 */
const getQuestionFromVideo = async (videoUrl) => {
    const chatSession = await model.startChatSession({
        qnaConfig
    });
    const response = await chatSession.sendMessage(videoUrl);
    return response;
};

module.exports = getQuestionFromVideo;