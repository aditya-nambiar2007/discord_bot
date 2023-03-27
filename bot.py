import discord
from discord import app_commands
import json


points=json.load( open("data.json","r") ) 


client = discord.Client(intents=discord.Intents.default())

cmd=app_commands.CommandTree(client)

@cmd.command(name = "register", description = "REGISTER FOR 100 POINTS")
async def first_command(interaction:discord.Interaction):
    user="b"+ str(interaction.user.id)
    points[user]=points.get(user) or 100
    await interaction.response.send_message(f'You Have {points.get(user)} points')
    print(points[user])




@client.event
async def on_ready():
    await cmd.sync()
async def on_message(message):
    print(message.author.id)

client.run('MTA4OTUwNTE0NDY5NTE2MDgzMg.GZzkiP.RAtqsHtChmDzxUei31rGmLTfxs1eEuwk2MqfOk')

while 1==1:
    f=open("data.json","w")
    f.write(json.dumps(points))