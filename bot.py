import discord
from discord import app_commands
import json


points=json.load( open("data.json","r") ) 


client = discord.Client(intents=discord.Intents.default())

cmd=app_commands.CommandTree(client)

@cmd.command(name = "register", description = "REGISTER FOR 100 POINTS",guild=discord.Object(id=984131715721224203))
async def first_command(interaction):
    points[interaction.author]=points.get(interaction.author) or 100
    await interaction.response.send_message(f'You Have {points.get(interaction.author)} points')

@client.event
async def on_message(message):
    print(message.guild.id)

client.run('MTA4OTUwNTE0NDY5NTE2MDgzMg.GZzkiP.RAtqsHtChmDzxUei31rGmLTfxs1eEuwk2MqfOk')

while 1==1:
    f=open("data.json","w")
    f.write(json.dumps(points))