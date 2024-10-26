'use client'
import Exams from '@/components/Exams/Exams';
import  router from 'next/router';
const Exam = () => {
const {quiz} = router.query;
return <Exams quiz={Number(quiz)}/>
};

export default Exam;