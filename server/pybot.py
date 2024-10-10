from fastapi import FastAPI, File, UploadFile, HTTPException
from pydantic import BaseModel
import pdfplumber
import ai21

# Set up AI21 API Key
ai21.api_key = "TVGNUVheNu8WR3KSHnUUV1yG9GvcpNLN"

app = FastAPI()

class ChatRequest(BaseModel):
    query: str

# Function to extract text from the PDF
def extract_text_from_pdf(file_path: str) -> str:
    try:
        with pdfplumber.open(file_path) as pdf:
            full_text = ""
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    full_text += page_text + "\n"
        return full_text.strip()
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error processing PDF")

# Route to handle PDF upload and summary generation
@app.post("/upload_pdf/")
async def upload_pdf(file: UploadFile = File(...)):
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="File must be a PDF")
    
    try:
        # Save the uploaded PDF
        file_location = f"temp_{file.filename}"
        with open(file_location, "wb") as f:
            f.write(await file.read())

        # Extract text from PDF
        pdf_text = extract_text_from_pdf(file_location)

        # Call AI21 API for summary generation using Jamba 1.5
        response = ai21.Summarize.execute(
            source=pdf_text,
            max_tokens=100  # You can adjust the token limit for longer/shorter summaries
        )

        summary = response['summary']
        return {"summary": summary}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Route to handle chat interaction with the PDF content using AI21 Jamba 1.5
@app.post("/chat_with_pdf/")
async def chat_with_pdf(chat_request: ChatRequest):
    try:
        # Call the AI21 API to interact with the PDF using Jamba 1.5 model
        response = ai21.Completion.execute(
            model="jamba-1.5-mini",  # Updated to use Jamba 1.5
            prompt=chat_request.query,
            max_tokens=200  # Adjust token length for longer responses if necessary
        )
        reply = response['completions'][0]['data']['text']
        return {"response": reply}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
