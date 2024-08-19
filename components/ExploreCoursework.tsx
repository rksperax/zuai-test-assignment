import { useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ExploreCoursework = () => {
    useEffect(() => {
        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const getAIResponse = async () => {
            try {
                const prompt = "can you evaluate a IB content?";

                const result = await model.generateContent(prompt);

                const response = result.response;

                if (result && response) {
                    if (response.candidates === undefined) {
                        console.error(`Undefined response from AI`);
                        return;
                    }

                    const text = response.candidates[0].content.parts[0].text;

                    console.log(prompt);
                    console.log(text);
                } else {
                    console.error(`No response from AI`);
                }
            } catch (error: any) {
                console.error(`Error generating AI content: ${error.name}: ${error.message}`);
            }
        };

        getAIResponse();
    }, []);

    return (
        <section>

        </section>
    );
};

export default ExploreCoursework;