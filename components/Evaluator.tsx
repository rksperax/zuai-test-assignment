import Image from "next/image";
import EvaluationImage from "../public/images/evaluation.webp";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import FileDropZone from "./ui/FileDropZone";
import MyCoursework from "./MyCoursework";
import ExploreCoursework from "./ExploreCoursework";

const Evaluator = () => {
    

    return (
        <main className="w-full flex items-end justify-center flex-grow flex-shrink-0 basis-0 self-stretch relative flex-1">
            <div className="sm:min-h-lvh flex flex-col items-center justify-center gap-8 flex-grow flex-shrink-0 basis-0 self-stretch flex-1 py-10 2xl:py-20">
                <section className="flex items-end justify-center gap-4 px-3 py-5 md:px-5 sm:px-4">
                    <div className="max-w-[500px] xl:max-w-[600px] flex flex-col items-start gap-6">
                        <h1 className="text-2xl lg:text-[28px] leading-snug font-['Mont-ExtraBold'] font-extrabold text-neutral-900 self-stretch xl:pr-0 lg:pr-32">
                            <span className="text-[#1e2026]">
                                Hey IB Folks ! Unsure about the quality of your answers?
                            </span>
                            <span className="text-brand-primary">
                                &nbsp;We get you.
                            </span>
                        </h1>

                        <div className="w-full flex flex-col items-center justify-center gap-8 mx-auto bg-[#fcfbfd] rounded-3xl p-3 lg:p-5">
                            <div className="w-full flex flex-col items-start gap-3 lg:gap-6 rounded-2xl">
                                <FileDropZone />

                                <div className="w-full flex flex-col items-center gap-4">
                                    <div className="flex flex-col items-start gap-2 self-stretch">
                                        <p className="text-sm text-normal text-neutrals-600 font-['Mont-SemiBold']">
                                            Select your course & subjects*
                                        </p>

                                        <div className="h-10 flex items-center gap-6">
                                            <Select>
                                                <SelectTrigger className="w-[180px] cursor-pointer border border-[#d6dfe4] rounded-3xl px-3 py-2">
                                                    <SelectValue placeholder="Coursework Type" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-xl">
                                                    <SelectItem value="tok" className="cursor-pointer rounded-lg">Tok Essay</SelectItem>
                                                    <SelectItem value="ext" className="cursor-pointer rounded-lg">Extended Essay</SelectItem>
                                                </SelectContent>
                                            </Select>

                                            <Select>
                                                <SelectTrigger className="w-[180px] cursor-pointer rounded-3xl px-3 py-2">
                                                    <SelectValue placeholder="Subject" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-xl">
                                                    <SelectItem value="tok" className="cursor-pointer rounded-md">Language And Literature</SelectItem>
                                                    <SelectItem value="ext" className="cursor-pointer rounded-md">Business Management</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start gap-2 self-stretch">
                                        <p className="text-sm text-normal text-neutrals-600 font-['Mont-SemiBold']">
                                            Enter your essay title*(Required)
                                        </p>

                                        <div className="w-[330px] h-10 flex items-center gap-6 rounded-3xl">
                                            <Input placeholder="how nation works....." className="text-sm text-[#1e2026] font-['Mont-SemiBold'] border border-[#d6dfe4] rounded-3xl px-3 py-5 leading-4 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start justify-center gap-2.5 self-stretch">
                                <button className="inline-flex items-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-[40px] w-full justify-center gap-2 rounded-3xl bg-brand-primary p-2 pr-6 text-[18px] font-['Mont-Bold'] font-bold leading-[normal] hover:bg-brand-primary disabled:bg-[#adb8c9] sm:w-fit" type="button" disabled={true}>
                                    <svg className="size-6 rounded-xl" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect width="24" height="24" fill="white" fillOpacity="0.8"></rect>
                                        <g clipPath="url(#clip0_1_1311)">
                                            <path d="M10.9525 7.46965L10.8015 7.41047L10.6502 7.46896L9.44001 7.93686L9.91754 6.74249L9.97701 6.59375L9.92152 6.44348L9.51857 5.35217L10.5975 5.76042L10.7488 5.81769L10.8992 5.75778L12.0959 5.2809L11.6287 6.49349L11.5698 6.64631L11.6308 6.79834L12.0765 7.91014L10.9525 7.46965ZM17.9466 14.4676L17.7965 14.4116L17.6476 14.4705L16.4573 14.9411L16.9311 13.756L16.9926 13.6021L16.9316 13.448L16.4843 12.318L17.6022 12.7705L17.7573 12.8333L17.9127 12.7713L19.1002 12.2981L18.6302 13.4909L18.5709 13.6414L18.6287 13.7925L19.0438 14.8774L17.9466 14.4676ZM9.90976 16.6878L9.76487 16.6357L9.62093 16.6903L6.52116 17.8674L7.69824 14.7677L7.75274 14.6241L7.7011 14.4796L6.59487 11.3826L9.70181 12.4807L9.84524 12.5313L9.98759 12.4777L13.074 11.3146L11.9109 14.401L11.8571 14.5438L11.9082 14.6875L13.0164 17.8041L9.90976 16.6878Z" fill="#6947BF" stroke="#6947BF" strokeWidth="0.833333"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_1311">
                                                <rect width="20" height="20" fill="white" transform="translate(2 2.00012)"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className="text-white leading-5">Evaluate your Score</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden h-full lg:flex items-end">
                        <Image src={EvaluationImage} alt="evaluation-image" width={290} height={528} priority={true} fetchPriority="high" decoding="async" className="sm:w-[290px] h-auto" />
                    </div>
                </section>

                <MyCoursework />

                <ExploreCoursework />
            </div>
        </main>
    );
};

export default Evaluator;