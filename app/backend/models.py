from sqlalchemy import Column, Integer, String, Float
from .db import Base

class Transaction(Base):
    __tablename__="Transaction"
    id=Column(Integer,primary_key=True,autoincrement=True)
    description = Column(String)
    amount = Column(Float)
    date = Column(String)