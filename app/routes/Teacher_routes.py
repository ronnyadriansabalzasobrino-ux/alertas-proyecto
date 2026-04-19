from fastapi import APIRouter
from app.controllers.Teacher_controller import *
from app.models.Teacher_model import Teacher

router = APIRouter()
nuevo_Teacher = TeacherController()

@router.post("/create_Teacher")
async def create_teacher(teacher: Teacher):
    return nuevo_Teacher.create_Teacher(teacher)

@router.get("/get_Teacher/{id_Teaching}", response_model=Teacher)
async def get_Teacher(id_Teaching: int):
    return nuevo_Teacher.get_Teacher(id_Teaching)

@router.get("/get_Teacher/")
async def get_Teachers():
    return nuevo_Teacher.get_Teachers()

@router.put("/update_Teacher/{id_Teaching}")
async def update_Teacher(id_Teaching: int, Teacher: Teacher):
    return nuevo_Teacher.update_Teacher(id_Teaching, Teacher)

@router.delete("/delete_docente/{id_Teaching}")
async def delete_Teacher(id_Teaching: int):
    return nuevo_Teacher.delete_Teacher(id_Teaching)

# 🔥 POWER BI
@router.get("/teachers_public")
async def teachers_public():
    return nuevo_Teacher.get_Teachers()