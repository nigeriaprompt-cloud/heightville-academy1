import PageHero from "@/components/PageHero";
import Quiz from "@/components/Quiz";
import QuestionOfTheDay from "@/components/QuestionOfTheDay";
import { questions } from "@/data/questions";
export const metadata = { title: "Learning Centre", description: "Free objective-question practice for students." };
export const revalidate = 3600;

export default function Learning() {
  return (
    <>
      <PageHero title="Learning Centre" intro="Practise objective questions and review explanations. No login needed." />
      <section className="section"><div className="wrap two">
        <Quiz questions={questions} />
        <QuestionOfTheDay />
      </div></section>
    </>
  );
}
