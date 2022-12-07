from importlib.metadata import metadata
from xmlrpc.client import boolean
from fastapi import FastAPI, Depends, Form
from fastapi.responses import HTMLResponse
from models import User, Carlist
from pydantic import BaseModel
from sqlalchemy.orm import sessionmaker, Session
from sql import SessionLocal, engine, meta
import uvicorn, sql, uuid
from flask import request

User.metadata.create_all(bind=engine)
Carlist.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class user_model(BaseModel):
    id: int
    email: str
    hashed_password: str
    is_active: boolean

class car_model(BaseModel):
    id: int
    name: str
    price_range: float
    mileage: int
    image_url: str
    fuel_type: str
    lifestyle: str
    make: str
    model: str
    year: int
    condition: str
    body_type: str
    cylinder: str
    price: float






# @app.get("/")
# def start():
#     f = open("html\\index.html", "r")
#     html_content = f.read()
#     return HTMLResponse(content=html_content, status_code=200)

@app.get("/")
def start():
    f = open("src\index.js", "r")
    html_content = f.read()
    return HTMLResponse(content=html_content, status_code=200)



@app.post("/add-car")
def new_car(car: dict = Depends(car_model)):
    Session = sessionmaker(bind=engine)
    db = Session()

    id = car.id
    name = car.name
    price_range = car.price_range
    mileage = car.mileage
    fuel_type = car.fuel_type
    lifestyle = car.lifestyle
    make = car.make
    model = car.model
    year = car.year
    condition = car.condition
    body_type = car.body_type
    cylinder = car.cylinder
    price = car.price
    image_url = car.image_url


    the_car = Carlist(id, name, price_range, mileage, fuel_type, lifestyle,
    make, model, year, condition, body_type, cylinder, price, image_url)

    db.add(the_car)
    db.commit()

    return "added car"


@app.post("/delete/car")
def delete_car(id: int):
    Session = sessionmaker(bind=engine)
    db = Session()

    car = db.get(Carlist, id)

    db.delete(car)
    db.commit()

    return "deleted"


@app.get("/get-cars")
def get_cars():
    Session = sessionmaker(bind=engine)
    db = Session()

    cars = db.query(Carlist).all()

    return cars

@app.get("/search-cars")
def search_cars(category: str, parameter: object):
    Session = sessionmaker(bind=engine)
    db = Session()

    if category == "name":
        cars_by_names = db.query(Carlist).filter_by(name = parameter).distinct().all()
        return cars_by_names


    elif category == "price_range":
        cars_by_price_range = db.query(Carlist).filter_by(price_range = parameter).distinct().all()
        return cars_by_price_range


    elif category == "mileage":
        cars_by_mileage = db.query(Carlist).filter_by(mileage = parameter).distinct().all()
        return cars_by_mileage


    elif category == "fuel_type":
        cars_by_fuel_type = db.query(Carlist).filter_by(fuel_type = parameter).distinct().all()
        return cars_by_fuel_type


    elif category == "lifestyle":
        cars_by_lifestlye = db.query(Carlist).filter_by(lifestyle = parameter).distinct().all()
        return cars_by_lifestlye


    elif category == "make":
        cars_by_make = db.query(Carlist).filter_by(make = parameter).distinct().all()
        return cars_by_make


    elif category == "model":
        cars_by_model = db.query(Carlist).filter_by(model = parameter).distinct().all()
        return cars_by_model


    elif category == "year":
        cars_by_year = db.query(Carlist).filter_by(year = parameter).distinct().all()
        return cars_by_year


    elif category == "condition":
        cars_by_condition = db.query(Carlist).filter_by(condition = parameter).distinct().all()
        return cars_by_condition


    elif category == "body_type":
        cars_by_body_type = db.query(Carlist).filter_by(body_type = parameter).distinct().all()
        return cars_by_body_type


    elif category == "cylinder":
        cars_by_cylinder = db.query(Carlist).filter_by(cylinder = parameter).distinct().all()
        return cars_by_cylinder


    elif category == "price":
        cars_by_price = db.query(Carlist).filter_by(price = parameter).distinct().all()
        return cars_by_price

    else:
        return None





@app.post("/add/user")
def new_user(id: int = Form(), email: str = Form(), hashed_password: str = Form(), is_active: boolean = Form()):
    Session = sessionmaker(bind=engine)
    db = Session()

    guid = uuid.uuid4()
    guid = str(guid)


    the_user = User(id, email, hashed_password, is_active, guid)

    db.add(the_user)
    db.commit()

    return "added user"





# @app.get("/get/books")
# def get_books():
#     Session = sessionmaker(bind=engine)
#     db = Session()

#     books = db.query(Booklist.title).all()

#     return books





@app.post("/delete/user")
def delete_user(guid: str):
    Session = sessionmaker(bind=engine)
    db = Session()

    user = db.get(User, guid)

    db.delete(user)
    db.commit()

    return "deleted"




# @app.post("/delete/book")
# def delete_book(guid: str):
#     Session = sessionmaker(bind=engine)
#     db = Session()

#     book = db.get(Booklist, id)

#     db.delete(book)
#     db.commit()

#     return "deleted"



if __name__ == "__main__":
    get_db()

    uvicorn.run("main:app", host="localhost", port=8000, reload=True)
