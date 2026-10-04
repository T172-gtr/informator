from datetime import date

from flask import Flask, render_template, request

from food import DiningMenu

app = Flask(__name__)



@app.route('/')
def main():
    return render_template('main.html')

@app.route('/dining-menu')
def food():
    return render_template('dining-menu.html')

@app.route('/time-table')
def time_table():
    return render_template('time-table.html')

@app.route('/events')
def events():
    return render_template('events.html')

@app.route('/olimp')
def olimps():
    return render_template('olimps.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/phones')
def phones():
    return render_template('importent-phones.html')





@app.route('/dining-menu')
@app.route('/dining-menu/<int:number>')
def dining_menu(number: int = None):
    lunch_type = request.args.get('type', 'льготный')
    if lunch_type not in['льготный', 'платный']:
        lunch_type = 'льготный'
    if number is None or number < 0 or number > 6:
        number = date.today().weekday()
    menu = DiningMenu.from_weekday(number)
    days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"]
    return render_template(
        'dining-menu.html',
        menu=menu,
        lunch_type=lunch_type,
        weekday=number,
        days=days
    )


if __name__ == '__main__':
    app.run(debug=True)

