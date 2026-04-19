# models/Alerts_model.py
from pydantic import BaseModel
from typing import Optional

class Alerts(BaseModel):
    id_alert: Optional[int] = None
    id_student: int
    tipo_alert: str
    description: str
    generation_date: str
    risk_level: str
    state: str
    id_period: int