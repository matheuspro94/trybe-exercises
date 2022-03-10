import time
import requests


for _ in range(15):
    response = requests.get('https://www.cloudflare.com/rate-limit-test/')
    print(response.status_code)
    time.sleep(5)
