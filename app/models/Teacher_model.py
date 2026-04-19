from pydantic import BaseModel
from typing import Optional

class Teacher(BaseModel):
    id_teaching: Optional[int] = None
    name: str
    last_name: str
    number_id: str
    mail: str
    phone: str
    specialty: str

    
    