const questions = [
    {
      id: 1,
      question: `
  #include <stdio.h>
  
  int main() {
      int year;
  
      printf("Enter a year: ");
      scanf("%d", &year);
  
      if ((year % 400 == 0) || (year % 100 != 0 && year % 4 == 0)) {
          printf("%d is a leap year.\\n", year);
      } else {
          printf("%d is not a leap year.\\n", year);
      }
  
      return 0;
  }`, // C code as a template literal
      options: [
        "The year is a leap year.",
        "The year is not a leap year.",
        "The year is 2000.",
        "Both leap year and not leap year are possible outputs."
      ],
      answer: "Both leap year and not leap year are possible outputs.",
    },
    {
      id: 2,
      question: `
  #include <stdio.h>
  
  int main() {
      int n, i;
      unsigned long long factorial = 1; 
  
      printf("Enter an integer: ");
      scanf("%d", &n);
  
      if (n < 0) {
          printf("Error! Factorial of a negative number doesn't exist.\\n");
      } else {
          for (i = 1; i <= n; ++i) {
              factorial *= i;
          }
          printf("Factorial of %d = %llu\\n", n, factorial);
      }
  
      return 0;
  }`, // C code as a template literal
      options: [
        "Factorial of 0 is 1.",
        "Factorial of 5 is 120.",
        "Factorial of -1 results in an error.",
        "All of the above."
      ],
      answer: "All of the above.",
    },
    {
      id: 3,
      question: `
  #include <stdio.h>
  
  int main() {
      int n, reversed = 0, remainder;
  
      printf("Enter an integer: ");
      scanf("%d", &n);
  
      while (n != 0) {
          remainder = n % 10; 
          reversed = reversed * 10 + remainder;  
          n /= 10; 
      }
  
      printf("Reversed number: %d\\n", reversed);
  
      return 0;
  }`, // C code as a template literal
      options: [
        "The input number is unchanged.",
        "The reversed number is printed.",
        "Negative numbers cannot be reversed.",
        "All of the above."
      ],
      answer: "The reversed number is printed.",
    },
  ];
  
  export default questions;