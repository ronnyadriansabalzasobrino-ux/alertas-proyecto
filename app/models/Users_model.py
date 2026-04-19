from pydantic import BaseModel

class Users(BaseModel):
    id_user: int | None = None
    name: str
    last_name: str
    post: str
    mail: str
    phone: str
    rol: str
    password: str