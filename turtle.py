import turtle as t

t.setup(width=0.5, height=0.5, startx=None, starty=None)
t.color('red')
t.penup()
t.goto(200,50)
t.pendown()
t.begin_fill()
t.color("red")
t.pensize(4)
t.speed(2)
t.color("blue")
t.circle(-75,steps=6)
t.end_fill()
t.penup()
t.goto(0, 0)
t.pendown()
t.circle(60)
t.done()
