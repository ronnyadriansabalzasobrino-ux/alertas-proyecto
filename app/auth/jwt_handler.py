import jose.jwt as jwt
from datetime import datetime, timedelta

SECRET_KEY = "secretfastapi123"  # cambia esto por algo seguro

def create_token(data: dict, expires_minutes=60):
    payload = data.copy()
    payload.update({"exp": datetime.utcnow() + timedelta(minutes=expires_minutes)})
    token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
    return token

def validate_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None