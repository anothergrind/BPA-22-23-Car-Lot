from sqlalchemy import Boolean, Column, Integer, String, Float
from pydantic import BaseModel
from sql import Base


class User(Base):
    def __init__(self, id: int, email: str, hashed_password: str, is_active: bool, guid=String):
        self.id = id
        self.email = email
        self.hashed_password = hashed_password
        self.is_active = is_active
        self.guid = guid
    __tablename__ = "users"

    id = Column(Integer)
    email = Column(String)
    hashed_password = Column(String)
    is_active = Column(Boolean)
    guid = Column(String, primary_key=True)


# Car list attributes:
# name,
# price range,
# mileage,
# fuel type,
# lifestyle,
# make,
# model,
# year,
# car condition,
# mileage,
# body type,
# clyinder

class Carlist(Base):
    def __init__ (self, id: int, name: str, price_range: str, mileage: int, fuel_type: str, lifestyle: str, make: str, model: str, year: int, condition: str, body_type: str, cylinder: str, price: float, image_url: str):
        self.id = id
        self.name = name
        self.price_range = price_range
        self.mileage = mileage
        self.fuel_type = fuel_type
        self.lifestlye = lifestyle
        self.make = make
        self.model = model
        self.year = year
        self.condition = condition
        self.body_type = body_type
        self.cylinder = cylinder
        self.price = price
        self.image_url = image_url
    __tablename__ = "car"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    price_range = Column(Float)
    mileage = Column(Integer)
    image_url = Column(String)