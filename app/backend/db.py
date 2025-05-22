from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL="postgresql://postgres:123456@db.bjpyqxacvzcmvhqpcnec.supabase.co:5432/postgres"
engine = create_engine(DATABASE_URL)
Base = declarative_base()
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
