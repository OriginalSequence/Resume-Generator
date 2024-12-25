# Resume Generator Project

I developed a Resume Generator web app using React and Material-UI to make it easy for users to create and customize their resumes.

**Purpose:**
The goal of this project was to provide a simple and efficient way for users to build their resumes, offering pre-designed templates and an intuitive interface for adding personal and professional details.

**Preview:**
![image](https://github.com/user-attachments/assets/20d6fd0c-afb0-4d40-84dd-73df5bfecca7)

**Technologies Used:**
- **Frontend:** React, Material-UI
- **PDF Generation:** html2canvas, jsPDF
- **Data Handling:** React Hooks (useState, useEffect)
- **Drag and Drop:** Sortable.js

**Main Features:**
1. **Editable Fields:** Users can fill out and edit their personal information, education, work experience, skills, and projects.
2. **Template Generator:** A "Generate Template" button fills the form with sample data, helping users see the structure and content needed for a professional resume.
3. **PDF Download:** Users can preview their resume and download it as a PDF with one click, keeping the chosen format and style.
4. **Reorder Sections:** Users can drag and drop sections (like education and experience) to arrange them as they prefer.
5. **Real-Time Customization:** Any changes users make are shown immediately in the preview, making it easy to tweak the details.

**Outcome:**
The Resume Generator provides a solution for creating professional one-page resumes. It makes the process smooth and straightforward, from entering data to getting a downloadable PDF. This project improved my React skills and taught me how to use Material-UI and document generation, rendering and downloading.

## How to Clone and Run the Project

### Prerequisites

- Node.js and npm installed on your machine.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/OriginalSequence/Resume-Generator.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd Resume-Generator
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open Your Browser**:
   - Navigate to the URL provided in the terminal output (e.g., http://localhost:3000), to see the application running in your preffered web browser.


**WIP and Future Ideas:**
- Make the components moveable (Drag and drop), eg. move skills to the top (Done)
- Maybe integrate ai
- Include apis?
- Add a template generator? Templates can be stored and managed client-side. (Done)
- Make the bullet points round (Done)
- Add a download as pdf button (Done)
- For the personal info on the cv preview only let the vertical dividers appear if i fill in two optional fields and 
let 2 divides appear if i fill in 3 (Done)
- Maybe add a history section to view editing history (Requires backend)
- Ability to add additional fields to personal information section (done)
- Rich Text Editor: Can be implemented using libraries like Draft.jsor Quill.js, all within the client-side.
- Spell Check and Grammar Suggestions: Basic spell check can be handled client-side using browser features or api.
- Interactive tutorial or description?
- Built in ATS checker?
- Testing



