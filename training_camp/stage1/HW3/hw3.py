import requests
import json
import re

url = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json"
result = requests.get(url)
data = json.loads(result.text)["result"]["results"]

for item in data:
    img_url = re.search(r".*?\.(jpg|JPG|png|PNG)", item["file"]).group(0)
    with open("data.txt", "a", encoding = "utf-8") as f:
        f.write(item["stitle"] + "," + item["longitude"] + "," + item["latitude"] + "," + img_url + "\n")
    # print(item["stitle"] + ", " + item["longitude"] + ", " + item["latitude"] + ", " + img_url)

