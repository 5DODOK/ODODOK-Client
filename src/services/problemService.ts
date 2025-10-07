import customAxios from './customAxios';

// 문제 풀기 관련 타입
export interface ProblemQuestion {
  questionId: number;
  question: string;
}

export interface GetProblemsParams {
  category?: number; // category ID
  company?: number;  // company ID
}

export interface GetProblemsResponse {
  questions: ProblemQuestion[];
}

export interface FeedbackRequest {
  userAnswer: string;
  question: string;
}

export interface FeedbackResponse {
  feedback: string;
  additionalTip: string;
}

export interface AnswerItem {
  questionId: number;
  answer: string;
  timeSpent: number; // 초 단위
}

export interface SubmitAnswersRequest {
  answers: AnswerItem[];
  totalTimeSpent: number;
  submittedAt: string; // ISO 8601 format
}

export interface SubmitAnswersResponse {
  message: string;
  score: number;
  correctAnswers: number;
  pointsEarned: number;
  rank: number;
}

// 문제 목록 조회
export const getProblems = async (params: GetProblemsParams): Promise<GetProblemsResponse> => {
  const response = await customAxios.get('/problem', { params });
  return response.data;
};

// 답변 피드백
export const getFeedback = async (data: FeedbackRequest): Promise<FeedbackResponse> => {
  const response = await customAxios.post('/feedback', data);
  return response.data;
};

// 최종 제출
export const submitAnswers = async (data: SubmitAnswersRequest): Promise<SubmitAnswersResponse> => {
  const response = await customAxios.post('/problem', data);
  return response.data;
};
