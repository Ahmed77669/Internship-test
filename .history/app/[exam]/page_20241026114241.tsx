'use client'
import Exams from '@/components/Exams/Exams';
import  router from 'next/router';
const Exam = ({ params }:{ params: { exam: string } }) => {
return <Exams quiz={Number(params.exam)}/>
};

export default Exam;