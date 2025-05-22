from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .db import SessionLocal, engine
from models import Base, Transaction as DBTransaction
from datetime import date

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
Base.metadata.create_all(bind=engine)
class Transaction(BaseModel):
    description: str
    amount:float
    date:date

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/add")
def add_transaction(data:Transaction,db: Session = Depends(get_db)):
    db_data=DBTransaction(
        description=data.description,
        amount=data.amount,
        date=data.date
    )
    db.add(db_data)
    db.commit()
    return {"message": "transaction added", "id":db_data.id}

@app.get("/all")
def load_transaction(db: Session = Depends(get_db)):
    all=db.query(DBTransaction).all()
    return all

@app.delete("/delete/{id}")
def delete_transaction(id: int,db: Session = Depends(get_db)):
    delete_one=db.query(DBTransaction).filter(DBTransaction.id==id).first()
    if delete_one is None:
        return {"error": "Transaction not found"}
    db.delete(delete_one)
    db.commit()
    return{"message": "transaction deleted", "id":id}

@app.get("/filter/{date}")
def filter_transactionDate(id: int,db: Session = Depends(get_db)):
    date_one=db.query(DBTransaction).filter(DBTransaction.date==date).al()
    if date_one is None:
        return {"error": "Transaction not found"}
    return date_one