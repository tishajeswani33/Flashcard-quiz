# 🧠 Flashcard Quiz App (Python CLI Version)

A simple yet powerful **Python-based quiz app** that helps you test your knowledge across multiple categories like History, Science, Geography, and General Knowledge — all through an interactive command-line interface!

---

## 📌 Features

- ✅ Multiple quiz categories to choose from
- ⏱️ Optional timer for answering questions
- 🔀 Randomized questions each time you play
- 📊 Instant feedback and final score summary
- 🧩 Easy to add or modify question sets
- 💻 Runs entirely on your terminal (no GUI)

---

## 🛠️ Tech Stack

- **Language**: Python 3.x
- **Libraries**:  
  - `random` – for shuffling questions  
  - `json` – for loading question data  
  - `time` – for timer feature  
  - *(Optional)* `colorama` – for colored terminal output

---

## 📂 Folder Structure

flashcard_quiz/
├── quiz.py # Main script to run the app
├── questions/ # Folder containing category-wise questions
│ ├── history.json
│ ├── science.json
│ ├── geography.json
│ └── general.json
├── utils.py # Helper functions (optional)
└── README.md # This file

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tishajeswani33/flashcard-quiz.git
cd flashcard-quiz
pip install colorama
python quiz.py
📝 How to Add Your Own Questions
Go to the questions/ folder.

Open any .json file or create a new one.

Use the following format for each question:

json
Copy
Edit
{
  "question": "Which planet is known as the Red Planet?",
  "options": ["Earth", "Mars", "Venus", "Jupiter"],
  "answer": "Mars"
}
📷 Sample CLI Output
vbnet
Copy
Edit
Category: Science 🧬

Q1: Which gas do plants absorb from the atmosphere?
A. Oxygen
B. Nitrogen
C. Carbon Dioxide
D. Hydrogen

Your Answer: C
✅ Correct!

...
Final Score: 7/10 🎉
🤝 Contributing
Want to improve this project or add features? Feel free to fork the repo, raise issues, or submit pull requests!

📄 License
This project is licensed under the MIT License.

🔗 Let's Connect
If you liked this project or have suggestions, feel free to connect on LinkedIn or drop a ⭐ on the repo!

🎯 Ready to challenge your brain?
Fire up your terminal and start the Flashcard Quiz 


