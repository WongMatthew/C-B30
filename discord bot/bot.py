import os
import responses
from flask import Flask, request
from revChatGPT.ChatGPT import Chatbot
import json
import discord
from discord.ext import commands
from decouple import config

async def send_msg(msg, user_msg, is_private):
    try:
        response = responses.handle_response(user_msg)
        await msg.author.send(response) if is_private else await msg.channel.send(response)
    except Exception as e:
        print(e)

#app = Flask(__name__)
#config = json.load(open("../REST API/config.json"))
#chatbot = Chatbot(config)
client = discord.Client(intents=discord.Intents.default())

@client.event
async def on_message(message):
    if(message.author == client.user):
        return
    
    print(message)
    username = str(message.author)
    user_msg = str(message.content)
    channel = str(message.channel)
    
    print(f"{username} said: '{user_msg}' ({channel})")

    if(user_msg[0] == '!'):
        user_msg = user_msg[1:]
        await send_msg(message, user_msg, is_private=True)
    else:
        await send_msg(message, user_msg, is_private=False)

@client.event
async def on_ready():
    print(f'{client.user} is logged in at the moment!')

client.run(config('DISCORD_TOKEN'))