import Exams from '@/components/Exams/Exams';
import router, { useRouter } from 'next/router';
const Exam = () => {
const {quiz} = router.query;
return <Exams quiz={Number(quiz)}/>
};

export default Exam;