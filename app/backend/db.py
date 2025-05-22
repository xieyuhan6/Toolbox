from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL="postgresql://postgres.bjpyqxacvzcmvhqpcnec:123456@aws-0-eu-north-1.pooler.supabase.com:6543/postgres"
engine = create_engine(DATABASE_URL)
Base = declarative_base()
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
