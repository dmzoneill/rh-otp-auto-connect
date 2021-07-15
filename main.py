from fastapi import FastAPI
import subprocess

app = FastAPI()

@app.get("/")
def read_pw():
    with open('key','r') as f:
        key = f.read()
        token = subprocess.run(['./getpw'], stdout=subprocess.PIPE)
        token = token.stdout.decode("utf-8")
        return key.strip() + token.strip()
