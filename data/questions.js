// SAMPLE questions to demonstrate the system. Replace/extend with the school's own.
const q = (id, subject, classLevel, topic, difficulty, question, options, answer, explanation) =>
  ({ id, subject, classLevel, topic, difficulty, question, options, answer, explanation });
export const questions = [
  q(1, "Mathematics", "JSS 1", "Fractions", "Easy", "What is 1/2 + 1/4?", ["1/3", "3/4", "2/3", "1"], "3/4", "1/2 equals 2/4, so 2/4 + 1/4 = 3/4."),
  q(2, "Mathematics", "JSS 1", "Numbers", "Easy", "What is 12 × 6?", ["62", "72", "66", "76"], "72", "12 × 6 = 72."),
  q(3, "Mathematics", "JSS 1", "Fractions", "Medium", "What is 3/5 of 20?", ["8", "10", "12", "15"], "12", "20 ÷ 5 = 4, and 4 × 3 = 12."),
  q(4, "Mathematics", "JSS 1", "Algebra", "Medium", "If x + 7 = 15, what is x?", ["6", "7", "8", "9"], "8", "Subtract 7 from both sides: x = 8."),
  q(5, "English Language", "JSS 1", "Grammar", "Easy", "Choose the correct word: She ___ to school every day.", ["go", "goes", "going", "gone"], "goes", "A singular subject takes the verb form 'goes'."),
  q(6, "English Language", "JSS 1", "Vocabulary", "Easy", "What is the opposite of 'ancient'?", ["Old", "Modern", "Large", "Quiet"], "Modern", "'Ancient' means very old; its opposite is 'modern'."),
  q(7, "English Language", "JSS 1", "Grammar", "Medium", "Which sentence is correct?", ["They was late.", "They were late.", "They is late.", "They be late."], "They were late.", "'They' takes the plural past form 'were'."),
];
