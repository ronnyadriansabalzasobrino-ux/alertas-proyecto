from pydantic import BaseModel
from typing import Optional

class Subjects(BaseModel):
    id_subject: Optional[int] = None
    name_subject: str
    credits: int
    id_program: int
    
    