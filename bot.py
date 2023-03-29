import discord
from discord import app_commands
import random
import json
from calci.calci import maths

units={
    "distance":{
        'mm':0.001,
        'cm':0.01,
        'm':1,
        'km':1000,
        'in':0.02541,
        'ft':0.3048,
        'yd':0.9144,
        'mi':1609.344,
        'NM':1852,
        'mil':0.0000254
    },
    "mass":{
        't':1000,
        'lb':0.45359237,
        'oz':0.0283495231,
        'kg':1,
        'g':0.001
    },
    'time':{
        'ms':0.001,
        's':1,
        'min':60,
        'hr':3600,
        'days':86400,
        'weeks':604800
    },
    'area':{
        'ac':4046.8564224,
        'a': 100,
        'ha':10000,
        'sq.cm':0.0001,
        'sq.ft':0.9290304,
        'sq.in':0.00064516,
        'sq.m': 1
    },
    'volume':{
        'us.gal':3.785411784,
        'ukgal':4.54609,
        'l':1,
        'ml':0.001,
        'cu.cm': 0.001,
        'cu.m':1000,
        'cu.in':0.016387064,
        'cu.ft':28.316846592
    }
}
unit_names={    "distance":{        'mm':"millimetre",        'cm':"centimetre",        'm':"metre",        'km':"kilometre",        'in':"inches",        'ft':"feet",        'yd':"yards",        'mi':"miles",        'NM':"Nautical Miles",        'mil':"mils"    },    "mass":{        't':"tonnes",        'lb':"pounds",        'oz':"ounces",        'kg':"kilogram",        'g':"gram"    },    'time':{        'ms':"milliseconds",        's':"seconds",        'min':"minutes",        'hr':"hours",        'days':"days",        'weeks':"weeks"    },    'area':{        'ac':"acres",        'a': "ares",        'ha':"hectares",        'sqcm':"Square Centimetre",        'sqft':"Square Feet",        'sqin':"Square Inch",        'sqm': "Square metre"    },    'volume':{        'usgal':"US Gallons",        'ukgal':"UK Gallons",        'l':"litre",        'ml':"millilitre",        'cucm': "Cubic Centimetre",        'cum':"Cubic Metre",        'cuin':"Cubic Inches",        'cuft':"Cubic Feet"    }}

choices=[]

for k in units:
    choices.append(app_commands.Choice(name=k.capitalize(), value=k))

def convert(q,u,v):
    quantity=units[q.value]
    unit=u.replace(" ","")
    unit=unit.replace("-",'","')
    unit=f'["{unit}"]'
    unit=json.loads(unit)

    val= str(v*quantity[ unit[0] ]/quantity[ unit[1] ]).replace('e',"×10 ^")
    return f'{v} {unit[0]} = {val} {unit[1]}'


client = discord.Client(intents=discord.Intents.default())

cmd=app_commands.CommandTree(client)

@cmd.command(name = "quiz", description = "START A QUIZ WITH 10 QUESTIONS")
async def first_command(interaction:discord.Interaction):
    await interaction.response.send_message(f'Type $quiz to start a quiz of 10 questions')




@cmd.command(name='convert', description="Convert Units")
@app_commands.describe(quantity="Quantity to convert" ,unit="Units to convert",value="Value to convert")
@app_commands.choices(quantity=choices)
async def clear(interaction: discord.Interaction, quantity:app_commands.Choice[str],unit:str,value:float):
      await interaction.response.send_message(convert(quantity,unit,value))

@cmd.command(name='units', description="View Units")
@app_commands.describe(quantity="Quantity" )
@app_commands.choices(quantity=choices)
async def clear(interaction: discord.Interaction, quantity:app_commands.Choice[str]):
      await interaction.response.send_message(
        quantity.name+":\n"+json.dumps(unit_names[quantity.value]).replace(",","\n").replace("{","").replace("}","").replace("\"","").replace(":"," => "))

@cmd.command(name='math', description="Evaluate A Math Expression")
@app_commands.describe(exp="Math Expression" )
async def clear(interaction: discord.Interaction, exp:str):
      await interaction.response.send_message(maths(exp))
       


@client.event
async def on_ready():
    await cmd.sync()


async def on_message(message):
    if  message.content.startswith('$quiz'):
        print('quiz')

client.run('MTA4OTUwNTE0NDY5NTE2MDgzMg.GZzkiP.RAtqsHtChmDzxUei31rGmLTfxs1eEuwk2MqfOk')
