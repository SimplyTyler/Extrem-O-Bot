using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Discord;
using Discord.Net;
using Discord.WebSocket;
using Discord.Commands;
using System.Reflection;

/*Copyright [2020] [Tyler-Ka and copycat240]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.*/

namespace Extrem_Discord
{
    public class BotClient
    {
        public DiscordSocketClient DiscordSocket { get; } //The Client that connects to the discord servers
        public CommandService CommandManager { get; } // The Service that will handle all command cases
        private string token; // Bot Special Token
        public CancellationTokenSource cancellationToken = new CancellationTokenSource(); // Token used to stop the bot
        public BotClient(string Token, LogSeverity LogLevel = LogSeverity.Debug, bool CaseSensitiveCommands = false)
        {
            token = Token;
            DiscordSocket = new DiscordSocketClient(new DiscordSocketConfig { LogLevel = LogLevel });
            CommandManager = new CommandService(new CommandServiceConfig { CaseSensitiveCommands = CaseSensitiveCommands, LogLevel = LogLevel, DefaultRunMode = RunMode.Async });
        }
        public async Task Start()
        {
            await DiscordSocket.LoginAsync(TokenType.Bot, token);
            await DiscordSocket.StartAsync();
            await Task.Delay(-1, cancellationToken.Token);
        }
        /// <summary>
        /// Stops a Running Bot
        /// </summary>
        /// <returns></returns>
        public async Task Stop()
        {
            if (DiscordSocket.ConnectionState == ConnectionState.Connected)
            {
                cancellationToken.Cancel();
                await DiscordSocket.LogoutAsync();
                await DiscordSocket.StopAsync();
            }
            else
            {
                throw new Exception("Bot is currently not connected. So it can't be stopped.");
            }
        }
        public async Task LoadCommands()
        {
            await CommandManager.AddModulesAsync(Assembly.GetEntryAssembly(), null);
        } 
    }
}
 