'use client'
import Exams from '@/components/Exams/Exams';
import router, { useRouter } from 'next/navigation';
const Exam = () => {
const route = useRouter();
const {quiz} = route.query;
return <Exams quiz={Number(quiz)}/>
};

export default Exam;