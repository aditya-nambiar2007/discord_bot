import discord
from discord import app_commands as command


points={}

client = discord.Client(intents=discord.Intents.default())

cmd=command.CommandTree(client)

@cmd.command(name = "register", description = "REGISTER FOR 100 POINTS",guild=discord.Object(id=984131715721224203))
async def first_command(interact):
    points[interact.author]=points.get(interact.author) or 100
    await interact.response.send_message(f'You Have {points.get(interact.author)} points')

@client.event
async def on_message(message):
    print(message.guild.id)

client.run('MTA4OTUwNTE0NDY5NTE2MDgzMg.GZzkiP.RAtqsHtChmDzxUei31rGmLTfxs1eEuwk2MqfOk')