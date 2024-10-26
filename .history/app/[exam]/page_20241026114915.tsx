import Exams from '@/components/Exams/Exams';
const Exam = ({ params }:{ params: { exam: string } }) => {
return <Exams quiz={Number(params.exam)}/>
};

export default Exam;