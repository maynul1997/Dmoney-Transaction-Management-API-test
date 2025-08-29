# Dmoney-Transaction-Management-API-test
## Project Overview
-This project is dedicated to testing the **Dmoney REST API** to ensure its proper functionality, uncover any potential issues, and suggest improvements.  
The scope of testing includes creating, managing, and processing transactions for different user roles, such as:  
- Admins  
- System Users  
- Agents  
- Customers  
- Merchants
  
---
## Tools and Technology
- Postman
- Newman
- Nodejs
- VSCode
  
---
## Tasks and Flows

### 1. **Test Cases**
Created **test cases** for the following scenarios:
- Admin creates an Agent, 2 Customers, and a Merchant.
- System deposits money to the Agent.
- Agent deposits money to a Customer.
- Check Agent's balance.
- Send money between Customers.
- Customer withdraws money to the Agent.
- Check Customer's balance and transaction statement.
- Customer makes a payment to a Merchant.
- Check balances and transaction statements for Customers,
- The Merchant checks his balance.

[📊 CLick here to see my Test Cases](https://docs.google.com/spreadsheets/d/1fht92TaWiLSPYuPK1sZ0LM-Ey5lJZGCS-1GcJR4NXRA/edit?gid=0#gid=0)

### 2. **Postman Collection**
- Created a Postman collection for all the scenarios.
- Added **negative test cases** for validation and error handling.

[👉 Click here to see my Postman Collection](https://www.postman.com/mynul2/workspace/my-workspace/collection/44634400-7711b16d-d1e2-475a-aed5-6b9e66f917a7?action=share&source=copy-link&creator=44634400)

## 🔗 Endpoints Used
- [User API](http://dmoney.roadtocareer.net/api-docs/user)  
- [Transaction API](http://dmoney.roadtocareer.net/api-docs/transaction)

---
### 3. **Newman Report**
Generated a report of all test cases using Newman.
Included summary screenshots of the execution.

### 📷 Report Screenshots  
<img width="1400" height="1411" alt="01" src="https://github.com/user-attachments/assets/332dce6e-ead3-4f25-b1a7-7dacc4b7750f" />
<img width="1380" height="4558" alt="02" src="https://github.com/user-attachments/assets/43f66d55-37a1-4a00-b59a-8fb85a211215" />


---
### 4. **Postman Documentation**
Postman documentation for the test cases and endpoints is available:  
[View the API Documentation](https://documenter.getpostman.com/view/44634400/2sB3HgR3rc)


---
### 5. **Bug Report**
Reported **Bug or Improvements** in a Google Sheet, with details such as:
- Issue Type (Bug/Improvement)
- Issue Title
- Description and Steps to Reproduce
- Actual vs Expected Results
- Priority and Severity
- Attachments with screenshots
  
[To see the Bug Report](https://docs.google.com/spreadsheets/d/1lp2hgaAPbIIgX-ReOhlGpGP9Q_q5lr2eRmQlMpjr954/edit?gid=0#gid=0)


---
## Follow these instructions to set up and run the project locally.

This project is designed to test the Dmoney REST API using JavaScript. It utilizes Node.js to run the test scripts and I provide a step-by-step guide for anyone to clone and run the project on their machine.



### Prerequisites

Ensure you have the following installed on your machine:  
- [Node.js](https://nodejs.org/) (version 14.x or later)  
- [Git](https://git-scm.com/)

### Installation

1. **Clone the Repository**  
  Open your terminal and run:
 'git clone https://github.com/maynul1997/Dmoney-Transaction-Management-API-test.git'

2. **Navigate to the Project Directory**  
   Change your working directory to the cloned repository:  
   `cd Dmoney-Transaction-Management-API-test`

3. **Install Dependencies**  
   Install the required dependencies using npm:  
   `npm install`

   ### Running the Project

Run the `Report.js` script using Node.js in the terminal:  
`npx newman run "copy & paste published collection link without inverted comma"`
Then 
`node Report.js`

### Expected Output

The script will run tests against the Dmoney REST API and display the results in the terminal.


## Contact

For any questions or issues, feel free to open an issue in the repository or contact me via - mamun.harf@gmail.com




