from os import name
import socket

s = socket.socket()
print("socket created")

s.bind(("local host" , 9999))
s.listen(3)
print("waiting for the connection")

while True:
    c, addr = s.accept()
    name = c.recv(1024).decode()
    print("connected with " , addr , name)

    c.send(bytes("welcome to my personal computer" , "utf-8"))

    c.close()