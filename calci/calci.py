import math
import re
from decimal import Decimal,getcontext
getcontext().prec=50

#tokens

tokens=("e","f","pi","ln","log","abs","sin","asin","sinh","asinh","cos","acos","cosh","acosh","tan","atan","tanh","atanh")

#constants

pi=math.pi
e =math.e

#functions

ln= lambda n : math.log(n)
log= lambda n : math.log10(n)

sin= lambda n : math.sin(n)
asin= lambda n : math.asin(n)
sinh= lambda n : math.sinh(n)
asinh=lambda n : math.asinh(n)

cos= lambda n : math.cos(n)
acos= lambda n : math.acos(n)
cosh= lambda n : math.cosh(n)
acosh=lambda n : math.acosh(n)

tan   =    lambda n : math.tan(n)
atan  =   lambda n : math.atan(n)
tanh  =   lambda n : math.tanh(n)
atanh =  lambda n : math.atanh(n)
f     =lambda n:math.factorial(n)

def maths(n):
    correct=True
    for x in re.findall("[a-z]+",n):
        if x not in tokens:    correct=False
    if not correct :
        return "Invalid Input"
    else:
        try :
            ans=Decimal(eval(n.replace("^","**").replace("×","*").replace("÷","/") ))
            return f"ANSWER : {ans}".replace("e", "×10 ^")
        except e :
            print(e)
            return "ERROR !"


