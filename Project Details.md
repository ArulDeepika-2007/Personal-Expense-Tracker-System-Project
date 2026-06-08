# Personal Expense Tracker Web Application

## Project Title
Personal Expense Tracker Web Application

---

## Problem Statement
Many students and individuals struggle to manage their daily expenses effectively. Without proper tracking, it becomes difficult to understand spending patterns, control unnecessary expenses, and plan savings.

Currently, most people use manual methods like notebooks or random notes, which are inefficient and error-prone.

There is a need for a simple, digital system that helps users record, categorize, and analyze their expenses in an organized way. The Personal Expense Tracker solves this problem by providing an easy-to-use web application for tracking income and expenses efficiently.

---

## Project Objectives
- To develop a simple and user-friendly expense tracking system.
- To allow users to add, edit, and delete expense records easily.
- To categorize expenses such as food, travel, education, shopping, etc.
- To provide a clear summary of total income and expenses.
- To help users analyze their spending habits.
- To store data securely using a database system.
- To improve financial awareness and budgeting skills among users.

---

## Module List

### 1. User Authentication Module
- User registration
- User login/logout
- Password management

### 2. Dashboard Module
- Display total income
- Display total expenses
- Display balance

### 3. Expense Management Module
- Add expense
- Edit expense
- Delete expense
- View expense list

### 4. Category Module
- Add categories (Food, Travel, Shopping, etc.)
- Filter expenses by category

### 5. Report & Analysis Module
- Monthly expense summary
- Graphical representation of expenses

### 6. Database Module
- Store user data securely
- Store expense records

---

## Table List (Database)

| Table Name  | Fields |
|------------|--------|
| **Users** | user_id (PK), name, email, password, created_at |
| **Expenses** | expense_id (PK), user_id (FK), title, amount, category, date, description |
| **Categories (Optional)** | category_id (PK), category_name |
| **Income (Optional)** | income_id (PK), user_id (FK), source, amount, date |

---

## Conclusion
The Personal Expense Tracker helps users manage their financial activities efficiently by providing a structured and easy-to-use platform for tracking expenses and income. It improves budgeting habits and financial awareness.

