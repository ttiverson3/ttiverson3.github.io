from flask import Flask, render_template, url_for, request, redirect, session
import json
import os

app = Flask(__name__)
app.secret_key = os.urandom(16)

# 會員資料
with open("./static/member.txt") as f:
    data = json.load(f)

# 首頁
@app.route("/")
def index():
    return render_template("index.html")

# 登入
@app.route("/signin", methods = ["GET", "POST"])
def signIn():
    if request.method == "POST":
        try:
            # 取得會員 index 用來對應該會員的密碼
            member_index = [member["account"] for member in data["member"]].index(request.values["account"])
        except:
            pass
        # 帳號、密碼比對
        if request.values["account"] in [member["account"] for member in data["member"]] and request.values["password"] == data["member"][member_index]["password"]:
            session["account"] = request.values["account"]
            return redirect("/member")
        else:
            return redirect("/error")
    # 檢查使用者狀態
    if "account" not in session:
        return redirect(url_for("index"))

# 會員頁
@app.route("/member")
def member():
    return render_template("member.html")

# 登入失敗
@app.route("/error")
def error():
    return render_template("error.html")

# 登出
@app.route("/signout")
def signOut():
    session.pop("account")
    return redirect(url_for("index"))


if __name__ == "__main__":
    app.run(port = 3000, debug = True)